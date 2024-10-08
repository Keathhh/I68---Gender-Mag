import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import Layout from './components/Layout';
import Contracts from "./pages/Admin/Contracts";
import Result from "./pages/Admin/Result";
import AdminHome from "./pages/Admin/Home";
import History from "./pages/Admin/History";
import Suggestion from "./pages/Admin/Suggestion";
import RegisterPage from "./pages/RegisterPage";
import PrivateRoute from './components/PrivateRoute'; // 引入 PrivateRoute 组件

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/home" element={<HomePage />} />

                {/* 保护 admin 路由，只有登录用户可以访问 */}
                <Route path="/admin" element={<PrivateRoute><Layout /></PrivateRoute>}>
                    <Route path="index" element={<AdminHome />} />
                    <Route path="contracts" element={<Contracts />} />
                    <Route path="history" element={<History />} />
                    <Route path="result" element={<Result />} />
                    <Route path="suggestion" element={<Suggestion />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
