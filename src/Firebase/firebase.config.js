// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCm8ZH0emWanzjkOmLlh5sExv3SA3MwTso",
  authDomain: "blogging-dca36.firebaseapp.com",
  projectId: "blogging-dca36",
  storageBucket: "blogging-dca36.firebasestorage.app",
  messagingSenderId: "131424680815",
  appId: "1:131424680815:web:f41f8de8309a8db6a0c69a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth; 