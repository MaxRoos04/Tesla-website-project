import React from 'react';
import Logo from '../assets/logo.png'; 
import { Link } from 'react-scroll'

const Header = () => {
  return <header className='py-8'>
    <div className='container mx-auto'>
      <div className='flex justify-between items-center'>
        
        <a href='#'>
          <img src={Logo} style={{height:"100px"}}alt=''/>
        </a>

        <Link 
        to='MdS' 
        activeClass='active'
        smooth={true}
        spy={true}
        offset={-200}
        className='h4 cursor-pointer flex items-center justify-center rounded-none'
        style={{marginTop:"3%"}}>
        Model S
       </Link>

       <Link 
        to='Md3' 
        activeClass='active'
        smooth={true}
        spy={true}
        offset={-200}
        className='h4 cursor-pointer flex items-center justify-center rounded-none'
        style={{marginTop:"3%"}}>
        Model 3
       </Link>

       <Link 
        to='MdX' 
        activeClass='active'
        smooth={true}
        spy={true}
        offset={-200}
        className='h4 cursor-pointer flex items-center justify-center rounded-none'
        style={{marginTop:"3%"}}>
        Model X
       </Link>

       <Link 
        to='MdY' 
        activeClass='active'
        smooth={true}
        spy={true}
        offset={-200}
        className='h4 cursor-pointer flex items-center justify-center rounded-none'
        style={{marginTop:"3%"}}>
        Model Y
       </Link>

       <Link 
        to='contact' 
        activeClass='active'
        smooth={true}
        spy={true}
        offset={-200}
        className='h4 cursor-pointer flex items-center justify-center rounded-none'
        style={{marginTop:"3%"}}>
        More
       </Link>

      </div>
    </div>
    </header>;
};

export default Header;