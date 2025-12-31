import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyANafmzOXTiQcgxIVDJN-XVxtnaOJeIsbE",
  authDomain: "shahid-jewelers-umair.firebaseapp.com",
  projectId: "shahid-jewelers-umair",
  storageBucket: "shahid-jewelers-umair.firebasestorage.app",
  messagingSenderId: "167775055450",
  appId: "1:167775055450:web:1f9a89a68f8601e6e0f263",
  measurementId: "G-8T38T4SD3K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);

export default app;
