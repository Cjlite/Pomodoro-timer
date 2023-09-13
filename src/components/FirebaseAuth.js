import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBwrRz7vhD8Qd46i0878V6GaB1m5XBhmro",
    authDomain: "fir-auth-1-8b47f.firebaseapp.com",
    projectId: "fir-auth-1-8b47f",
    storageBucket: "fir-auth-1-8b47f.appspot.com",
    messagingSenderId: "139500457674",
    appId: "1:139500457674:web:ff40a6be35904ab802ae33",
    measurementId: "G-TNME5XGV2K"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };