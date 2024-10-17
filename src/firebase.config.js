// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {  getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBUWC3dhOPDmNX7aOpsIQGwwi6KXPSckg",
  authDomain: "user-email-password-auth-944e2.firebaseapp.com",
  projectId: "user-email-password-auth-944e2",
  storageBucket: "user-email-password-auth-944e2.appspot.com",
  messagingSenderId: "1092136431963",
  appId: "1:1092136431963:web:420bffa08bbe91b332aa7e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth; 