import React from 'react'
import { NavLink } from 'react-router-dom'

export default function () {

    return (

        <>
<div className="navbar bg-base-100 px-4 lg:px-0 py-6">
  <div className="navbar-start">
    <a href='/' className="text-xl inter text-indigo-700 font-bold">Luxury You</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><NavLink to='/'  className={({ isActive }) => (isActive ? "link-active" : "link")}>Home</NavLink></li>
   
      <li><NavLink to = '' className={({ isActive }) => (isActive ? "link-active" : "link")}>Item 3</NavLink></li>
    </ul>
  </div>
  <div className="navbar-end">
    <NavLink to='/login' className=" px-4 py-2 font-bold bg-indigo-300 rounded-md">Login</NavLink>
  </div>
</div>
        
        </>



    )
}
