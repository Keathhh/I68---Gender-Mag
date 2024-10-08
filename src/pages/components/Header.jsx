import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaBell, FaSignOutAlt } from "react-icons/fa";
import { MdAddCircleOutline } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { clearAuthToken, clearUserInfo } from '../store/authSlice';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const Header = () => {
    const location = useLocation();
    const nav = useNavigate();
    const dispatch = useDispatch();

    // Get user information from Redux, including avatar URL
    // 从 Redux 中获取用户信息，包括头像 URL
    const userInfo = useSelector((state) => state.auth.userInfo);
    console.log(userInfo)
    const getTitle = (pathname) => {
        switch (pathname) {
            case '/admin/index':
                return (
                    <section>
                        <p className="text-3xl">Good morning, {userInfo?.fullName || 'User'}</p>
                        <p className="text-xl mt-2">Here's your dashboard overview.</p>
                    </section>
                );
            case '/admin/reports':
                return 's';
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

    // Pop up the SweetAlert2 pop-up window for secondary confirmation
    // 弹出二次确认的 SweetAlert2 弹窗
    const handleLogout = () => {
        MySwal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, logout!'
        }).then((result) => {
            if (result.isConfirmed) {
                // Clear authToken and user information
                // 清除 authToken 和用户信息
                dispatch(clearAuthToken());
                dispatch(clearUserInfo());
                nav('/login');  // Redirect to the login page // 重定向到登录页面
            }
        });
    };

    return (
        <header className="flex justify-between items-center">
            <div>
                <h1 className="text-3xl font-bold">{getTitle(location.pathname)}</h1>
            </div>
            <div className="flex items-center space-x-8">
                <button className="bg-blue-500 text-white px-6 py-3 rounded-full flex items-center space-x-1" onClick={() => nav('/admin/contracts')}>
                    <span className="font-bold">Create A Contract</span>
                    <MdAddCircleOutline size={24} />
                </button>
                <div className="flex items-center space-x-4 cursor-pointer" >
                    <FaBell size={24} color="#ccc" />
                    {/*Display the user's avatar. If there is no avatar, display the default avatar*/}
                    {/* 展示用户头像，如果没有头像则展示默认头像 */}
                    <img
                        src={userInfo?.photoURL || "https://via.placeholder.com/150"}
                        alt="User Avatar"
                        className="w-10 object-cover h-10 rounded-full"
                    />
                    <section className="flex flex-col">
                        <span className="text-gray-500 font-bold">{userInfo?.fullName || 'User Name'}</span>
                        <span className="text-gray-500 text-xs font-bold">{userInfo?.email || 'user@example.com'}</span>
                    </section>
                </div>
                {/* Use icon to indicate logout 使用图标表示退出登录 */}
                <FaSignOutAlt
                    size={24}
                    // color={'#ccc'}
                    className="cursor-pointer text-blue-500"
                    onClick={handleLogout}  // When you click Log Out, a secondary confirmation pop-up window will pop up
                />
            </div>
        </header>
    );
};

export default Header;
