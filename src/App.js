import React from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import Login from "./Components/Login";
import Register from "./Components/Register";
import './App.css';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <button className="nav-button" onClick={() => navigate("/login")}>Login</button>
      <button className="nav-button" onClick={() => navigate("/register")}>Register</button>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
