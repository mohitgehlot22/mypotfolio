import React from 'react';
import resume from './mohit.jpg';
import OffcanvasExample from './comman/Hearder';
import Footer from './comman/Footer';


export const Resume = () => {
  return (
    <>
      <OffcanvasExample/>
      <div className='container p-5'>
        <img src={resume} width={'100%'} alt="" />
      </div>
      <Footer/>
    </>

  )
}
