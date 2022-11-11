// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration



const firebaseConfig = {
    apiKey: "AIzaSyAi5XwRI960aW_x8pFaQuuuUUM8hq39W14",
    authDomain: "kv-portfolio.firebaseapp.com",
    projectId: "kv-portfolio",
    storageBucket: "kv-portfolio.appspot.com",
    messagingSenderId: "630391653340",
    appId: "1:630391653340:web:0f81dc85912ba4fd460519"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);
