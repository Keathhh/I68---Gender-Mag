import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, OAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// 这是从 Firebase 控制台中获取的配置
const firebaseConfig = {
    apiKey: "AIzaSyA-1VvJ1tr07sX7NEd0lnGMuV1cLYv3Kmc",
    authDomain: "mag2024-5e078.firebaseapp.com",
    projectId: "mag2024-5e078",
    storageBucket: "mag2024-5e078.appspot.com",
    messagingSenderId: "1055606974054",
    appId: "1:1055606974054:web:a3f1cd09a0e103d877efa7",
    measurementId: "G-GK76WZ9FNF"
};


// 初始化 Firebase
const app = initializeApp(firebaseConfig);

// 导出常用的 Firebase 服务
export const db = getFirestore(app);
export const storage = getStorage(app);
// 导出 Firebase Authentication 和登录提供者
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const appleProvider = new OAuthProvider('apple.com');  // Apple 登录使用 OAuthProvider
