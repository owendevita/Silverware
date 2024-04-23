import React, {useState, useEffect} from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Pages and Components
import MainPage from './pages/MainPage'
import TablesPage from './pages/TablesPage'
import LoginPage from './pages/LoginPage'
import WaitlistPage from './pages/WaitlistPage'
import SecureRouter from './components/SecureRouter'

export default function App() {
  // <Route path="/tables" component={TablesPage} />
  


  return (
  <Routes>
    <Route path="/" element={<MainPage />} />

    <Route path="/login" element={<LoginPage />} />
    <Route path="/waitlist" element={<WaitlistPage />} />
  </Routes>
  )
}