// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCuWV22V2vHCWVg62R37Txervny-oa2pwk",
  authDomain: "netflixgpt-4c97d.firebaseapp.com",
  projectId: "netflixgpt-4c97d",
  storageBucket: "netflixgpt-4c97d.appspot.com",
  messagingSenderId: "861536058251",
  appId: "1:861536058251:web:e227d370bee7f90c0d8d8e",
  measurementId: "G-8WK72WFQL1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
