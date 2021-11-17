import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAjNaUrXmBKxzabF-1M56TG5-J16nJ1x6Y",
  authDomain: "login-809a1.firebaseapp.com",
  projectId: "login-809a1",
  storageBucket: "login-809a1.appspot.com",
  messagingSenderId: "471105445647",
  appId: "1:471105445647:web:96f90940007268c8c0e87a",
  measurementId: "G-5Z6DT1RLQ8",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
