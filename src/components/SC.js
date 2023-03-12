import React from 'react';
import CountUp from 'react-countup';
import {useInView} from 'react-intersection-observer'
import {motion} from 'framer-motion'
import {fadeIn} from '../variants'
import { Link } from 'react-scroll'
import Image from '../assets/SC.png'

const SC = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  }); 

  return (
    <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
        
        <motion.div 
        variants={fadeIn('left', 0.5)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.3}}
        className='flex-1'>
          <h2 className='h2'>Tesla Superchargers in Finland</h2>
          <h3 className='h4 mb-4 text-gradient'>Supercharger-latausasemat sijaitsevat tärkeimmillä reiteillä lähellä palveluita ja pitävät akkusi ladattuna ollessasi matkalla.</h3>
          <p className='mb-6'></p>

        <div className='flex gap-x-8 items-center'>
        <Link 
           to='services'
           activeClass='active'
           smooth={true}
           spy={true}>
           <button className='btn btn-lg'>Locations</button>
        </Link>
          <a href='#' className='text-gradient btn-link'>
            Tesla.fi
          </a>
        </div>
       </motion.div>

       <motion.div 
        variants={fadeIn('right', 0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.3}}
        className='flex-1 bg-SC bg-no-repeat h-[640px] ' style={{marginRight: "10%"}}>
          <img src={Image} alt=''/>
        </motion.div>
      </div>
  )
};

export default SC;