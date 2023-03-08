import React from 'react';
import Image from '../assets/front-page.png';
import{FaGithub, FaLinkedin, FaInstagram} from 'react-icons/fa'
import {TypeAnimation} from 'react-type-animation'; 
import {motion} from 'framer-motion'; 
import {fadeIn} from '../variants'; 
import { Link } from 'react-scroll'

const Banner = () => {
  return(
  <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
     
     <motion.div variants={fadeIn('down', 0.5)}  whileInView={'show'}  className=' lg:flex flex-1 '>
          <img src={Image} alt=''/>
      </motion.div>
   </section>
)};

export default Banner;
