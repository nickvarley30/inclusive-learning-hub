import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Literacy from './pages/Literacy';
import Numeracy from './pages/Numeracy';
import Accessibility from './pages/Accessibility';
import './App.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <nav style={{ padding: '1rem', background: '#005CB9' }}>
      <Link to="/" style={{ margin: '0 1rem', color: 'white' }}>Home</Link>
      <Link to="/literacy" style={{ margin: '0 1rem', color: 'white' }}>Literacy</Link>
      <Link to="/numeracy" style={{ margin: '0 1rem', color: 'white' }}>Numeracy</Link>
      <Link to="/accessibility" style={{ margin: '0 1rem', color: 'white' }}>Accessibility</Link>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/literacy" element={<Literacy />} />
      <Route path="/numeracy" element={<Numeracy />} />
      <Route path="/accessibility" element={<Accessibility />} />
    </Routes>
  </Router>
);
