import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKxXoTHufklr7tIVFRvkEv-OeBVh7KGqE",
  authDomain: "jac-colonia-de-vacaciones.firebaseapp.com",
  projectId: "jac-colonia-de-vacaciones",
  storageBucket: "jac-colonia-de-vacaciones.appspot.com",
  messagingSenderId: "651265497128",
  appId: "1:651265497128:web:c61ed3abaa7ded73223d1d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db= getFirestore(app);