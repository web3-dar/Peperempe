import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomePage from './components/Birthday';
import WishesPage from './components/second';
import BirthdayAnimation from './components/cake';


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/wishes" element={<WishesPage />} />
        <Route path="/cake" element={<BirthdayAnimation />} />
      </Routes>
    </Router>
  );
}

export default App;
