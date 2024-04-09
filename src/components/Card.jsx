import React, { useEffect, useState } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from 'react-router-dom';

const Card = ({ estate }) => {
  useEffect(() => {
    AOS.init();
  }, []);


  return (

    <div className="card w-64 md:w-80 border-2 p-4 rounded-md h-xs" data-aos="fade">
      <img className='w-full h-56 rounded-md border-2' src={estate.image} alt={estate.estate_title} />

      <h2 className='font-bold py-4 text-center'>{estate.estate_title}</h2>

      <p className='text-center text-wrap'>{estate.description}</p>
      <div className='grid grid-cols-3 grid-rows-3 gap-1 py-2'>
        <h3 className='col-span-2'><span className='font-semibold'></span>{estate.segment_name}</h3>
        <p className='text-right col-span-1'><span className='font-semibold '>Status:</span> {estate.status}</p>

        <p className='col-span-2 text-indigo-700'>{estate.price}</p>
        <p className='text-right'>{estate.area}</p>
        <p className='col-span-2'>{estate.location}</p>
      </div>
      <div className='grid grid-cols-2 grid-rows-2 gap-2 pb-2'>

      </div>

      <ul className='flex flex-wrap gap-2 pt-2 border-t-2 h-16'>
        <span className='font-semibold'>Facilities:</span>
        {estate.facilities.slice(0, 2).map((facility, index) => (
          <p key={index}>{facility},</p>
        ))}
        <p>...</p>
      </ul>
      <Link className='w-full' key={estate.id} to={`/property_details/${estate.id}`}>
      <div className='btn w-full rounded-md bg-indigo-300 mt-2'>View Property</div></Link>
    </div>
  );
}
export default Card;



