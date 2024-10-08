import { createSlice } from '@reduxjs/toolkit';

// 从 localStorage 中获取初始 authToken 和用户信息
const initialAuthToken = localStorage.getItem('authToken');
const initialUserInfo = JSON.parse(localStorage.getItem('userInfo'));

const initialState = {
    authToken: initialAuthToken || null,  // 存储 authToken
    userInfo: initialUserInfo || null,    // 存储用户信息
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuthToken: (state, action) => {
            state.authToken = action.payload;
            // 将 authToken 存储到 localStorage
            localStorage.setItem('authToken', action.payload);
        },
        clearAuthToken: (state) => {
            state.authToken = null;
            // 清除 localStorage 中的 authToken
            localStorage.removeItem('authToken');
        },
        setUserInfo: (state, action) => {
            state.userInfo = action.payload;
            // 将 userInfo 存储到 localStorage
            localStorage.setItem('userInfo', JSON.stringify(action.payload));
        },
        clearUserInfo: (state) => {
            state.userInfo = null;
            // 清除 localStorage 中的 userInfo
            localStorage.removeItem('userInfo');
        },
    },
});

export const { setAuthToken, clearAuthToken, setUserInfo, clearUserInfo } = authSlice.actions;

export default authSlice.reducer;
