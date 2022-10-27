import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { BsGithub } from 'react-icons/bs';
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
const Login = () => {
    const {logIn} = useContext(AuthContext)
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        logIn(email, password)
            .then(result => {
                console.log(result.user);
            })
        .catch(error=>console.error(error))
        
    }
    return (
        <div>
            <div className="hero mx-auto my-20 w-9/12 bg-zinc-500">
                <div className="hero-content flex-col-reverse  lg:flex-row-reverse lg:justify-between">
                    <form onSubmit={handleSubmit} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" name='email' />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" className="input input-bordered" name='password' />
                                <label className="label">
                                    <small>Not registered? <Link to='/register' className='link link-primary'>Register now</Link> </small>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn  btn-outline">Sign In</button>
                            </div>
                            <div className="form-control mt-1">
                                <button className="btn  btn-outline btn-success"><FcGoogle className='text-2xl mr-2'/> Sign In with Google</button>
                            </div>
                            <div className="form-control mt-1">
                                <button className="btn btn-outline"><BsGithub className='text-2xl mr-2'/>Sign In with Github</button>
                            </div>
                        </div>
                    </form>
                    <div className="text-center lg:text-left">
                        <h1 className="text-xl font-medium ">Sign in <br /><strong className='text-3xl font-bold'>Code for Chill</strong></h1>
                        <p className="py-6">Learning the code with feel and chill</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;