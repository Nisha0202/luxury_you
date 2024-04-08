import React from 'react';
import Slider from '../components/Slider';
import 'animate.css';

export default function Home() {
  return (
    <div className='container'>
      <Slider/>

      <div className='min-h-40 text-center py-12'>
        <h1 className=' font-bold'>Welcome to</h1>
        <p className='text-indigo-700 text-2xl font-bold animate__animated animate__flash'>Luxury You</p>
      </div>

    </div>





  );
}

