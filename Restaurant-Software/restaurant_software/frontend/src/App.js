import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages and Components
import MainPage from './pages/MainPage';
import TablesPage from './pages/TablesPage';
import LoginPage from './pages/LoginPage';
import WaitlistPage from './pages/WaitlistPage';
import SecureRouter from './components/SecureRouter';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route
          path="/tables"
          element={
            <SecureRouter element={<TablesPage/>} requiredPermissions={["host", "waiter", "chef", "manger"]}> 
              <TablesPage/>
            </SecureRouter>}
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/waitlist" element={<WaitlistPage />} />
      </Routes>
    </Router>
  );
}