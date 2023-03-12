import React from 'react';
import Image from '../assets/front-page.png';
import {TypeAnimation} from 'react-type-animation'; 
import {motion} from 'framer-motion'; 
import {fadeIn} from '../variants'; 
import { Link } from 'react-scroll'

const Banner = () => {
  return(
  <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
     
     
     
      <motion.div 
        variants={fadeIn('right', 0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.3}}
        className='flex-1 lg:bg-front-page lg:bg-bottom  bg-no-repeat mb-12 lg:mb-6' >
          <h2 className='h2 text-accent mb-6'>TESLA</h2>
          <h3 className='h3 max-w-[455px] mb-16 '></h3>
          <Link 
            to='work' 
            activeClass='active'
            smooth={true}
            spy={true}
            offset={-200}>
         </Link>
        </motion.div>
   </section>
)};

export default Banner;
