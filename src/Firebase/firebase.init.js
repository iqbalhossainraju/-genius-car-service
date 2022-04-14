import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAukKSCmMu0ixtgSooZJ8CCjZ5_jD3jPEw",
    authDomain: "genius-car-services-1ca2d.firebaseapp.com",
    projectId: "genius-car-services-1ca2d",
    storageBucket: "genius-car-services-1ca2d.appspot.com",
    messagingSenderId: "792629648283",
    appId: "1:792629648283:web:9bc8f7ffc46ab476e1df3e"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;