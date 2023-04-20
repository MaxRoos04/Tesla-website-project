import React, { useState } from 'react';
import Logo from '../assets/logo.png'; 
import { Link } from 'react-scroll';
import DropdownMenu from "./dropdown"; 
import './header.css';

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobile(!isMobile);
  }

  return (
    <header className='py-8'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>

          <a href='home' className='Logo'>
            <img src={Logo} style={{height:"100px"}}alt=''/>
          </a>

          <div className={`nav-links ${isMobile ? "mobile-menu" : ""}`}>
            <Link 
              to='Page1' 
              activeClass='active'
              smooth={true}
              spy={true}
              offset={-200}
              className='h4 cursor-pointer rounded-none model-mobile'
              onClick={() => setIsMobile(false)}
            >
              <span>Model</span> S
            </Link>

            <Link 
              to='Page2' 
              activeClass='active'
              smooth={true}
              spy={true}
              offset={-200}
              className='h4 cursor-pointer rounded-none model-mobile'
              onClick={() => setIsMobile(false)}
            >
              <span>Model</span> 3
            </Link>

            <Link 
              to='MdX' 
              activeClass='active'
              smooth={true}
              spy={true}
              offset={-200}
              className='h4 cursor-pointer rounded-none model-mobile'
              onClick={() => setIsMobile(false)}
            >
              <span>Model</span> X
            </Link>

            <Link 
              to='MdY' 
              activeClass='active'
              smooth={true}
              spy={true}
              offset={-200}
              className='h4 cursor-pointer rounded-none model-mobile'
              onClick={() => setIsMobile(false)}
            >
              <span>Model</span> Y
            </Link>

            <DropdownMenu>
            </DropdownMenu>
          </div>

          <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
            {isMobile ? (
              <i className="fas fa-times"></i>
            ) : (
              <i className="fas fa-bars"></i>
            )}
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;
