import React from 'react';
// components
import Banner from './components/Banner';
import Header from './components/Header';
import Nav from './components/Nav';
import SC from './components/SC';
import MdS from './components/MdS';
import Md3 from './components/Md3';
import MdX from './components/MdX';
import MdY from './components/MdY';

const App = () => {
  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
      <Header />
      <Banner />
      <Nav />
      <SC />
      <MdS />
      <Md3 />
      <MdX />
      <MdY />
      { <div className='h-[4000px]'></div> }
    </div>
  );
};

export default App;
