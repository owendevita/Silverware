import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"

// Pages and Components
import MainPage from './pages/MainPage'
import TablesPage from './pages/TablesPage'
import LoginPage from './pages/LoginPage'
import WaitlistPage from './pages/WaitlistPage'
import ChefPage from './pages/ChefPage'
import OrderPage from './pages/OrderPage'

export default function App() {
  return (
    <Router>
      <div className="app">
        <Route path="/" exact component={MainPage} />
        <Route path="/tables" component={TablesPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/waitlist" component={WaitlistPage} />
        <Route path="/orders" component={ChefPage} />
        <Route path="/create-order" component={OrderPage} />
      </div>
    </Router>
  )
}