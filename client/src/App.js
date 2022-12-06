
import { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Posttw from './pages/Home/Posttw';

import Home from "./pages/Home/Posttw";
import Perfil from './pages/Perfil/Login'
function App() {
  
  return (
    <div className="App--container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Perfil" element={<Perfil />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
