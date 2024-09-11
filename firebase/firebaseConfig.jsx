
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBscU8D0QLMufzqU_zE2D8RNkmywi99ERw",
  authDomain: "challenge-mob.firebaseapp.com",
  projectId: "challenge-mob",
  storageBucket: "challenge-mob.appspot.com",
  messagingSenderId: "462291191655",
  appId: "1:462291191655:web:6036c700b56ca6db3191c2",
  measurementId: "G-5JMPLYBQ1K"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
