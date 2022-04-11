// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC0Dl_P33eW4GYHzkqanUIPZ-25J-1rdyc",
    authDomain: "portfolio-71b8e.firebaseapp.com",
    projectId: "portfolio-71b8e",
    storageBucket: "portfolio-71b8e.appspot.com",
    messagingSenderId: "128573755736",
    appId: "1:128573755736:web:d576e18ae9447a4856d52d",
    measurementId: "G-H8C6QJVL31"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
