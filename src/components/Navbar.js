import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Logo from '../Assets/border and art.jpg'

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className='navbar'>
        <div style={{ marginLeft:'12px'}}>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            Meddi-Buddy
          </Link>
          <p style={{ color:'white', fontSize:'9px',marginLeft:'20px'}}>
          An intelligent support system to help you detect diseases
          </p>
        </div>
        <img style={{ width: '120px', height: '60px', marginLeft: '15px', borderRadius: '9px' }} src={Logo} alt="logo" />
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/DiseaesPred'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Disease Prediction
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/health'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              SmartBMI
            </Link>
          </li>
         
          <li className='nav-item'>
            <Link to='/hi' className='nav-links' style={{ color: "green" }} onClick={closeMobileMenu}>
              A/आ
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
