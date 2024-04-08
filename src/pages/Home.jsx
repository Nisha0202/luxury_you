import React from 'react';
import Slider from '../components/Slider';
import 'animate.css';
import Estate from '../components/Estate';

export default function Home() {


  return (
    <div className='container'>
      <Slider/>

      <div className='min-h-40 text-center py-12'>
        <h1 className='text-xl font-bold'>Welcome to</h1>
        <p className='text-indigo-700 text-3xl font-bold animate__animated animate__flash'>Luxury You</p>
      </div>
<Estate/>




    </div>





  );
}

