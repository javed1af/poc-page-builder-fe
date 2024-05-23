import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import PuckEditorComponent from './PuckEditorComponent';

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/editor" element={<PuckEditorComponent />} />
    </Routes>
  );
};

export default RoutesComponent;
