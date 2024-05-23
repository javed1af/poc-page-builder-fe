import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import TopNav from './components/TopNav';
import AppRoutes from './AppRoutes';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <TopNav />
        <div className="main-container">
          <main>
            <AppRoutes />
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;
