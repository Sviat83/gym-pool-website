import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
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
const analytics = getAnalytics(app);
const db = getFirestore(app); 

export { app, analytics, db };
// // src/firebase.js
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getFirestore } from "firebase/firestore";

// // Твоя конфігурація (брала з Firebase Console → Project settings → Config)
// const firebaseConfig = {
//   apiKey: "AIza...",
//   authDomain: "gym-pool-website.firebaseapp.com",
//   projectId: "gym-pool-website",
//   storageBucket: "gym-pool-website.appspot.com",
//   messagingSenderId: "581107379400",
//   appId: "1:581107379400:web:bbc27ac5e02ccc1458c9fd",
//   measurementId: "G-JD9VJWYNTJ"
// };

// // Ініціалізація
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// export const db = getFirestore(app);

// export { app, analytics };



// // import { app } from "./firebase";  це прописати у будь-якому компоненті, де треба працювати з Firebase
