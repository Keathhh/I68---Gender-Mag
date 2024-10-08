import React, { useState } from 'react';
import { FaHome, FaInfoCircle, FaCloudUploadAlt, FaSignInAlt, FaQuestionCircle } from 'react-icons/fa';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-scroll';
import { useNavigate} from 'react-router-dom';
import { FilePond, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';

registerPlugin(FilePondPluginImagePreview);

function Navbar() {
    const nav = useNavigate();

    return (
        <header className="bg-white shadow-lg fixed top-0 left-0 w-full z-10">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <h1 className="text-2xl font-extrabold text-gray-900">GenderMag</h1>
                    </div>

                    {/* Navigation Links */}
                    <div className="hidden md:flex items-center space-x-16">
                        <Link to="home" smooth={true} duration={500} className="text-gray-700 hover:text-blue-600 font-medium text-lg transition duration-300 flex items-center cursor-pointer">
                            <FaHome className="mr-2" /> Home
                        </Link>
                        <Link to="about" smooth={true} duration={500} className="text-gray-700 hover:text-blue-600 font-medium text-lg transition duration-300 flex items-center cursor-pointer">
                            <FaInfoCircle className="mr-2" /> About
                        </Link>
                        <Link to="upload" smooth={true} duration={500} className="text-gray-700 hover:text-blue-600 font-medium text-lg transition duration-300 flex items-center cursor-pointer">
                            <FaCloudUploadAlt className="mr-2" /> Upload
                        </Link>
                        <a onClick={() => nav('/login')} className="text-gray-700 hover:text-blue-600 font-medium text-lg transition duration-300 flex items-center cursor-pointer">
                            <FaSignInAlt className="mr-2" /> Log in
                        </a>
                        <Link to="learnmore" smooth={true} duration={500} className="text-blue-600 hover:text-blue-800 font-medium text-lg transition duration-300 flex items-center cursor-pointer">
                            <FaQuestionCircle className="mr-2" /> Learn More
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button className="text-gray-700 hover:text-blue-600 focus:outline-none">
                            <svg className="h-8 w-8" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
                                <path d="M4 6h16M4 12h16m-7 6h7"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    );
}

function Home() {
    const [files, setFiles] = useState([]);
    const nav = useNavigate()
    return (
        <div className="bg-gray-50 text-gray-900">
            <Navbar />

            {/* Main Content */}
            <main className="pt-20"> {/* 添加 pt-16 以避免内容与固定的导航栏重叠 */}
                {/* Section 1 */}
                <section id="home" className="text-center py-20">
                    <h1 className="text-5xl font-bold text-gray-900">Here's How <span className="text-blue-600">GenderMag</span></h1>
                    <p className="mt-4 text-lg text-gray-700">GenderMag can help you solve your problem.</p>
                    <div className="mt-8 flex justify-center space-x-4">
                        <Link to="about" smooth={true} duration={500}>
                            <button className="px-8 py-3 bg-gray-900 text-white font-semibold rounded-full hover:bg-gray-700" onClick={()=>nav('/login')}>Get Started</button>
                        </Link>
                        <Link to="about" smooth={true} duration={500}>
                            <button className="px-8 py-3 bg-gray-200 text-gray-900 font-semibold rounded-full hover:bg-gray-300">Learn More</button>
                        </Link>
                    </div>
                </section>

                {/* Section 2 */}
                <section id="about" className="bg-white py-20">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-5xl font-bold text-gray-900">About <span className={'text-blue-600'}>Us</span></h2>
                        <p className="mt-4 text-lg text-gray-700">GenderMag is a platform designed to help you streamline your tasks and enhance productivity. With cutting-edge features and user-friendly interfaces, we ensure that you can manage your projects efficiently and effectively.</p>
                        <p className="mt-4 text-lg text-gray-700">Our mission is to provide tools that empower individuals and teams to achieve their goals seamlessly. Whether you're looking to upload files, analyze data, or collaborate with peers, GenderMag has got you covered.</p>
                        <div className="mt-8 flex justify-center space-x-4">
                            <button className="px-8 py-3 bg-gray-900 text-white font-semibold rounded-full hover:bg-gray-700">Try</button>
                        </div>
                    </div>
                </section>

                {/* Section 3 - Upload */}
                <section id="upload" className="text-center py-20 bg-gradient-to-b from-gray-50 to-gray-100">
                    <h2 className="text-5xl font-bold text-gray-900">Upload Your</h2>
                    <h2 className="text-blue-600 mt-4 text-4xl font-bold">Files</h2>
                    <div className="mt-8 max-w-md mx-auto bg-white p-8 rounded-3xl shadow-2xl">
                        <label className="block text-left mb-2 text-gray-700 font-medium">File Name</label>
                        <input
                            type="text"
                            placeholder="Enter file name"
                            className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                        />
                        <label className="block text-left mb-2 text-gray-700 font-medium">Purpose</label>
                        <input
                            type="text"
                            placeholder="Enter file purpose"
                            className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                        />
                        <label className="block text-left mb-2 text-gray-700 font-medium">Upload File</label>
                        <FilePond
                            files={files}
                            onupdatefiles={setFiles}
                            allowMultiple={false}
                            maxFiles={1}
                            name="file"
                            labelIdle='Drag & Drop your file or <span class="filepond--label-action">Browse</span>'
                            className="mb-4"
                        />
                        <button
                            className="w-full px-4 py-3 bg-blue-600  mt-4 text-white font-semibold rounded-full hover:bg-blue-500 transition-shadow shadow-md hover:shadow-lg">
                            Submit
                        </button>
                    </div>

                    <p className="text-lg text-gray-700 mt-6 max-w-md mx-auto">Upload your documents, images, or any
                        file type swiftly
                        and securely. Provide the necessary details and let us handle the rest.</p>
                </section>

                {/* Section 4 */}
                <section id="learnmore" className="bg-white py-20">
                    <div className="text-center">
                        <h2 className="text-5xl font-bold text-gray-900">Get Started </h2>
                        <h2 className="text-blue-600 text-5xl font-bold mt-4">Today</h2>
                        <p className="mt-6 text-gray-700">
                            Open your account swiftly and efficiently for immediate access to our extensive range of
                            services and benefits.
                        </p>
                        <div className="mt-8">
                            <button
                                onClick={()=>nav('/register')}
                                className="px-6 py-3 bg-gray-900 text-white font-semibold rounded-full hover:bg-gray-700">
                                Create Account
                            </button>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-gray-50 py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500">
                    <p>©2024. All Rights Reserved. <a href="#" className="text-blue-600 hover:text-blue-800">Privacy
                        Policy</a></p>
                    <div className="mt-4 flex justify-center space-x-4">
                        <a href="#" className="text-gray-500 hover:text-gray-900">
                            <FaFacebook className="w-6 h-6"/>
                        </a>
                        <a href="#" className="text-gray-500 hover:text-gray-900">
                            <FaTwitter className="w-6 h-6"/>
                        </a>
                        <a href="#" className="text-gray-500 hover:text-gray-900">
                            <FaLinkedin className="w-6 h-6" />
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Home;
