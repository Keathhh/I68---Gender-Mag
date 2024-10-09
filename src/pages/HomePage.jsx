import React, { useState } from 'react';
import { FaHome, FaInfoCircle, FaCloudUploadAlt, FaSignInAlt, FaQuestionCircle } from 'react-icons/fa';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-scroll';
import { useNavigate} from 'react-router-dom';
import { FilePond, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import axios from 'axios';

registerPlugin(FilePondPluginImagePreview);

const Alert = ({ variant, title, children }) => {
    const baseClasses = "border px-4 py-3 rounded relative mb-4";
    const variantClasses = {
      error: "bg-red-100 border-red-400 text-red-700",
      success: "bg-green-100 border-green-400 text-green-700",
    };
  
    return (
      <div className={`${baseClasses} ${variantClasses[variant]}`} role="alert">
        <strong className="font-bold mr-2">{title}</strong>
        <span className="block sm:inline">{children}</span>
      </div>
    );
  };

function Navbar() {
    const nav = useNavigate();

    return (
        <header className="bg-white shadow-lg fixed top-0 left-0 w-full z-10">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <h1 className="text-2xl font-extrabold text-gray-900">GenderMag</h1>
                    </div>

                    {/* Navigation Links */}
                    <div className="hidden md:flex items-center space-x-8">
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
    const [file, setFile] = useState(null);
    const [fileName, setFileName] = useState('');
    const [filePurpose, setFilePurpose] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        setFile(selectedFile);
        setFileName(selectedFile ? selectedFile.name : '');
    };

    const handleSubmit = async () => {
        if (!file) {
            setError('Please upload a file');
            setSuccess(null);
            return;
        }
    
        setIsLoading(true);
        setError(null);
        setSuccess(null);

        const formData = new FormData();
        formData.append('file', file);
        formData.append('fileName', fileName);
        formData.append('filePurpose', filePurpose);

        try {
            const response = await fetch('/api/process-file', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                throw new Error('Error processing file');
            }

            const data = await response.json();
            setResult(data);
            setSuccess('File processed successfully');
        } catch (error) {
            console.error('Error processing file:', error);
            setError('Error processing file. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };
    
    return (
        <div className="bg-gray-50 text-gray-900">
            <Navbar />

            <main className="pt-16">
                <section id="home" className="text-center py-20">
                    <h1 className="text-5xl font-bold text-gray-900">Here's How <span className="text-blue-600">GenderMag</span></h1>
                    <p className="mt-4 text-lg text-gray-700">GenderMag can help you solve your problem.</p>
                    <div className="mt-8 flex justify-center space-x-4">
                        <a href="#about" className="px-8 py-3 bg-gray-900 text-white font-semibold rounded-full hover:bg-gray-700">Get Started</a>
                        <a href="#upload" className="px-8 py-3 bg-gray-200 text-gray-900 font-semibold rounded-full hover:bg-gray-300">Learn More</a>
                    </div>
                </section>

                <section id="about" className="bg-white py-20">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-5xl font-bold text-gray-900">About <span className="text-blue-600">Us</span></h2>
                        <p className="mt-4 text-lg text-gray-700">GenderMag is a platform designed to help you streamline your tasks and enhance productivity. With cutting-edge features and user-friendly interfaces, we ensure that you can manage your projects efficiently and effectively.</p>
                        <p className="mt-4 text-lg text-gray-700">Our mission is to provide tools that empower individuals and teams to achieve their goals seamlessly. Whether you're looking to upload files, analyze data, or collaborate with peers, GenderMag has got you covered.</p>
                        <div className="mt-8 flex justify-center space-x-4">
                            <a href="#upload" className="px-8 py-3 bg-gray-900 text-white font-semibold rounded-full hover:bg-gray-700">Try Now!</a>
                        </div>
                    </div>
                </section>

                <section id="upload" className="text-center py-20 bg-gradient-to-b from-gray-50 to-gray-100">
                    <h2 className="text-5xl font-bold text-gray-900">Upload Your</h2>
                    <h2 className="text-blue-600 mt-4 text-4xl font-bold">Files</h2>
                    <div className="mt-8 max-w-md mx-auto bg-white p-8 rounded-3xl shadow-2xl">
                        <div className="mb-4">
                            <label htmlFor="fileName" className="block text-left mb-2 text-gray-700 font-medium">File Name</label>
                            <input
                                id="fileName"
                                type="text"
                                value={fileName}
                                onChange={(e) => setFileName(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                                placeholder="Enter file name"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="filePurpose" className="block text-left mb-2 text-gray-700 font-medium">Purpose</label>
                            <input
                                id="filePurpose"
                                type="text"
                                value={filePurpose}
                                onChange={(e) => setFilePurpose(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                                placeholder="Enter file purpose"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="fileUpload" className="block text-left mb-2 text-gray-700 font-medium">Upload File</label>
                            <input
                                id="fileUpload"
                                type="file"
                                onChange={handleFileChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                            />
                        </div>
                        <button
                            onClick={handleSubmit}
                            disabled={isLoading}
                            className="w-full px-4 py-3 bg-blue-600 mt-4 text-white font-semibold rounded-full hover:bg-blue-500 transition-shadow shadow-md hover:shadow-lg disabled:opacity-50"
                        >
                            {isLoading ? 'Processing...' : 'Submit'}
                        </button>
                    </div>

                    <br></br>
                    {error && <Alert variant="error" title="Error">{error}</Alert>}
                    {success && <Alert variant="success" title="Success">{success}</Alert>}

                    {result && (
                        <div className="mt-8 max-w-md mx-auto bg-white p-8 rounded-3xl shadow-2xl">
                            <h3 className="text-2xl font-bold mb-4">Processing Result</h3>
                            <pre className="whitespace-pre-wrap text-left overflow-auto">
                                {JSON.stringify(result, null, 2)}
                            </pre>
                        </div>
                    )}

                    <p className="text-lg text-gray-700 mt-6 max-w-md mx-auto">
                        Upload your documents, images, or any file type swiftly and securely. We'll process the file and match words with our database.
                    </p>
                </section>

                <section id="learnmore" className="bg-white py-20">
                    <div className="text-center">
                        <h2 className="text-5xl font-bold text-gray-900">Get Started</h2>
                        <h2 className="text-blue-600 text-5xl font-bold mt-4">Today</h2>
                        <p className="mt-6 text-gray-700">
                            Open your account swiftly and efficiently for immediate access to our extensive range of services and benefits.
                        </p>
                        <div className="mt-8">
                            <a href="login" className="px-6 py-3 bg-gray-900 text-white font-semibold rounded-full hover:bg-gray-700">
                                Create Account
                            </a>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="bg-gray-50 py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500">
                    <p>©2024 GenderMag. All Rights Reserved. <a href="#" className="text-blue-600 hover:text-blue-800">Privacy Policy</a></p>
                    <div className="mt-4 flex justify-center space-x-4">
                        <a href="#" className="text-gray-500 hover:text-gray-900">Facebook</a>
                        <a href="#" className="text-gray-500 hover:text-gray-900">Twitter</a>
                        <a href="#" className="text-gray-500 hover:text-gray-900">LinkedIn</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Home;