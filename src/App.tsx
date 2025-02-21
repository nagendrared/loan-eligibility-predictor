import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoanForm from './components/LoanForm';
import Result from './components/Result';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoanForm />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </Router>
  );
}

export default App;