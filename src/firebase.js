import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCpNhAGhidN2h8bm1hZps9N35I8R4MpwhY",
  authDomain: "gym-pool-website.firebaseapp.com",
  projectId: "gym-pool-website",
  storageBucket: "gym-pool-website.firebasestorage.app",
  messagingSenderId: "581107379400",
  appId: "1:581107379400:web:bbc27ac5e02ccc1458c9fd",
  measurementId: "G-JD9VJWYNTJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app); 




// // import { app } from "./firebase";  це прописати у будь-якому компоненті, де треба працювати з Firebase
