import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import PriceListPage from './components/Pricelist'; // Import the PriceListPage component
import ReportPage from './components/REPORT'; // Import the ReportPage component
import './App.css';
import 'boxicons';
import './index.css'; // Add this line to import Tailwind CSS

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/pricelist" element={<PriceListPage />} /> {/* Add route for PriceListPage */}
          <Route path="/report" element={<ReportPage />} /> {/* Add route for ReportPage */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

