import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAgIBZxaQCaaiB7FRJE3PkgbxS5vZ2lrtI",
  authDomain: "portfolio-5dbbd.firebaseapp.com",
  databaseURL: "https://portfolio-5dbbd.firebaseio.com",
  projectId: "portfolio-5dbbd",
  storageBucket: "portfolio-5dbbd.appspot.com",
  messagingSenderId: "262981737094",
  appId: "1:262981737094:web:faf2e1bf504745d809cf07",
  measurementId: "G-YTSE5QWHVQ",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore();

export { db, firebaseApp };
