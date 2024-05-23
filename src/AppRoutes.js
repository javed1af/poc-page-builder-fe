import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import PuckEditorComponent from './components/PuckEditorComponent';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/editor" element={<PuckEditorComponent />} />
    </Routes>
  );
};

export default AppRoutes;
