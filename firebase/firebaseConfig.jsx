// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9OmLuHYn1LiRhee2vDPKCGv3psyVp0Uc",
  authDomain: "mobile-challenge-e4b54.firebaseapp.com",
  projectId: "mobile-challenge-e4b54",
  storageBucket: "mobile-challenge-e4b54.appspot.com",
  messagingSenderId: "975008968011",
  appId: "1:975008968011:web:2e8ad9865115fa43d80cce",
  measurementId: "G-84EWZ2DLY9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);