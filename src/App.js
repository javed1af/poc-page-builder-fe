import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TopNav from './components/TopNav';
import Home from './components/Home';
import PuckEditorComponent from './components/PuckEditorComponent';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <TopNav />
        <div className="main-container">
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/editor" element={<PuckEditorComponent />} />
              {/* Add more routes for additional pages */}
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;
