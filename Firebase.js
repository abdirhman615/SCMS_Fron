// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArNLRZNVz2I4eGp5e4agvwbQn1o5_iAXY",
  authDomain: "scms-c1999.firebaseapp.com",
  projectId: "scms-c1999",
  storageBucket: "scms-c1999.appspot.com",
  messagingSenderId: "279451870464",
  appId: "1:279451870464:web:d6bf3bcb3a050b77453fe5",
  measurementId: "G-Y7S4J984SG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage=getStorage (app);
// const analytics = getAnalytics(app);