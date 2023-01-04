import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPoo } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
       <nav className='navbar'>
            <div className='navbar-container'>
                <Link to="/" className='navbar-logo'>
                    HUGH <FontAwesomeIcon icon={faPoo}></FontAwesomeIcon>
                </Link>
            </div>
       </nav>
    </>
  )
}

export default Navbar;
