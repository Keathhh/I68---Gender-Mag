// src/App.js
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

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/admin" element={<Layout />}>
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
