import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Swal from 'sweetalert2';  // import SweetAlert2
import { createUserWithEmailAndPassword , updateProfile } from 'firebase/auth';  // import Firebase register
import { auth } from '../firebase';
import {FcOpenedFolder} from "react-icons/fc";  // import Firebase 
// Avatar array, you can add more avatar links
const avatarArray = [
    "https://image.uisdc.com/wp-content/uploads/2023/08/AI-Beauty-20230815-1.png",
    "https://a.520gexing.com/uploads/allimg/2023092608/qte0megnbco.jpg",
    "https://gw.alicdn.com/imgextra/i4/2928612463/O1CN01cTpH7v1U46RWofe2H_!!2928612463.jpg_Q75.jpg_.webp",
    "https://img.zcool.cn/community/031ns4rk7n384polmmnug1i3234.png?imageMogr2/auto-orient/thumbnail/520x390r%3E/gravity/center/crop/520x390/sharpen/0.5/quality/80",
];

const RegisterPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [fullName, setFullName] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
    const navigate = useNavigate();

    // Handling registration
    const handleSignup = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            Swal.fire(
                'Error',
                'Passwords do not match!',
                'error'
            );
            return;
        }

        try {
            // use Firebase Create User
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            // Randomly select an avatar
            const randomAvatar = avatarArray[Math.floor(Math.random() * avatarArray.length)];
            const user = userCredential.user;
            // Update the user's displayName
            await updateProfile(user, {
                displayName: fullName,
                photoURL: randomAvatar  // Use a randomly selected avatar URL as the user avatar
            });
            Swal.fire({
                title: 'Success',
                text: 'Registration successful!',
                icon: 'success',
                timer: 2500,
                showConfirmButton: true,
                confirmButtonText: 'OK'
            }).then(() => {
                navigate('/login');  // After the prompt disappears, jump to the login page
            });

        } catch (error) {
            console.error('Error during registration:', error.message);
            Swal.fire(
                'Registration Error',
                error.message,
                'error'
            );
        }
    };

    // Toggle password visibility
    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    // Toggle password visibility
    const toggleConfirmPasswordVisibility = () => {
        setConfirmPasswordVisible(!confirmPasswordVisible);
    };

    return (
        <div className="flex min-h-screen">
            {/* left */}
            <div className="w-1/2 bg-blue-600 text-white flex items-center justify-center px-8">
                <div>
                    <h1 className="text-4xl font-bold mb-4">Create your account</h1>
                    <p className={'text-gray-300'}>Join us today and enjoy the benefits.</p>
                </div>
            </div>

            {/* right */}
            <div className="w-1/2 bg-gray-50 flex items-center justify-center px-8">

                <div className="max-w-lg w-full space-y-8">
                    <section className={'flex justify-center items-center space-x-2'}>
                        <FcOpenedFolder size={38}/>
                        <h2 className={'text-4xl font-bold'}>
                            MAG!
                        </h2>
                    </section>
                    <div className="text-center">
                        <h2 className="text-2xl font-extrabold text-gray-900">Sign Up</h2>
                    </div>
                    <form className="mt-8 space-y-6" onSubmit={handleSignup}>
                        <div className="shadow-sm space-y-6">
                            <div>
                                <label htmlFor="full-name" className={'font-bold'}>Full Name</label>
                                <input id="full-name" name="full-name" type="text" required
                                       value={fullName}
                                       onChange={(e) => setFullName(e.target.value)}
                                       className="appearance-none rounded-full relative block mt-3 font-bold w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                       placeholder="Enter your name"/>
                            </div>
                            <div>
                                <label htmlFor="email" className={'font-bold'}>Email</label>
                                <input id="email" name="email" type="email" required
                                       value={email}
                                       onChange={(e) => setEmail(e.target.value)}
                                       className="appearance-none rounded-full relative block mt-3 font-bold w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                       placeholder="Enter your email"/>
                            </div>

                            {/* Password input box */}
                            <div className="relative">
                                <label htmlFor="password" className={'font-bold'}>Password</label>
                                <section className={'relative'}>
                                    <input id="password" name="password" type={passwordVisible ? "password" : "text"}
                                           value={password}
                                           onChange={(e) => setPassword(e.target.value)}
                                           required
                                           className="appearance-none rounded-full pr-4 relative block mt-3 font-bold w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                           placeholder="Enter your password"/>
                                    {/* Show/hide password icon */}
                                    <div className="absolute right-4 z-10 top-1/2 -translate-y-1/2 cursor-pointer"
                                         onClick={togglePasswordVisibility}>
                                        {passwordVisible ? <FaEyeSlash className="text-gray-500"/> :
                                            <FaEye className="text-gray-500"/>}
                                    </div>
                                </section>
                            </div>

                            {/* Confirm password input box */}
                            <div className="relative">
                                <label htmlFor="confirm-password" className={'font-bold'}>Confirm Password</label>
                                <section className={'relative'}>
                                    <input id="confirm-password" name="confirm-password"
                                           type={confirmPasswordVisible ? "password" : "text"}
                                           value={confirmPassword}
                                           onChange={(e) => setConfirmPassword(e.target.value)}
                                           required
                                           className="appearance-none rounded-full pr-4 relative block mt-3 font-bold w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                           placeholder="Confirm your password"/>
                                    {/*Show/hide the password confirmation icon */}
                                    <div className="absolute right-4 z-10 top-1/2 -translate-y-1/2 cursor-pointer"
                                         onClick={toggleConfirmPasswordVisibility}>
                                        {confirmPasswordVisible ? <FaEyeSlash className="text-gray-500"/> :
                                            <FaEye className="text-gray-500"/>}
                                    </div>
                                </section>
                            </div>
                        </div>
                        <div>
                            <button type="submit"
                                    className="group relative w-full mt-12 flex justify-center py-4 px-4 border border-transparent text-sm font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Sign Up
                            </button>
                        </div>
                    </form>
                    <div className="text-center text-gray-500 mt-4 font-bold">
                        Already have an account? <a href="/login" className="text-indigo-600 hover:text-indigo-500">Log
                        In</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegisterPage;
