import React, { useContext, useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../FirebaseProbider/FirbaseProvider'
export default function () {
 
 const { logOut, usern } = useContext(AuthContext);
  return (
    <>
      <div className="navbar bg-base-100 px-4 lg:px-0 py-6 flex justify-between">
        <div className="md:navbar-start">
          <a href='/' className="text-sm md:text-xl inter text-indigo-700 font-bold">Luxury You</a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><NavLink to='/' className={({ isActive }) => (isActive ? "link-active" : "link")}>Home</NavLink></li>
            <li><NavLink to='/contact' className={({ isActive }) => (isActive ? "link-active" : "link")}>Contact</NavLink></li>
            <li><NavLink to='/about' className={({ isActive }) => (isActive ? "link-active" : "link")}>About</NavLink></li>
            {usern && <li><NavLink to='/clients' className={({ isActive }) => (isActive ? "link-active" : "link")}>Clients</NavLink></li>}
          </ul>
        </div>
        { usern ? (
          <div className="md:navbar-end">
            <ul className="menu menu-horizontal px-1 md:text-sm text-xs">
              <li><NavLink to='/update' className={({ isActive }) => (isActive ? "link-active" : "link")}>Update Profile</NavLink></li>
            </ul>
            <div className="avatar">
              <NavLink to='/user' className="w-8 rounded">
                <img src={usern.photoURL} alt="user" title={usern.displayName} />
              </NavLink>
            </div>
            <NavLink to='' onClick={logOut} className="text-sm md:text-base px-4 py-2 font-bold btn-ghost text-indigo-700 rounded-md">Log Out</NavLink>
          </div>
        ) : (
          <div className="navbar-end">

            <NavLink to='/login' className="text-sm md:text-base px-4 py-2 font-bold btn-ghost text-indigo-700 rounded-md ">Log In</NavLink>
          </div>
        )}
      </div>
    </>
  )
}
