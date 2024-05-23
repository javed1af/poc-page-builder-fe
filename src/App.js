import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import PuckEditorComponent from './components/PuckEditorComponent';

const App = () => {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/editor" element={<PuckEditorComponent />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
