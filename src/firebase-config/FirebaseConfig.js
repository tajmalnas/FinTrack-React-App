import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDG0AHaLT_NXU3Yy6QNrtl0au7HrguvYjU",
  authDomain: "personal-finance-tracker-6fd6f.firebaseapp.com",
  projectId: "personal-finance-tracker-6fd6f",
  storageBucket: "personal-finance-tracker-6fd6f.appspot.com",
  messagingSenderId: "409450911037",
  appId: "1:409450911037:web:37b5d4ea200f984c2b6154",
  measurementId: "G-EJ318LEBC4"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };

export const db = getFirestore(app);
export const storage = getStorage(app);