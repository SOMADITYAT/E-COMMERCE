import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBV5lI792UVpNR2YXlKb1RuRH3Qz0dXmdE",
    authDomain: "app-4ce48.firebaseapp.com",
    projectId: "app-4ce48",
    storageBucket: "app-4ce48.appspot.com",
    messagingSenderId: "587925159131",
    appId: "1:587925159131:web:435dd3efe9af15852fe0fe",
    measurementId: "G-THL1ZV49N3"
  };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)
export {fireDB,auth } ;