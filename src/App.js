// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProfilePage from './components/ProfilePage'; // Ensure this path is correct

function App() {
  return (
    <Router>
      <Routes>
        {/* Remove or update the following line if HomePage is not present */}
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
}

export default App;
