import React, { useState, useRef } from 'react';
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
import { FaGoogle, FaFacebookF } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaRegUser } from "react-icons/fa";
import { GoPlus } from "react-icons/go";

export default function SignUp() {
    const [formerror, setFormerror] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const fileInputRef = useRef();


    const handleFileInputClick = () => {
        fileInputRef.current.click();
    };
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        console.log(file);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const pass = e.target.pass.value;

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
                <figure className="w-20 h-20 rounded-full bg-white relative">
                    <div className="w-20 h-20 rounded-full border-2 border-gray-300 flex items-center justify-center cursor-pointer" onClick={handleFileInputClick}>
                        <GoPlus size={24} />
                        <input ref={fileInputRef} type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
                    </div>
                </figure>
                <label className="input input-bordered flex items-center gap-2 text-gray-600 w-full">
                    <FaRegUser />
                    <input type="text" className="grow" placeholder="Name" name='username' />
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

