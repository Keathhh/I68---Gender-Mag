import React, { useState } from 'react';
import { FaApple, FaEye, FaEyeSlash } from 'react-icons/fa';
import { FcGoogle } from "react-icons/fc";
import { FcOpenedFolder } from "react-icons/fc";
import {useNavigate} from "react-router-dom";

function App() {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const nav = useNavigate()

    return (
        <div className="flex min-h-screen">
            {/* 左侧 */}
            <div className="w-1/2 bg-blue-600 text-white flex items-center justify-center px-8">
                <div>
                    <h1 className="text-4xl font-bold mb-4">Hey There, Welcome to GenderMag!</h1>
                    <p className={'text-gray-300'}>GenderMag can help you solve your problem, as long as you upload your data quickly for analysis.</p>
                </div>
            </div>

            {/* 右侧 */}
            <div className="w-1/2 bg-gray-50 flex items-center justify-center px-8">
                <div className="max-w-lg w-full space-y-8">
                    <section className={'flex justify-center items-center space-x-2'}>
                        <FcOpenedFolder size={38}/>
                        <h2 className={'text-xl font-bold'}>
                            GenderMag
                        </h2>
                    </section>
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-gray-900">Create an Account<br/></h2>
                    </div>
                    <form className="mt-8 space-y-6">
                        <div className="flex justify-center">
                            <button
                                className="w-full mb-4 py-3 px-4 border border-gray-300 rounded-full shadow-sm text-sm font-bold text-gray-700 bg-gray-100 hover:bg-gray-100 flex items-center justify-center">
                                <FaApple size={26} className="mr-2"/> Continue with Apple
                            </button>
                        </div>
                        <div className="flex justify-center">
                            <button
                                className="w-full py-3 px-4 border border-gray-300 rounded-full shadow-sm text-sm font-bold text-gray-700 bg-gray-100 hover:bg-gray-100 flex items-center justify-center">
                                <FcGoogle size={22} className="mr-2"/> Continue with Google
                            </button>
                        </div>
                        <div className="flex items-center justify-center my-6">
                            <hr className="flex-grow border-t border-gray-300"/>
                            <span className="mx-4 text-gray-500 font-bold">Or login with</span>
                            <hr className="flex-grow border-t border-gray-300"/>
                        </div>
                        <div className="shadow-sm space-y-6">
                            <div>
                                <label htmlFor="full-name" className={' font-bold'}>Full Name</label>
                                <input id="full-name" name="full-name" type="text" required
                                       className="appearance-none rounded-full relative block mt-3 font-bold w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                       placeholder="Enter your name"/>
                            </div>
                            <div>
                                <label htmlFor="email" className={' font-bold'}>Email</label>
                                <input id="email" name="email" type="email" required
                                       className="appearance-none rounded-full relative block mt-3 font-bold w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                       placeholder="Enter your email"/>
                            </div>
                            <div className="relative">
                                <label htmlFor="password" className={' font-bold'}>Password</label>
                                <section className={'relative'}>
                                    <input id="password" name="password" type={passwordVisible ? "text" : "password"}
                                           required
                                           className="appearance-none rounded-full pr-4 relative block mt-3 font-bold w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                           placeholder="Enter your password"/>
                                    <div className="absolute right-4  z-10 top-1/2 -translate-y-1/2"
                                         onClick={togglePasswordVisibility}>
                                        {passwordVisible ? <FaEyeSlash className="text-gray-500"/> :
                                            <FaEye className="text-gray-500"/>}
                                    </div>
                                </section>
                            </div>
                        </div>
                        <div className="flex items-center justify-between font-bold">
                            <div className="flex items-center">
                                <input id="terms" name="terms" type="checkbox" required
                                       className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"/>
                                <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
                                    I agree to <a href="#" className="text-indigo-600 hover:text-indigo-500">Terms
                                    of Use</a> and <a href="#" className="text-indigo-600 hover:text-indigo-500">Privacy
                                    Policy</a>
                                </label>
                            </div>
                        </div>
                        <div>
                            <button type="submit"
                                    onClick={()=>nav('/admin/index')}
                                    className="group relative w-full mt-12  flex justify-center py-4  px-4 border border-transparent text-sm font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Get Started
                            </button>
                        </div>
                    </form>
                    <div className="text-center text-gray-500 mt-4 font-bold">
                        Already have an account? <a href="#" className="text-indigo-600 hover:text-indigo-500">Log
                        In</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
