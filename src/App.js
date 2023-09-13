import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Auth/SignIn/Login";
import SignUp from "./components/Auth/SignUp/SignUp"
import { auth } from "./components/FirebaseAuth";
import "./App.css";

function App() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else {
        setUserName("");
      }
    });
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home name={userName} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

function NotFound() {
  return <h1>Page not found</h1>;
}

export default App;
