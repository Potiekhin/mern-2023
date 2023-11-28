// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-2023-7cae5.firebaseapp.com",
  projectId: "mern-2023-7cae5",
  storageBucket: "mern-2023-7cae5.appspot.com",
  messagingSenderId: "42066287619",
  appId: "1:42066287619:web:b42ccf7a6b7402bfd5c236"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);