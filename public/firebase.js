// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxMzQHsXVbb-frxeG1rUVt2OPZPq1QXhM",
  authDomain: "blogassignment-94439.firebaseapp.com",
  projectId: "blogassignment-94439",
  storageBucket: "blogassignment-94439.appspot.com",
  messagingSenderId: "454869332009",
  appId: "1:454869332009:web:61c6d26b89f6f98f902c38"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);