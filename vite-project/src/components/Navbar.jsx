import React, {useState} from 'react';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
       <nav className='navbar'>
            <div className='navbar-container'>
                <Link to="/" className='navbar-logo'>
                    HUGH <i className="fab ta-typo3"></i>
                </Link>
            </div>
       </nav>
    </>
  )
}

export default Navbar;
