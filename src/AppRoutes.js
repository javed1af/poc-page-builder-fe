import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import PuckEditor from './components/PuckEditor';
import MySitePage from './components/MySitePage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      {/* <Route path="/editor" element={<PuckEditor />} /> */}
      {/* <Route path="/my-site-page" element={<MySitePage />} /> */}
    </Routes>
  );
};

export default AppRoutes;
