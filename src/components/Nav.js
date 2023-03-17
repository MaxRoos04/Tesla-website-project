import React from 'react';
import {BiDownArrowAlt} from 'react-icons/bi'
import { Link } from 'react-scroll'

const Nav = () => {
  return(

  <div className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50">
  <div className="container mx-auto">
    {}
    <div className='w-full h-[96px] max-w-[100px] mx-auto  px-5 flex justify-between items-center text 2x1 text-white/50'>
      <Link 
        to='home' 
        activeClass='active'
        smooth={true}
        spy={true}
        offset={-200}
        className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
       <BiDownArrowAlt/>
      </Link>
    </div>
  </div>
  </div>
)};

export default Nav;
