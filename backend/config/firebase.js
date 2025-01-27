// firebase.js
const admin = require("firebase-admin");
require("dotenv").config();

// Initialize Firebase Admin SDK with your Firebase project's credentials
admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: "https://backup-1e9ac.firebaseio.com"  // Replace with your Firebase DB URL
});

module.exports = admin;

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
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