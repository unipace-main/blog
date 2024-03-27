// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMjAtDICDfNePKy6H3GkpTEWLcZn6qq3g",
  authDomain: "blog-inplace.firebaseapp.com",
  projectId: "blog-inplace",
  storageBucket: "blog-inplace.appspot.com",
  messagingSenderId: "1052023974598",
  appId: "1:1052023974598:web:75d70536babbde6f5c45c7",
  measurementId: "G-1LCJXDZSJD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDb = getFirestore(app);
const auth = getAuth(app);
const storage  = getStorage(app);

export {fireDb, auth, storage}