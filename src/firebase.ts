
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDm4_i4vUcLlQfmrCNt4_0enqCmjUHR1tA",
  authDomain: "todo-app-eb44e.firebaseapp.com",
  projectId: "todo-app-eb44e",
  storageBucket: "todo-app-eb44e.appspot.com",
  messagingSenderId: "372734079101",
  appId: "1:372734079101:web:f89380934d49c70b9d8114",
  measurementId: "G-NNQH3LMT8D",
};

export const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);
export const auth = getAuth(firebaseApp)

