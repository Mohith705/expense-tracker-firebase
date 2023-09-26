// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjG_kBvKRDU5WIVUgGYdEmeIXLVL71-_k",
  authDomain: "expense-tracker-e3d77.firebaseapp.com",
  projectId: "expense-tracker-e3d77",
  storageBucket: "expense-tracker-e3d77.appspot.com",
  messagingSenderId: "348687670036",
  appId: "1:348687670036:web:8dbe403656b2ef08eac001",
  measurementId: "G-WTHKRV0FQ5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);

// firebase login
// firebase init
// firebase deploy