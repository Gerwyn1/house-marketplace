import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCv3_rfE00-iDDjAtEVNO5vCSzRU8SbVag",
  authDomain: "house-marketplace-9c302.firebaseapp.com",
  projectId: "house-marketplace-9c302",
  storageBucket: "house-marketplace-9c302.appspot.com",
  messagingSenderId: "540031558595",
  appId: "1:540031558595:web:275ff9014ac99b190dd376",
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();
