import React from 'react';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import { FaLink } from 'react-icons/fa';

const UploadSection = () => {
    return (

    <div className="bg-white  rounded-lg">

        <section className={'border py-10 px-6 rounded-2xl'}>
                <div
                    className="border-2 border-dashed border-blue-400 rounded-3xl p-6 flex flex-col items-center justify-center mb-6">
                    <AiOutlineCloudUpload className="text-5xl text-blue-400 mb-4"/>
                    <p className="text-gray-500">Upload PDF</p>
                    <p className="text-gray-400 text-sm">drop it here</p>
                </div>
                <p className="text-start font-bold  my-4">Or Upload from URL</p>
                <div className="flex items-center border rounded-2xl overflow-hidden">
                    <FaLink className="text-gray-400 ml-2"/>
                    <input
                        type="text"
                        placeholder="https://MAG/PDF"
                        className="w-full px-4 py-2 outline-none font-bold"
                    />
                </div>
                <p className="text-lg  text-gray-400 font-bold  mt-6">*PDF should be a 1 GB.</p>
                <section className={'flex justify-center mt-5'}>
                    <button className="border-blue-500 border text-blue-500 inline-block  font-bold   py-3 px-8 rounded-full mt-4 hover:bg-blue-600">
                        Upload
                    </button>
                </section>
            </section>
        </div>
    );
};

const HistorySection = () => {
    const historyItems = [
        {name: 'Report Name', priority: 'High', date: 'Mar 1, 2024', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbPRcdK5M0XpERTbc3HOXbMjUtswiDM08iZA&s'},
        {name: 'Report Name', priority: 'High', date: 'Mar 1, 2024', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbPRcdK5M0XpERTbc3HOXbMjUtswiDM08iZA&s'},
        {name: 'Report Name', priority: 'High', date: 'Mar 1, 2024', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbPRcdK5M0XpERTbc3HOXbMjUtswiDM08iZA&s'},
        {name: 'Report Name', priority: 'High', date: 'Mar 1, 2024', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbPRcdK5M0XpERTbc3HOXbMjUtswiDM08iZA&s'},
        {name: 'Report Name', priority: 'High', date: 'Mar 1, 2024', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbPRcdK5M0XpERTbc3HOXbMjUtswiDM08iZA&s'},
        {name: 'Report Name', priority: 'High', date: 'Mar 1, 2024', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbPRcdK5M0XpERTbc3HOXbMjUtswiDM08iZA&s'},
        {name: 'Report Name', priority: 'High', date: 'Mar 1, 2024', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbPRcdK5M0XpERTbc3HOXbMjUtswiDM08iZA&s'},
        {name: 'Report Name', priority: 'High', date: 'Mar 1, 2024', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbPRcdK5M0XpERTbc3HOXbMjUtswiDM08iZA&s'},
    ];

    return (
        <div className="bg-white border rounded-2xl p-6">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Upload History</h2>
                <a href="#" className="text-blue-500 font-bold">See All</a>
            </div>
            <section className={'space-y-8 mt-8'}>
                {historyItems.map((item, index) => (
                    <div key={index} className="flex items-center mb-4 font-bold">
                        <img src={item.img} alt="avatar" className="w-10 h-10 rounded-full mr-4"/>
                        <div>
                            <p className="text-gray-700 ">{item.name}</p>
                            <p className="text-gray-500  text-sm">{item.date}</p>
                        </div>
                        <div className="ml-auto text-sm text-blue-500">{item.priority}</div>
                    </div>
                ))}
            </section>

        </div>
    );
};

const UploadPage = () => {
    return (
        <div className={'px-4'}>
            <div>
                <h2 className="text-3xl font-bold  border p-6 rounded-2xl">Upload</h2>
            </div>

            <div className="grid grid-cols-5 gap-8 mt-5">
                <div className="col-span-3">
                    <UploadSection/>
                </div>
                <div className="col-span-2">
                    <HistorySection/>
                </div>
            </div>
        </div>

    );
};

export default UploadPage;
