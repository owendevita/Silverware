import React, {useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SecureRouter from './components/SecureRouter';
import faviconUrl from '../static/assets/favicon.ico'

// Pages and Components
import MainPage from './pages/MainPage';
import ManageLayoutsPage from './pages/ManageLayoutsPage';
import LoginPage from './pages/LoginPage';
import WaitlistPage from './pages/WaitlistPage';
import EmployeeCreationPage from './pages/EmployeeCreationPage'
import RestaurantManagementPage from './pages/RestaurantManagementPage'
import MenuPage from './pages/MenuPage'
import ManageMenuPage from './pages/ManageMenuPage'


export default function App() {
  
  useEffect(() => {
    const faviconElement = document.querySelector('link[rel="icon"]');
    if(faviconElement !== null) {
      faviconElement.href = faviconUrl;
    } else {
      console.log("faviconElement null");
    }
      
  }, [])
  
  
  return (
    <Router>

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route
          path="/manage-layouts"
          element={
            <SecureRouter requiredPermissions={["host", "waiter", "chef", "manager", "owner"]}> 
              <ManageLayoutsPage/>
            </SecureRouter>}
        />

        <Route
          path="/manage-restaurants"
          element={
            <SecureRouter requiredPermissions={["admin"]}> 
              <RestaurantManagementPage />
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
        <Route path="/menu" element= {<MenuPage/>} />
        <Route path="/manage-menus" element= {<ManageMenuPage/>} />
      </Routes>
    </Router>
  );
}