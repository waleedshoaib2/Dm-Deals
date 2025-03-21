
require('dotenv').config();

const { initializeApp } = require("firebase/app");
const { getFirestore } = require("firebase/firestore");

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

const firebaseApp = initializeApp(firebaseConfig);

const connectToDb = () => {
  try {
    const db = getFirestore(firebaseApp);
    console.log("Connected to Firestore successfully");
    return db;
  } catch (error) {
    console.error("Error connecting to Firestore:", error);
    throw error;
  }
};

module.exports = { firebaseApp, connectToDb };