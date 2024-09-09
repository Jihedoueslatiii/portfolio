// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProfilePage from './components/ProfilePage'; // Make sure the path to ProfilePage is correct

function App() {
  return (
    <Router>
      <Routes>
        {/* Set the ProfilePage as the default route at the root "/" */}
        <Route path="/" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
}

export default App;
