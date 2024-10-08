import React, { useState, useCallback } from 'react';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import { FaLink } from 'react-icons/fa';
import { useDropzone } from 'react-dropzone';
import { storage, db } from '../firebase'; 
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { addDoc, collection } from 'firebase/firestore';
import Swal from 'sweetalert2';
import ClipLoader from 'react-spinners/ClipLoader';
import { useSelector } from 'react-redux'; 

const UploadSection = ({ onUploadSuccess }) => {
    const [isUploading, setIsUploading] = useState(false); 
    const [url, setUrl] = useState(''); 

    const userInfo = useSelector((state) => state.auth.userInfo);
    console.log(userInfo)


    const handleUpload = (file) => {
        if (!file) {
            Swal.fire('Error', 'Please select a file first!', 'error');
            return;
        }

        setIsUploading(true); 

        const storageRef = ref(storage, `uploads/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
            'state_changed',
            () => {
               
            },
            (error) => {
                Swal.fire('Error', 'File upload failed!', 'error');
                setIsUploading(false); 
            },
            async () => {
                const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
                Swal.fire('Success', 'File uploaded successfully!', 'success');

                try {

                    await addDoc(collection(db, 'uploads'), {
                        photoURL: userInfo?.photoURL,
                        name: file.name,
                        url: downloadURL,
                        date: new Date().toLocaleDateString(),
                        priority: 'High'
                    });

                    onUploadSuccess({
                        photoURL: userInfo?.photoURL,
                        name: file.name,
                        url: downloadURL,
                        date: new Date().toLocaleDateString(),
                        priority: 'High',
                    });

                } catch (e) {
                    console.log('Firestore error:', e);
                } finally {
                    setIsUploading(false); 
                }
            }
        );
    };


    const onDrop = useCallback((acceptedFiles) => {

        handleUpload(acceptedFiles[0]);
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: {
            'application/pdf': ['.pdf'],
        },
        maxFiles: 1,
    });


    const handleUrlUpload = async () => {
        if (!url) {
            Swal.fire('Error', 'Please provide a valid URL!', 'error');
            return;
        }

        setIsUploading(true);

        try {

            const response = await fetch(url);
            const blob = await response.blob(); 
            const fileName = url.split('/').pop(); 


            const storageRef = ref(storage, `uploads/${fileName}`);
            const uploadTask = uploadBytesResumable(storageRef, blob);

            uploadTask.on(
                'state_changed',
                null,
                (error) => {
                    Swal.fire('Error', 'File upload failed!', 'error');
                    setIsUploading(false);
                },
                async () => {
                    const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
                    Swal.fire('Success', 'File uploaded successfully from URL!', 'success');


                    await addDoc(collection(db, 'uploads'), {
                        photoURL: userInfo?.photoURL,
                        name: fileName,
                        url: downloadURL,
                        date: new Date().toLocaleDateString(),
                        priority: 'High',
                    });


                    onUploadSuccess({
                        photoURL: userInfo?.photoURL,
                        name: fileName,
                        url: downloadURL,
                        date: new Date().toLocaleDateString(),
                        priority: 'High',
                    });

                    setIsUploading(false);
                }
            );
        } catch (error) {
            Swal.fire('Error', 'Failed to fetch the file from URL!', 'error');
            setIsUploading(false);
        }
    };

    return (
        <div className="bg-white rounded-lg">
            <section className="border py-10 px-6 rounded-2xl">
                <div
                    {...getRootProps()}
                    className="border-2 border-dashed border-blue-400 rounded-3xl p-6 flex flex-col items-center justify-center mb-6 cursor-pointer"
                >
                    <input {...getInputProps()} />
                    <AiOutlineCloudUpload className="text-5xl text-blue-400 mb-4" />
                    {isDragActive ? (
                        <p className="text-gray-500">Drop the files here...</p>
                    ) : (
                        <p className="text-gray-500">Drag & drop a PDF file here, or click to select files</p>
                    )}
                    <p className="text-gray-400 text-sm">Only *.pdf files will be accepted</p>
                </div>

                {isUploading && (
                    <div className="flex justify-center items-center mt-4">
                        <ClipLoader color="#3498db" loading={isUploading} size={35} />
                        <p className="ml-2 text-blue-500 font-bold">Uploading...</p>
                    </div>
                )}

                <p className="text-start font-bold my-4">Or Upload from URL</p>
                <div className="flex items-center border rounded-2xl overflow-hidden">
                    <FaLink className="text-gray-400 ml-2" />
                    <input
                        type="text"
                        placeholder="https://example.com/yourfile.pdf"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        className="w-full px-4 py-2 outline-none font-bold"
                    />
                    <button
                        onClick={handleUrlUpload}
                        className="bg-blue-500 text-white px-4 py-2 font-bold rounded-r-2xl"
                    >
                        Upload
                    </button>
                </div>
                <p className="text-lg text-gray-400 font-bold mt-6">* PDF should be less than 1 GB.</p>
            </section>
        </div>
    );
};

export default UploadSection;
