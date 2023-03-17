import React from 'react';
import Image from '../assets/front-page.png';
import {TypeAnimation} from 'react-type-animation'; 
import {motion} from 'framer-motion'; 
import {fadeIn} from '../variants'; 
import { Link } from 'react-scroll'

const Banner = () => {
  return(
  <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
     <div className='container mx-auto'>
      <div className='flex-1 bg-Banner bg-contain bg-no-repeat h-[640px]' style={{}}>
     
      <div className='flex-1'>
          <h2 className='h2 text-accent mb-6' >TESLA</h2>
          <h3 className='h3 max-w-[455px] mb-16' >Accelerating the world's transition to sustainable energy.</h3>
          <Link 
            to='work' 
            activeClass='active'
            smooth={true}
            spy={true}
            offset={-200}>
         </Link>
        </div>
        </div>
      </div>
   </section>
)};

export default Banner;
