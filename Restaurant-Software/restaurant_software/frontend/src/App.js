import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"

// Pages and Components
import MainPage from './pages/MainPage'
import TablesPage from './pages/TablesPage'
import LoginPage from './pages/LoginPage'

export default function App() {
  return (
    <Router>
      <div className="app">
        <Route path="/" exact component={MainPage} />
        <Route path="/tables" component={TablesPage} />
        <Route path="/login" component={LoginPage} />
      </div>
    </Router>
  )
}