import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
function App() {
  const user = null;
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={!user ? <LoginScreen /> : <HomeScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
