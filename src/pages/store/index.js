import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';  // 引入 authSlice

const index = configureStore({
    reducer: {
        auth: authReducer,  // 注册 auth reducer
    },
});

export default index;
