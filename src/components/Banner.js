import React from 'react';
import { Link } from 'react-scroll'

const Banner = () => {
  return(
  <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
     <div className='container mx-auto'>
     <div className='bg-Banner lg:bg-center flex-1 h-[600px] text-center '>
          <div className='align-middle'>
          <h2 className='h2 text-gradient mb-6'>TESLA</h2>
          <h3 className='h3  mb-16 ' >Accelerating the world's transition to sustainable energy.</h3>
           </div>
        </div>
      <div className=''>
        </div>
      </div>
   </section>
)};

export default Banner;
