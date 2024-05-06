import React, {useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SecureRouter from './components/SecureRouter';
import Navbar from './components/NavBar';
import faviconUrl from '../static/assets/favicon.ico'
import '../src/styles/Page.css'

// Pages and Components
import MainPage from './pages/MainPage';
import ManageLayoutsPage from './pages/ManageLayoutsPage';
import ViewLayoutsPage from './pages/ViewLayoutsPage';
import LoginPage from './pages/LoginPage';
import WaitlistPage from './pages/WaitlistPage';
import EmployeeCreationPage from './pages/EmployeeCreationPage'
import RestaurantManagementPage from './pages/RestaurantManagementPage'
import MenuPage from './pages/MenuPage'
import ManageMenuPage from './pages/ManageMenuPage'
import SettingsPage from './pages/SettingsPage'
import ChefPage from './pages/ChefPage'
import OrderPage from './pages/OrderPage'


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
      {window.location.pathname != "/login/" && <Navbar />}
      <Routes>
        <Route
          path="/"
          element={
            <SecureRouter requiredPermissions={["host", "server", "chef", "manager", "owner"]}> 
              <MainPage />
            </SecureRouter>}
        />

        <Route
          path="/create-order"
          element={
            <SecureRouter requiredPermissions={["server", "manager", "owner"]}> 
              <OrderPage />
            </SecureRouter>}
        />

        <Route
          path="/orders"
          element={
            <SecureRouter requiredPermissions={["chef", "manager", "owner"]}> 
              <ChefPage />
            </SecureRouter>}
        />

        <Route
          path="/manage-layouts"
          element={
            <SecureRouter requiredPermissions={["manager", "owner", "host"]}> 
              <ManageLayoutsPage/>
            </SecureRouter>}
        />

        <Route
          path="/layouts"
          element={
            <SecureRouter requiredPermissions={["host", "server", "manager", "owner"]}> 
              <ViewLayoutsPage/>
            </SecureRouter>}
        />

        <Route
          path="/settings"
          element={
            <SecureRouter requiredPermissions={["host", "server", "chef", "manager", "owner", "admin"]}> 
              <SettingsPage/>
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

        <Route
          path="/waitlist"
          element={
            <SecureRouter requiredPermissions={["host", "server", "manager", "owner"]}> 
              <WaitlistPage />
            </SecureRouter>}
        />
        
        <Route
          path="/manage-employees"
          element={
            <SecureRouter requiredPermissions={["owner", "manager"]}> 
              <EmployeeCreationPage/>
            </SecureRouter>}
        />

        <Route
          path="/manage-menus"
          element={
            <SecureRouter requiredPermissions={["owner", "manager"]}> 
              <ManageMenuPage/>
            </SecureRouter>}
        />
        
        <Route
          path="/menu"
          element={
            <SecureRouter requiredPermissions={["host", "server", "chef", "manager", "owner"]}> 
              <MenuPage/>
            </SecureRouter>}
        />
      
      </Routes>
      </Router>
  );
}