import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import TopNav from './components/TopNav';
import RoutesComponent from './components/RoutesComponent';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <TopNav />
        <div className="main-container">
          <main>
            <RoutesComponent />
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;
