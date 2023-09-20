// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from  'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-SF4v3woqcdwwq7fSIPnYuOqyDDIA4RE",
  authDomain: "e-cignition-ecommerce-store.firebaseapp.com",
  databaseURL: "https://e-cignition-ecommerce-store-default-rtdb.firebaseio.com",
  projectId: "e-cignition-ecommerce-store",
  storageBucket: "e-cignition-ecommerce-store.appspot.com",
  messagingSenderId: "550856803249",
  appId: "1:550856803249:web:ac85abe79758bec3417390",
  measurementId: "G-MN5JSY9MVE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);