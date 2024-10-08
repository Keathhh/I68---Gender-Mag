import React from 'react';
import { AiFillHome, AiOutlineFileText, AiOutlineHistory, AiOutlineBarChart, AiOutlineSetting } from 'react-icons/ai';
import { NavLink } from "react-router-dom";  // 使用react-router-dom的NavLink

const Sidebar = () => {
    return (
        <div className="w-64 px-4 flex flex-col bg-white shadow-md h-screen relative">
            <div className="p-6 text-2xl font-bold font-extrabold text-gray-800">
                MAGI!
                GenderMag
            </div>
            <nav className="mt-4 flex-1 font-bold">
                <NavLink
                    to="/admin/index"
                    className={({ isActive }) =>
                        isActive ? "flex items-center p-4 text-blue-500 bg-blue-100 rounded-lg mb-2" :
                            "flex items-center p-4 text-gray-700 hover:bg-blue-100 hover:text-blue-500 rounded-lg mb-2"
                    }
                >
                    <AiFillHome className="h-6 w-6 mr-3" />
                    Home
                </NavLink>
                <NavLink
                    className={({ isActive }) =>
                        isActive ? "flex items-center p-4 text-blue-500 bg-blue-100 rounded-lg mb-2" :
                            "flex items-center p-4 text-gray-700 hover:bg-blue-100 hover:text-blue-500 rounded-lg mb-2"
                    }
                >
                    <AiOutlineFileText className="h-6 w-6 mr-3" />
                </NavLink>
                <NavLink
                    to="/admin/history"
                    className={({ isActive }) =>
                        isActive ? "flex items-center p-4 text-blue-500 bg-blue-100 rounded-lg mb-2" :
                            "flex items-center p-4 text-gray-700 hover:bg-blue-100 hover:text-blue-500 rounded-lg mb-2"
                    }
                >
                    <AiOutlineHistory className="h-6 w-6 mr-3" />
                    History
                </NavLink>
                <NavLink
                    to="/admin/result"
                    className={({ isActive }) =>
                        isActive ? "flex items-center p-4 text-blue-500 bg-blue-100 rounded-lg mb-2" :
                            "flex items-center p-4 text-gray-700 hover:bg-blue-100 hover:text-blue-500 rounded-lg mb-2"
                    }
                >
                    <AiOutlineBarChart className="h-6 w-6 mr-3" />
                    Results
                </NavLink>
            </nav>
            <div className=" w-full font-bold">
                {/*<NavLink*/}
                {/*    to="/admin/settings"*/}
                {/*    className={({ isActive }) =>*/}
                {/*        isActive ? "flex items-center p-4 text-blue-500 bg-blue-100 rounded-lg mb-2" :*/}
                {/*            "flex items-center p-4 text-gray-700 hover:bg-blue-100 hover:text-blue-500 rounded-lg mb-2"*/}
                {/*    }*/}
                {/*>*/}
                {/*    */}
                {/*</NavLink>*/}
                <section className={'flex py-5 justify-start w-full'}>
                    <AiOutlineSetting className="h-6 w-6 mr-3" />
                    Settings
                </section>
            </div>
        </div>
    );
};

export default Sidebar;
