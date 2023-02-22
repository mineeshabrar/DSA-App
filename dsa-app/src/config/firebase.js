import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// import { getFirestore, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAK4KkTeOzQEZl-xetDQp7809ON6sJDUd8",
  authDomain: "dsa-app-e8d34.firebaseapp.com",
  projectId: "dsa-app-e8d34",
  storageBucket: "dsa-app-e8d34.appspot.com",
  messagingSenderId: "444013291259",
  appId: "1:444013291259:web:3028342483bd3f5124325e"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);