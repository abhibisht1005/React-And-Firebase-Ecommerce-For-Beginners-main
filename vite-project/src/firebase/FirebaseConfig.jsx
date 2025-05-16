// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyCAu7f8CiR89bD59zADRjRidlBEMwAORZg",
  authDomain: "myecom-5de3d.firebaseapp.com",
  projectId: "myecom-5de3d",
  storageBucket: "myecom-5de3d.firebasestorage.app",
  messagingSenderId: "20246265190",
  appId: "1:20246265190:web:c5203180fd0bc0a36d1ca7"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }
