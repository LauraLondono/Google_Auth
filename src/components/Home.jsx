import React from 'react';
import { auth } from "./Firebase/firebase-Config";
import { useNavigate } from "react-router-dom";



const Home = () => {

    const history = useNavigate();

    const signOut = () => {
        auth.signOut();
    }
    
    const user = auth.currentUser;
    const displayName = user.displayName;

    return (
        <div>
            <h1>Bienvenido {displayName} </h1>
            <button onClick={() => {
                signOut()
                history("/")
            }}>
                Sign out
            </button>
        </div>
    );
};

export default Home;