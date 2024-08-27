import React from 'react';
import Select from 'react-select';
import { FaCommentAlt } from 'react-icons/fa';
import { FaMessage } from "react-icons/fa6";

const JobAdImprovementPage = () => {
    const options = [
        { value: 'option1', label: 'OriginalJob Advertisement' },
        { value: 'option2', label: 'OriginalJob Advertisement' },
        { value: 'option3', label: 'OriginalJob Advertisement' }
    ];

    const customStyles = {
        control: (provided) => ({
            ...provided,
            borderRadius: '0.5rem', // Set rounded corners
            borderColor: '#D1D5DB', // Border color
            boxShadow: 'none', // Remove default shadow
            '&:hover': {
                borderColor: '#9CA3AF', // Border color when mouse is hovering
            },
        }),
        menu: (provided) => ({
            ...provided,
            borderRadius: '0.5rem', // Rounded corners for drop-down menus
        }),
    };

    return (
        <div className="p-6">
            {/* Header Tabs */}
            <div className="flex space-x-4 mb-8 items-center">
                <p className={'text-3xl font-bold'}>You Job Ad Sufferitions</p>
                <div className="w-64">
                    <Select options={options}  styles={customStyles} />
                </div>
            </div>

            {/* Suggestions for Improvement Section */}
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">Suggestions for Improvement</h2>
                    <button className="px-6 py-3 bg-blue-600 text-white rounded-full">Apply Suggestions</button>
                </div>
                <ul className="list-disc list-inside font-bold">
                    <li>Replace "rockstar developer" with "software engineer" to avoid gender-biased terms.</li>
                    <li>Include statements about work-life balance and flexible working hours to attract a diverse pool of candidates.</li>
                </ul>
                <section className={'flex justify-end mt-10'}>
                    <section className={'relative w-10 h-10'}>
                        <section className={'w-full h-full rounded-full bg-black '}>
                        </section>
                        <FaMessage
                            className={'absolute left-1/2  text-white top-1/2 -translate-y-1/2 -translate-x-1/2 z-10'}/>
                    </section>
                </section>
            </div>

            {/* Improved Job Advertisement Section */}
            <div className="bg-white p-6 rounded-lg shadow-md font-bold">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">Improved Job Advertisement</h2>
                    <div className="flex space-x-4">
                        <button className="px-6 py-3 bg-blue-600 text-white rounded-full">Save Job Ad</button>
                        <button className="px-6 py-3 bg-blue-600 text-white rounded-full">Preview Job Ad</button>
                    </div>
                </div>
                <p>Improved job ad content here</p>
                <p className="text-sm text-gray-500 mt-4">*Improved job ad content here</p>
                <section className={'flex justify-end mt-10'}>
                    <section className={'relative w-10 h-10'}>
                        <section className={'w-full h-full rounded-full bg-black '}>
                        </section>
                        <FaMessage
                            className={'absolute left-1/2  text-white top-1/2 -translate-y-1/2 -translate-x-1/2 z-10'}/>
                    </section>
                </section>
            </div>
        </div>
    );
};

export default JobAdImprovementPage;
