// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-books-store-be416.firebaseapp.com",
  projectId: "mern-books-store-be416",
  storageBucket: "mern-books-store-be416.firebasestorage.app",
  messagingSenderId: "271425438914",
  appId: "1:271425438914:web:ae03db658e9c7297d0e75b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app