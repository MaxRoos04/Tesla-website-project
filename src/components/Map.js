import React from 'react';
import CountUp from 'react-countup';
import {useInView} from 'react-intersection-observer'
import {motion} from 'framer-motion'
import {fadeIn} from '../variants'
import { Link } from 'react-scroll'
import Image from '../assets/Map.png'

const Map = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  }); 

  return (
    <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
        <motion.div 
        variants={fadeIn('right', 0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.3}}
        className='flex-1 bg-Map bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top' style={{marginRight: "10%"}}>
          <img src={Image} alt=''/>
        </motion.div>
        
        <motion.div 
        variants={fadeIn('left', 0.5)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.3}}
        className='flex-1'>
          <h2 className='h2'>Tesla Superchargers in Finland</h2>
          <h3 className='h3 mb-4'></h3>
          <p className='mb-6'></p>

        <div className='flex gap-x-8 items-center'>
        <Link 
           to='services'
           activeClass='active'
           smooth={true}
           spy={true}>
           <button className='btn btn-lg'>What we do</button>
        </Link>
          <a href='#' className='text-gradient btn-link'>
            Tesla
          </a>
        </div>
       </motion.div>
      </div>
  )
};

export default Map;