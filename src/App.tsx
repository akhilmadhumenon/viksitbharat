import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Dashboard } from './pages/Dashboard';
import { Login } from './pages/Login';
import { FundRequest } from './pages/FundRequest';
import { Feedback } from './pages/Feedback';
import { Requests } from './pages/Requests';
import { ProtectedRoute } from './components/layout/ProtectedRoute';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route 
            path="/requests" 
            element={
              <ProtectedRoute allowedRoles={['government']}>
                <Requests />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/fund-request" 
            element={
              <ProtectedRoute allowedRoles={['club_owner']}>
                <FundRequest />
              </ProtectedRoute>
            } 
          />
          <Route path="/feedback" element={<Feedback />} />
        </Routes>
      </div>
    </Router>
  );
}