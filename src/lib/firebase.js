"use client";
import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAWqLejUHunQjNwXlSomzkq7mYOH07oFpA",
  authDomain: "udaangethigh.firebaseapp.com",
  projectId: "udaangethigh",
  storageBucket: "udaangethigh.firebasestorage.app",
  messagingSenderId: "640250361745",
  appId: "1:640250361745:web:576eaf77c3794a3babcc30"
};

// Initialize Firebase
let app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const auth = getAuth(app);

export { auth };
export default app; 