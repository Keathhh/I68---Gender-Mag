import React from 'react';

const HistorySection = ({ historyItems }) => {
    return (
        <div className="bg-white border rounded-2xl p-6">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Upload History</h2>
                <a href="#" className="text-blue-500 font-bold">See All</a>
            </div>
            <section className={'space-y-8 mt-8'}>
                {historyItems.map((item, index) => (
                    <div key={index} className="flex items-center font-bold">
                        <img src={item.photoURL} alt="avatar" className="w-10 h-10 rounded-full mr-4"/>
                        <div>
                            <p className="text-gray-700">{item.name}</p>
                            <p className="text-gray-500 text-sm">{item.date}</p>
                        </div>
                        <div className="ml-auto text-sm text-blue-500">
                            <a href={item.url} target="_blank" rel="noopener noreferrer">Download</a>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default HistorySection;
