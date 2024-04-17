import React, { useEffect, useState, useContext } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from 'react-router-dom';
import { IoLocationOutline } from "react-icons/io5";
import { AuthContext } from '../FirebaseProbider/FirbaseProvider';

 import { useNavigate } from 'react-router-dom';

const Card = ({ estate }) => {
  useEffect(() => {
    AOS.init();
  }, []);

 

// Inside your component
const navigate = useNavigate();

  const {usern} = useContext(AuthContext);

  const handleViewProperty = () => {
    if (usern) {
      // If usern exists, redirect to /property_details/id
      // navigate('/property_details/${estate.id}');
      navigate(`/property_details/${estate.id}`);

    } else {
      // If usern does not exist, redirect to /login
      navigate('/login');
    }
  };


  
  return (
    <div >
       
      <div className="card w-80 bg-base-100 md:w-80 border-2 p-4 rounded-md h-xs gap-4" data-aos="fade">
        <div className='indicator w-full h-56 '>
          <span className="indicator-item badge rounded-full right-3 p-3 bg-indigo-300 ">{estate.status}</span>
               <img className='w-full h-56 rounded-md border-2' src={estate.image} alt={estate.estate_title} />
        </div>
 

      <h2 className='font-bold text-center'>{estate.estate_title}</h2>

      <p className='text-center text-wrap'>{estate.description}</p>
      <div className='grid grid-cols-5 grid-rows-3 gap-3 py-2'>
       
        <p className='col-span-3 text-indigo-700'>{estate.price}</p>
        <p className='col-span-2 text-right'>{estate.area}</p>    
        <p className='col-span-3 flex items-center'><IoLocationOutline/> {estate.location}</p>
         <h3 className='col-span-2 text-right font-semibold'>{estate.segment_name}</h3>
    
      </div>

      <ul className='flex flex-wrap gap-2 pt-2 border-t-2 h-16'>
        <span className='font-semibold'>Facilities:</span>
        {estate.facilities.slice(0, 2).map((facility, index) => (
          <p key={index}>{facility},</p>
        ))}
        <p>...</p>
      </ul>
      <div className='btn w-full rounded-md bg-indigo-300 mt-2' onClick={handleViewProperty}>View Property</div>

    </div>
    </div>

    
  );
}
export default Card;



