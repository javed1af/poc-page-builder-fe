import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import PuckEditor from './components/PuckEditor';
import MySitePage from './components/MySitePage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/editor" element={<PuckEditor />} />
      <Route path="/my-site-page" element={<MySitePage />} />
    </Routes>
  );
};

export default AppRoutes;
