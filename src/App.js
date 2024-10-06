import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import ProfilePage from './components/ProfilePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
}

export default App;
