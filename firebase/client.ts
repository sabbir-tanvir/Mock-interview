// Import the functions you need from the SDKs you need
import { initializeApp, getApp ,getApps  } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase-admin/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyDJ-wT2aW-WoFGPUxgM4WiXkFzJ4Fcrmjo",
  authDomain: "preparation-43e22.firebaseapp.com",
  projectId: "preparation-43e22",
  storageBucket: "preparation-43e22.firebasestorage.app",
  messagingSenderId: "262012993858",
  appId: "1:262012993858:web:9fa4330c74c164055888db",
  measurementId: "G-WXWHSTELC9"
};

// Initialize Firebase
const app = !getApps.length ?  initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);