import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Dashboard } from './pages/Dashboard';
import { Login } from './pages/Login';
import { FundRequest } from './pages/FundRequest';
import { Feedback } from './pages/Feedback';
import { Requests } from './pages/Requests';
import { Updates } from './pages/Updates';
import { AboutUs } from './pages/AboutUs';
import { MyRequests } from './pages/MyRequests';
import { EscalationMatrix } from './pages/EscalationMatrix';
import { ProtectedRoute } from './components/layout/ProtectedRoute';
import { ActiveProjects } from './pages/metrics/ActiveProjects';
import { FundUtilization } from './pages/metrics/FundUtilization';
import { CompletionRate } from './pages/metrics/CompletionRate';
import { Beneficiaries } from './pages/metrics/Beneficiaries';
import { InfrastructureProjects } from './pages/InfrastructureProjects';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 relative">
        <div 
          className="fixed inset-0 pointer-events-none opacity-5"
          style={{
            backgroundImage: 'url("https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg")',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'contain',
            zIndex: 0
          }}
        />
        <div className="relative z-10">
          <Header />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/updates" element={<Updates />} />
            <Route path="/infrastructure-projects" element={<InfrastructureProjects />} />
            <Route path="/active-projects" element={<ActiveProjects />} />
            <Route path="/fund-utilization" element={<FundUtilization />} />
            <Route path="/completion-rate" element={<CompletionRate />} />
            <Route path="/beneficiaries" element={<Beneficiaries />} />
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
            <Route 
              path="/my-requests" 
              element={
                <ProtectedRoute allowedRoles={['club_owner']}>
                  <MyRequests />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/escalation-matrix" 
              element={
                <ProtectedRoute allowedRoles={['government']}>
                  <EscalationMatrix />
                </ProtectedRoute>
              } 
            />
            <Route path="/feedback" element={<Feedback />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}