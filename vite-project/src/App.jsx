import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css'


function App() {

  return (
    <div className="App">
      <Router>
        <Navbar />
      </Router>
    </div>
  )
}

export default App;