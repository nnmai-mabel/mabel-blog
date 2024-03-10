// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mabel-blog.firebaseapp.com",
  projectId: "mabel-blog",
  storageBucket: "mabel-blog.appspot.com",
  messagingSenderId: "12301389",
  appId: "1:12301389:web:4e1f6a45c5933483399804"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);