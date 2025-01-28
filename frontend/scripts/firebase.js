// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";
import { getFirestore, doc, setDoc, Timestamp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmIwtSJ4_lOk2V4o06T89fKOGNa6hVVTw",
  authDomain: "backup-1e9ac.firebaseapp.com",
  databaseURL: "https://backup-1e9ac-default-rtdb.firebaseio.com",
  projectId: "backup-1e9ac",
  storageBucket: "backup-1e9ac.firebasestorage.app",
  messagingSenderId: "106435832288",
  appId: "1:106435832288:web:8fcd5d9754738f79982385"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, createUserWithEmailAndPassword, signInWithEmailAndPassword, setDoc, doc, Timestamp };
