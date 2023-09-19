import Home from './Pages/Home.js';
import About from './Pages/About.js'
import Projects from './Pages/Projects.js'
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path='about' element={<About />} />
          {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
