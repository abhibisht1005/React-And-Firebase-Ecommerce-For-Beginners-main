// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration

const firebaseConfig = {
//use your own firbase apikey and info
  apiKey: "AIzaSyCAu7f8CiR89bD59zADRjRidlMw",
  authDomain: "myecom-5de3d.firebaseapp.com",
  projectId: "myecom-5de3",
  storageBucket: "myecom-5de3d.firebasestorage.app",
  messagingSenderId: "20246265190",
  appId: "1:20246265190:web:c5203180fd0bd1ca7"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }
