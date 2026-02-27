import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";

import {
  getFirestore,
  collection,
  addDoc,
  getDocs
} from "https://www.gstatic.com/firebasejs/12.9.0/firebase-firestore.js";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-qd8h1zHSXv3i_9vkYFXs_dtfdkotxuU",
  authDomain: "artisanconnect-68ddf.firebaseapp.com",
  projectId: "artisanconnect-68ddf",
  storageBucket: "artisanconnect-68ddf.firebasestorage.app",
  messagingSenderId: "814919138724",
  appId: "1:814919138724:web:9705cbf15226b9e25cd531",
  measurementId: "G-TZMK58GQX1"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc, getDocs };