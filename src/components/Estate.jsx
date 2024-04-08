import React, { useEffect, useState } from 'react'
import Card from './Card'


export default function Estate() {

    const [data, setData] = useState([]);

    useEffect(() => {
      fetch('estate.json')
        .then(response => response.json())
        .then(data => setData(data))
        .catch(error => console.error('Error:', error));
    }, []);
  
  return (
    <div className='flex justify-center items-center'>
         <div className='flex flex-wrap flex-col gap-4 md:flex-row md:justify-between md:gap-12'>

{data.map((estate, index) => (
        <Card key={index} estate={estate} />
      ))}
    </div>
    </div>
   
  )
}
