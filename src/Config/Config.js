import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDhwXYHLwzlv6qbRfJ7-FS3j5lzidvVxjw",
  authDomain: "fir-d557f.firebaseapp.com",
  projectId: "fir-d557f",
  storageBucket: "fir-d557f.appspot.com",
  messagingSenderId: "1093123300541",
  appId: "1:1093123300541:web:e84ca83ddd7ee405a8ebd4",
  measurementId: "G-K3V3JQH22D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const storage = getStorage(app)
export const db = getFirestore(app)