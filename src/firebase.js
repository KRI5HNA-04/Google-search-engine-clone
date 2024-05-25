// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQEnu5WDhzUHeH4Y0En0BJEng6baC_6l8",
  authDomain: "clone-692e8.firebaseapp.com",
  projectId: "clone-692e8",
  storageBucket: "clone-692e8.appspot.com",
  messagingSenderId: "780759667259",
  appId: "1:780759667259:web:983e446a2002fa379ac21e",
  measurementId: "G-LHXLLHBVXE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
