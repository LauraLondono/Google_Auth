import React from 'react';
import { auth } from "./Firebase/firebase-Config";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const history = useNavigate();

  const signIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {

        
        // console.log(displayName);

      }).catch((error) => {
        console.log(error);
      });
  }
  return (
    <div>
      <button onClick={() => {
        signIn()
        history("/home")
      }}>
        Sign In with Google
      </button>
    </div>
  )
};

export default Login;
