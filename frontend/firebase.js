import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDmIwtSJ4_lOk2V4o06T89fKOGNa6hVVTw",
    authDomain: "backup-1e9ac.firebaseapp.com",
    projectId: "backup-1e9ac",
    storageBucket: "backup-1e9ac.firebasestorage.app",
    messagingSenderId: "106435832288",
    appId: "1:106435832288:web:8fcd5d9754738f79982385"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };