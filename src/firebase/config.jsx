import { initializeApp } from "firebase/app";
import {
  Timestamp,
  collection,
  addDoc,
  getFirestore,
  onSnapshot,
} from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAnFUogPbx_ih8XgdTmf2BcOtq5h0p06zI",
  authDomain: "finance-tracker-97b62.firebaseapp.com",
  projectId: "finance-tracker-97b62",
  storageBucket: "finance-tracker-97b62.appspot.com",
  messagingSenderId: "379866442655",
  appId: "1:379866442655:web:fe5f22bf289d0753b3ebaa",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export {
  auth,
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  Timestamp,
  collection,
  addDoc,
  db,
  onSnapshot,
};
