import React, { useState, useRef, useContext } from 'react';
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
import { FaGoogle, FaFacebookF } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaRegUser } from "react-icons/fa";
import { MdOutlinePhotoLibrary } from "react-icons/md";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import auth from '../firebase/firebase.config';
import { AuthContext } from '../FirebaseProbider/FirbaseProvider'
import { useForm} from "react-hook-form"
import Swal from 'sweetalert2';

export default function SignUp() {

    const { createUser } = useContext(AuthContext);
    const [formerror, setFormerror] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm();
   
    console.log(watch("username")) // watch input value by passing the name of it
    const onSubmit = (data) => {
        const { email, pass, username, image} = data;
         createUser(email, pass);
        // Check password conditions
        const hasUppercase = pass.toLowerCase() !== pass;
        const hasLowercase = pass.toUpperCase() !== pass;
        const hasMinLength = pass.length >= 6;

        if (!hasUppercase || !hasLowercase || !hasMinLength) {
            setFormerror('Password must have an uppercase letter, a lowercase letter, and be at least 6 characters long');
            return;
        }

        createUserWithEmailAndPassword(auth, email, pass)
            .then(result => {
                console.log('User created successfully');
                Swal.fire({
                    icon: 'success',
                    title: 'User created successfully',
                    showConfirmButton: false,
                    timer: 1500
                });
                reset();
                setFormerror(null);
            })
            .catch(error => {
                console.error('Error creating user:', error.message);
                setFormerror(error.message);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: error.message,
                });
            });
    };

    return (
        <div className='flex flex-col items-center gap-8 py-16 px-2'>
            <form onSubmit={handleSubmit(onSubmit)} className='max-w-96 mx-auto flex flex-col items-center gap-6 inter'>
                <label className="input input-bordered flex items-center gap-2 text-gray-600 w-full">
                    <FaRegUser />
                    <input type="text" className="grow" placeholder="Name" name='username'
                     {...register("username", { required: true })} />
                      {errors.username && <span className='text-xs text-red-500'>required field</span>}
                </label>
                <label className="input input-bordered flex items-center gap-2 text-gray-600 w-full">
                    <MdOutlinePhotoLibrary />
                    <input type="text" className="grow" placeholder="Photo URL" name='photo' 
                        {...register("image", { required: false })}/>
                </label>
                <label className="input input-bordered flex items-center gap-2 text-gray-600 w-full">
                    <AiOutlineMail />
                    <input type="text" className="grow" placeholder="Email" name='email'
                        {...register("email", { required: true })} />
                         {errors.email && <span className='text-xs text-red-500'>required field</span>}
                </label>
                <label className="input input-bordered flex items-center gap-2 w-full">
                    {showPassword ? <IoEyeOutline onClick={() => setShowPassword(false)} /> : <IoEyeOffOutline onClick={() => setShowPassword(true)} />}
                    <input type={showPassword ? "text" : "password"} className="grow" name='pass' placeholder='password'
                    {...register("pass", { required: true })}  />
                     {errors.pass && <span className='text-xs text-red-500'>required field</span>}
                </label>
                <button type='submit' className="btn w-full rounded-md text-white bg-indigo-700 font-bold">Register</button>
                {formerror && <p className='text-xs font-bold max-w-xs text-wrap text-red-600'> {formerror}!</p>}
            </form>
            <div>Already joined? <Link to={'/login'} className='text-indigo-700'>Log In</Link></div>
        </div>
    )
}

