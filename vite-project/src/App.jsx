import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Footer from './components/Footer';


function App() {
  return (
      <>
        <Navbar />
        <Routes>
            <Route path='/' exact element={<Home />}/>
              <Route path='/services' component={<Services />}/>
              <Route path='/products' component={<Products />}/>
              <Route path='/sign-up' component={<SignUp />}/>
              <Route path='*' component={<Home />}/>
        </Routes>
        <Footer />
      </>
  )
}

export default App;