// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPHb-LTABgVJmFgLnay_RmgBq36SK2MV8",
  authDomain: "auth-provider-63064.firebaseapp.com",
  projectId: "auth-provider-63064",
  storageBucket: "auth-provider-63064.firebasestorage.app",
  messagingSenderId: "731167585726",
  appId: "1:731167585726:web:cf94e0a5507502634d35ef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);