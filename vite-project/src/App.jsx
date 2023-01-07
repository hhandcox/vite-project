import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';


function App() {

  return (
    <>
        <Navbar />
        <Home />
        <Routes>
            <Route path='/home' exact component={Home}/>
            <Route path='/services' component={Services}/>
            <Route path='/products' component={Products}/>
            <Route path='/sign-up' component={SignUp}/>
        </Routes>
    </>
  )
}

export default App;