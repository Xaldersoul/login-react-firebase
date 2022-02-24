// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBM3ulRKchkdaLZcjuB-GQ8p94RDFZ4m1A",
  authDomain: "react-fb-auth-5d093.firebaseapp.com",
  projectId: "react-fb-auth-5d093",
  storageBucket: "react-fb-auth-5d093.appspot.com",
  messagingSenderId: "588848250875",
  appId: "1:588848250875:web:2646129d87a0ce7b07d55e",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
