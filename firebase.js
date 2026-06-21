import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBmtjRw0AWf1wkdNwrqvRxR2qvLnzXwMwI",
  authDomain: "document-tracking-system-b6b72.firebaseapp.com",
  projectId: "document-tracking-zaneco",
  storageBucket: "document-tracking-system-b6b72.appspot.com", // ✅ FIXED
  messagingSenderId: "313625741949",
  appId: "1:313625741949:web:9247d281e989cd83c6ff14",
  measurementId: "G-KQXL7NN4CD"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);