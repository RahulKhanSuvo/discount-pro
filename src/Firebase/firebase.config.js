// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBaAvri9Wuwdz_TU5HyJN1lxsr-PbIAEOE",
  authDomain: "discount-pro-5cbf6.firebaseapp.com",
  projectId: "discount-pro-5cbf6",
  storageBucket: "discount-pro-5cbf6.firebasestorage.app",
  messagingSenderId: "252565679301",
  appId: "1:252565679301:web:d26151d9c2d6280cc154ac",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
