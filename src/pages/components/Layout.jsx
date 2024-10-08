import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import {Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <div className="h-full flex bg-gray-100">
            <Sidebar />
            <div className="flex flex-col flex-1 bg-white px-8 py-6">
                <Header />
                <main className="flex flex-1 w-full h-full flex-col pt-8 overflow-y-auto">
                    <Outlet/>
                </main>
            </div>
        </div>
    );
};

export default Layout;
