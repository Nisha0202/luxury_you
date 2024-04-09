import React, { useState } from 'react';
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
import { FaGoogle, FaFacebookF } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function SignUp() {
    const [formerror, setFormerror] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const pass = e.target.pass.value;
        console.log(email, pass);
    }

    return (
        <div className='flex flex-col items-center gap-8 py-16'>
            <form action="" onSubmit={handleSubmit} className='max-w-96 mx-auto flex flex-col gap-6  inter'>
                <label className="input input-bordered flex items-center gap-2 text-gray-600">
                    <AiOutlineMail />
                    <input type="text" className="grow" placeholder="Email" name='email' />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                    {showPassword ? <IoEyeOutline onClick={() => setShowPassword(false)} /> : <IoEyeOffOutline onClick={() => setShowPassword(true)} />}
                    <input type={showPassword ? "text" : "password"} className="grow" name='pass' placeholder='password' />
                </label>
                <button type='submit' className="btn rounded-md text-white bg-indigo-700 font-bold">Log In</button>

                {formerror && <p className='text-red-800'> {formerror}</p>}
            </form>
            <div className='flex flex-col md:flex-row mx-auto gap-4'>
                <button className="btn rounded-md bg-blue-300 flex items-center gap-2">
                    <FaFacebookF /> Log In with Facebook
                </button>
                <button className="btn rounded-md bg-red-300  flex items-center gap-2">
                    <FaGoogle /> Log In with Google
                </button>
            </div>
            <div>New to join? <Link to={'/signup'} className='text-indigo-700'>Register</Link></div>
        </div>
    )
}
