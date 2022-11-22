import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Footer from './common/Footer';
import Header from './common/Header';
import Home from './pages/Home';
import SearchPage from './pages/SearchPage';

const App = () => (
  // BEM
  <div className="app">
    <Routes>
      <Route path="/searchPage" element={} />
      <Route path="/" element={} />
    </Routes>
  </div>
);

export default App;
