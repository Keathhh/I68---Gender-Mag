import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/tailwindcss.css'
import App from './App';
import {Provider} from "react-redux";
import index from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={index}>
        <App />
    </Provider>
);

