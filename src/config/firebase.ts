// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4Xho1QxWvP0fioi-dXSWSKsDjLBzMkWk",
  authDomain: "react-course-39667.firebaseapp.com",
  projectId: "react-course-39667",
  storageBucket: "react-course-39667.firebasestorage.app",
  messagingSenderId: "582656488453",
  appId: "1:582656488453:web:47b5e718beb9225002d86c",
  measurementId: "G-JFC104ZT7F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export  const provider = new GoogleAuthProvider();
export const db = getFirestore(app);