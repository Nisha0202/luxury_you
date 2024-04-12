import React, { useState, useRef, useContext } from 'react';
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
import { FaGoogle, FaFacebookF } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaRegUser } from "react-icons/fa";
import { MdOutlinePhotoLibrary } from "react-icons/md";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import auth from '../firebase/firebase.config';
import {AuthContext} from '../FirebaseProbider/FirbaseProvider'

export default function SignUp() {

    const {createUser} = useContext(AuthContext);

console.log(createUser);

    const [formerror, setFormerror] = useState('');
    const [showPassword, setShowPassword] = useState(false);



    

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const pass = e.target.pass.value;
        const usern = e.target.username.value;
        console.log(email, pass, usern);
        createUserWithEmailAndPassword(auth, email, pass)
        .then(result => {
            console.log('User created successfully');
        })
        .catch(error => {
            console.error('Error creating user:', error.message);
            setFormerror(error.message);
        });

        // Check password conditions
        const hasUppercase = pass.toLowerCase() !== pass;
        const hasLowercase = pass.toUpperCase() !== pass;
        const hasMinLength = pass.length >= 6;

        if (!hasUppercase || !hasLowercase || !hasMinLength) {
            setFormerror('Password must have an uppercase letter, a lowercase letter, and be at least 6 characters long');
            return;
        }

        console.log(email, pass);
        // Show a toast or sweet alert here
    }

    return (
        <div className='flex flex-col items-center gap-8 py-16'>
            <form action="" onSubmit={handleSubmit} className='max-w-96 mx-auto flex flex-col items-center gap-6 inter'>
            
                <label className="input input-bordered flex items-center gap-2 text-gray-600 w-full">
                    <FaRegUser />
                    <input type="text" className="grow" placeholder="Name" name='username' />
                </label>
                <label className="input input-bordered flex items-center gap-2 text-gray-600 w-full">
                    <MdOutlinePhotoLibrary/>
                    <input type="text" className="grow" placeholder="Photo URL" name='photo' />
                </label>
                <label className="input input-bordered flex items-center gap-2 text-gray-600 w-full">
                    <AiOutlineMail />
                    <input type="text" className="grow" placeholder="Email" name='email' />
                </label>
                <label className="input input-bordered flex items-center gap-2 w-full">
                    {showPassword ? <IoEyeOutline onClick={() => setShowPassword(false)} /> : <IoEyeOffOutline onClick={() => setShowPassword(true)} />}
                    <input type={showPassword ? "text" : "password"} className="grow" name='pass' placeholder='password' />
                </label>
                <button type='submit' className="btn w-full rounded-md text-white bg-indigo-700 font-bold">Register</button>
                {formerror && <p className='text-xs font-bold max-w-xs text-wrap text-red-600'> {formerror}!</p>}
            </form>

            <div className='flex flex-col md:flex-row mx-auto gap-4'>
                <button className="btn rounded-md bg-blue-300 flex items-center gap-2">
                    <FaFacebookF /> Join with Facebook
                </button>
                <button className="btn rounded-md bg-red-300  flex items-center gap-2">
                    <FaGoogle /> Join with Google
                </button>
            </div>
            <div>New to join? <Link to={'/login'} className='text-indigo-700'>Log In</Link></div>
        </div>
    )
}

