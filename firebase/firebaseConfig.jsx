import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, addDoc, getDocs, doc, updateDoc, deleteDoc } from 'firebase/firestore';

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBscU8D0QLMufzqU_zE2D8RNkmywi99ERw",
  authDomain: "challenge-mob.firebaseapp.com",
  projectId: "challenge-mob",
  storageBucket: "challenge-mob.appspot.com",
  messagingSenderId: "462291191655",
  appId: "1:462291191655:web:6036c700b56ca6db3191c2",
  measurementId: "G-5JMPLYBQ1K"
};

// Inicializa o aplicativo Firebase
const app = initializeApp(firebaseConfig);

// Inicializa o Firestore
const db = getFirestore(app);

// Inicializa a autenticação
export const auth = getAuth(app);

// Exporta as funções do Firestore
export { collection, addDoc, getDocs, doc, updateDoc, deleteDoc, db };

