import React, { useState } from 'react';
import { FaApple, FaEye, FaEyeSlash } from 'react-icons/fa';
import { FcGoogle } from "react-icons/fc";
import { FcOpenedFolder } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { auth, googleProvider, appleProvider } from '../firebase';  // inmprot Firebase 配置
import { signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth';  // login
import { useDispatch } from 'react-redux';
import {setAuthToken, setUserInfo} from "../store/authSlice";
import Swal from 'sweetalert2';  // inmprot SweetAlert2

function App() {
    const dispatch = useDispatch();
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    // Handling username and password login logic
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const result = await signInWithEmailAndPassword(auth, email, password);
            console.log(result)
            const user = result.user;

            // Get user information
            const userInfo = {
                email:user.email,
                photoURL:user.photoURL,
                fullName:user.displayName || 'Anonymous', // Use Firebase Username or Custom Fields
            };
            // After successful login, jump to the management page
            dispatch(setAuthToken(user.accessToken));
            dispatch(setUserInfo(userInfo));

            navigate('/admin/index');  // 
        } catch (error) {
            console.error('Error during login:', error.message);
            Swal.fire(
                'Login Failed',
                error.message,
                'error'
            );
        }
    };

    // Google login
    const handleGoogleLogin = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            const user = result.user;
            console.log(user)
            // 获取用户信息
            const userInfo = {
                email:user.email,
                photoURL:user.photoURL,
                fullName:user.displayName || 'Anonymous', // Use Firebase Username or Custom Fields
            };
            // After successful login, jump to the management page
            dispatch(setAuthToken(user.accessToken));
            dispatch(setUserInfo(userInfo));
            navigate('/admin/index');
        } catch (error) {
            console.error('Error during Google login:', error.message);
            Swal.fire(
                'Login Failed',
                error.message,
                'error'
            );
        }
    };

    // Apple login
    const handleAppleLogin = async () => {
        try {
            const result = await signInWithPopup(auth, appleProvider);
            const credential = result.credential;
            const user = result.user;

            navigate('/admin/index');
        } catch (error) {
            console.error('Error during Apple login:', error.message);
            Swal.fire(
                'Login Failed',
                error.message,
                'error'
            );
        }
    };

    return (
        <div className="flex min-h-screen">
            {/* Left */}
            <div className="w-1/2 bg-blue-600 text-white flex items-center justify-center px-8">
                <div>
                    <h1 className="text-4xl font-bold mb-4">Hey There, Welcome to GenderMag!</h1>
                    <p className={'text-gray-300'}>GenderMag can help you solve your problem, as long as you upload your data quickly for analysis.</p>
                </div>
            </div>

            {/* right */}
            <div className="w-1/2 bg-gray-50 flex items-center justify-center px-8">
                <div className="max-w-lg w-full space-y-8">
                    <section className={'flex justify-center items-center space-x-2'}>
                        <FcOpenedFolder size={38} />
                        <h2 className={'text-4xl font-bold'}>
                            GenderMag
                        </h2>
                    </section>
                    <div className="text-center">
                        <h2 className="text-2xl font-extrabold text-gray-900">Login</h2>
                    </div>

                    {/* login list */}
                    <form className="mt-8 space-y-6" onSubmit={handleLogin}>
                        <div className="shadow-sm space-y-6">
                            <div>
                                <label htmlFor="email" className={' font-bold'}>Email</label>
                                <input id="email" name="email" type="email" required
                                       value={email}
                                       onChange={(e) => setEmail(e.target.value)}
                                       className="appearance-none rounded-full relative block mt-3 font-bold w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                       placeholder="Enter your email" />
                            </div>
                            <div className="relative">
                                <label htmlFor="password" className={' font-bold'}>Password</label>
                                <section className={'relative'}>
                                    <input id="password" name="password" type={passwordVisible ? "text" : "password"}
                                           value={password}
                                           onChange={(e) => setPassword(e.target.value)}
                                           required
                                           className="appearance-none rounded-full pr-4 relative block mt-3 font-bold w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                           placeholder="Enter your password" />
                                    <div className="absolute right-4 z-10 top-1/2 -translate-y-1/2"
                                         onClick={togglePasswordVisibility}>
                                        {passwordVisible ? <FaEyeSlash className="text-gray-500" /> :
                                            <FaEye className="text-gray-500" />}
                                    </div>
                                </section>
                            </div>
                        </div>
                        <div>
                            <button type="submit"
                                    className="group relative w-full mt-12 flex justify-center py-4 px-4 border border-transparent text-sm font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Login
                            </button>
                        </div>
                    </form>

                    {/* Google 和 Apple login btn */}
                    <div className="flex justify-center">
                        <button
                            type="button"
                            onClick={handleGoogleLogin}
                            className="w-full py-3 px-4 border border-gray-300 rounded-full shadow-sm text-sm font-bold text-gray-700 bg-gray-100 hover:bg-gray-100 flex items-center justify-center">
                            <FcGoogle size={22} className="mr-2" /> Continue with Google
                        </button>
                    </div>
                    <div className="flex justify-center">
                        <button
                            type="button"
                            onClick={handleAppleLogin}
                            className="w-full py-3 px-4 border border-gray-300 rounded-full shadow-sm text-sm font-bold text-gray-700 bg-gray-100 hover:bg-gray-100 flex items-center justify-center">
                            <FaApple size={26} className="mr-2" /> Continue with Apple
                        </button>
                    </div>

                    {/* Registration page jump link */}
                    <div className="text-center text-gray-500 mt-4 font-bold">
                        Don’t have an account? <a href="/register" className="text-indigo-600 hover:text-indigo-500">Sign Up</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
