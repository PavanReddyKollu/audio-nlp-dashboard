import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AudioUpload from './components/AudioUpload';
import ResultsPage from './components/ResultsPage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AudioUpload />} />
        <Route path="/results" element={<ResultsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
