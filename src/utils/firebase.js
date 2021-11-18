// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGXGsrxdnye-MxtIFtENi6GWANxrx3ObA",
  authDomain: "netflix-clone-8d59f.firebaseapp.com",
  projectId: "netflix-clone-8d59f",
  storageBucket: "netflix-clone-8d59f.appspot.com",
  messagingSenderId: "334858790473",
  appId: "1:334858790473:web:29ec0563e3f195951b8198",
  measurementId: "G-C5QSQKMTRN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
};
export default db;
