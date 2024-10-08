import React from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import { FaBell } from "react-icons/fa";
import { MdAddCircleOutline } from "react-icons/md";

const Header = () => {
    const location = useLocation();
    const nav = useNavigate()
    const getTitle = (pathname) => {
        switch (pathname) {
            case '/admin/index':
                return <section>
                    <p className={'text-3xl'}>Good morning, User</p>
                    <p className={'text-xl mt-2'}>Here's your dashboard overview.</p>
                </section>
            case '/admin/history':
                return 'Results History';
            case '/admin/suggestion':
                return 'Suggestion';
            case '/admin/result':
                return 'Result';
            default:
                return 'Page';
        }
    };

    return (
        <header className="  flex justify-between items-center">
            <div>
                <h1 className="text-3xl font-bold">{getTitle(location.pathname)}</h1>
            </div>
            <div className="flex items-center space-x-8">
                <button className="bg-blue-500 text-white px-6 py-3 rounded-full flex items-center space-x-1">
                    <MdAddCircleOutline size={24}/>
                </button>
                    <FaBell size={24} color={'#ccc'} />
                    <img src="https://img.win3000.com/m00/98/46/1c0a8d4896ca60a3b268268300c5ef43.jpg" alt="User Avatar" className="w-10 object-cover h-10 rounded-full" />
                    <section className={'flex flex-col'}>
                        <span className="text-gray-500 font-bold">User Name</span>
                        <span className="text-gray-500 text-xs font-bold">User Name</span>
                    </section>
                </div>
            </div>
        </header>
    );
};

export default Header;
