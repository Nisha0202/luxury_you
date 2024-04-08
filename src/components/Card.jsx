import React, { useEffect, useState } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

const Card = ({ estate }) =>{
useEffect(() => {
  AOS.init();
}, []);


  return(

  <div className="card w-64 md:w-80 border-2 p-4 rounded-md h-xs" data-aos="fade">
    <img className='w-full h-56 rounded-md' src={estate.image} alt={estate.estate_title} />

    <h2 className='font-bold py-4 text-center'>{estate.estate_title}</h2>

    <div className='grid grid-cols-3 grid-rows-2 gap-0 pt-2'>
          <h3 className='col-span-2'><span className='font-semibold'>Segment: </span>{estate.segment_name}</h3> 
          <p className='text-right col-span-1'><span className='font-semibold '>Status:</span> {estate.status}</p>
    </div>

    <p className='text-center text-wrap md:pb-2 pb-0'>{estate.description}</p>
    <div className='grid grid-cols-2 grid-rows-2 gap-2 py-2'>
      <p className=''><span className='font-semibold'>Price:</span> {estate.price}</p>
      <p className='text-right'><span className='font-semibold'>Area:</span> {estate.area}</p>
      <p className='col-span-2'><span className='font-semibold'>Location:</span> {estate.location}</p>
    </div>

    <ul className='flex flex-wrap gap-2 pt-2 border-t-2 h-16'>
  <span className='font-semibold'>Facilities:</span>
  {estate.facilities.slice(0, 2).map((facility, index) => (
    <p key={index}>{facility},</p>
  ))}
  <p>...</p>
</ul>

    <div className='btn  rounded-md bg-indigo-300 mt-2'>View More</div>
  </div>
);
}
export default Card;



