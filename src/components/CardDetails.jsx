import React from 'react'
import { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom'
export default function CardDetails() {
    const estates = useLoaderData();
    const { id } = useParams();
    const estate = estates.find(estate => estate.id === id);

    return (
        <div className='py-6 border-2 rounded-md px-2 lg:px-6'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 h-full'>
                <div className='lg:w-full w-full lg:h-[610px] h-80 md:w-72 mx-auto lg:mx-0 rounded-2xl' >
                    <img src={estate.image} alt="" className='w-full h-full rounded-md border-[2px] border-base-400 object-fill' />
                </div>

                {/* details */}
                <div className='w-full'>
                    <div className="flex flex-col w-full gap-2">
                        <h1 className=' playful text-xl font-bold text-black'>{estate.estate_title}</h1>
                        <div className='flex flex-col gap-4 intent'>
                            <p className='text-gray-600 text-base font-semibold '>{estate.segment_name}</p>
                            <p className='text-gray-600 text-base font-semibold  border-y-2 py-2'>{estate.description}</p>
                            <p className=' font-normal lg:text-sm/8 text-xs/9'><span className='font-bold lexend lg:text-sm/8 text-xs'>Price:</span> {estate.price}</p>
                            <div className="px-0 pb-6 border-b-2 *:font-bold flex flex-wrap gap-4">
                                <span className='text-sm/8 inter text-sm:'>Facilities</span>
                                {estate.facilities.map((facility, index) => (
                                    <span key={index} className="bg-gray-200 rounded-md px-3 py-2 text-sm text-indigo-700">#{facility}</span>
                                ))}
                            </div>

                            <table className='max-w-60 text-xs h-32'>
                                <tbody className='text-left'>
                                    <tr >
                                        <td>Status:</td>
                                        <th>{estate.status}</th>
                                    </tr>
                                    <tr>
                                        <td>Area:</td>
                                        <th>{estate.area}</th>
                                    </tr>
                                    <tr>
                                        <td>Location:</td>
                                        <th>{estate.location}</th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

