import React from 'react';
import Image from '../assets/front-page.png';

const Banner = () => {
  return(
  <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
     <div className='container mx-auto'>
     <div className='bg-Banner flex-1 h-[600px] text-center'>
          <h2 className='h2 text-gradient mb-6'>TESLA</h2>
          <h3 className='h3  mb-16 ' >Accelerating the world's transition to sustainable energy.</h3>
        </div>
      <div className=''>
        </div>
      </div>
   </section>
)};

export default Banner;
