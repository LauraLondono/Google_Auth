import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from "react";
import Login from "./components/Login";
import Home from "./components/Home";
import { auth } from "./components/Firebase/firebase-Config";

function App() {
  const [isUserSignedIn, setIsUserSignedIn] = useState(true);

  auth.onAuthStateChanged((user) => {
    if (user) {
      return setIsUserSignedIn(true);
    } else {
      return setIsUserSignedIn(false);
    }
  });

  if (isUserSignedIn === true) {
    return (
      <div>        
          <Routes>
            <Route path="/home" element={<Home />} />
          </Routes>
      </div>
    );
  } 
  else {
    return (
      <div>        
          <Routes>
            <Route path="/" element={<Login />} />
          </Routes>
      </div>
    );
  }
}

export default App;
