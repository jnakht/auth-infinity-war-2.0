// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJ6eQJ0rBCSEp0D-zH-KLKGKQzUn_e9Vk",
  authDomain: "auth-infinity-war-2.firebaseapp.com",
  projectId: "auth-infinity-war-2",
  storageBucket: "auth-infinity-war-2.firebasestorage.app",
  messagingSenderId: "801510853858",
  appId: "1:801510853858:web:e36864f34af5223e8b22bb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;