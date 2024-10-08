import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux'; // Get the user login status from Redux // 从 Redux 获取用户登录状态 

const PrivateRoute = ({ children }) => {
    const authToken = useSelector((state) => state.auth.authToken); // Get the authToken from Redux // 从 Redux 中获取 authToken

    // If there is no authToken, redirect to the login page
    // 如果没有 authToken，重定向到登录页
    return authToken ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
