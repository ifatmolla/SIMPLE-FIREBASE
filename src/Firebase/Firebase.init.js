// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBHp4yzTAh_GcesTFG2XU_eUzDJJ9zdLM",
  authDomain: "simple-firebase-9cdc5.firebaseapp.com",
  projectId: "simple-firebase-9cdc5",
  storageBucket: "simple-firebase-9cdc5.firebasestorage.app",
  messagingSenderId: "948761262885",
  appId: "1:948761262885:web:6fb4119158d9b32bdff8cc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;