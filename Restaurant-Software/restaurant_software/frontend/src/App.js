import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SecureRouter from './components/SecureRouter';

// Pages and Components
import MainPage from './pages/MainPage';
import TablesPage from './pages/TablesPage';
import LoginPage from './pages/LoginPage';
import WaitlistPage from './pages/WaitlistPage';
import EmployeeCreationPage from './pages/EmployeeCreationPage'


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route
          path="/tables"
          element={
            <SecureRouter requiredPermissions={["host", "waiter", "chef", "manager"]}> 
              <TablesPage/>
            </SecureRouter>}
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/waitlist" element={<WaitlistPage />} />
        
        <Route
          path="/manage-employees"
          element={
            <SecureRouter requiredPermissions={["owner", "manager"]}> 
              <EmployeeCreationPage/>
            </SecureRouter>}
        />

      </Routes>
    </Router>
  );
}