import './App.css';
import React from "react";
import { BrowserRouter as Router, Link, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Navigation from "./components/navigation.js";
import Etusivu from "./pages/etusivu.js";
import Hevonen from "./pages/hevonen";
import Rodut from "./pages/rodut";
import Ratsastus from "./pages/ratsastus";

function App() {
  return (
    <Router>
      <Navigation/>
        <Routes>
            <Route path="/" element={<Etusivu />} />
            <Route path="/hevonen" element={<Hevonen />} />
            <Route path="/rodut" element={<Rodut />} />
            <Route path="/ratsastus" element={<Ratsastus />} />
        </Routes>
    </Router>
  );
}

export default App;
