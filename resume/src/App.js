import Home from './Pages/Home.js';
import Portfolio from './Pages/Portfolio.js'
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route path="portfolio" element={<Portfolio />} />
          {/* <Route path='contact' element={<Contact />} /> */}
          {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
