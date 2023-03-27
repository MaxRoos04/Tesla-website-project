import React from 'react';
// components
import Banner from './components/Banner';
import Header from './components/Header';
import Nav from './components/Nav';
import SC from './components/SC';
import MdS from './Models/MdS';
import Md3 from './Models/Md3';
import MdX from './Models/MdX';
import MdY from './Models/MdY';
import Footer from './components/footer';

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
      <Footer />
      { <div className='h-[4000px]'></div> }
    </div>
  );
};

export default App;
