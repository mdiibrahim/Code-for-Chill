import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { BsGithub } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Register = () => {
    const { createUser, emailVerify } = useContext(AuthContext);
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const picURL = form.picURL.value;
        const fullName = form.fullName.value;
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                emailVerify()
                    .then(() => { })
                    .catch(error => console.error(error));
                    toast.success(
                        "Please sir/maam, Go to your given email. If it is not found in inbox then check it out on spam. Then verify your mail. After that, you can be registered user of our website. Thank you for your registration!!!",
                        {
                          duration: 6000,
                        }
                      );
            })
            .catch(error => console.error(error));

    }


    return (
        <div>
            <div className="hero mx-auto my-20 w-9/12 bg-zinc-500">
                <div className="hero-content flex-col-reverse lg:flex-row-reverse lg:justify-between">
                    <form onSubmit={handleSubmit} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Full Name</span>
                                </label>
                                <input type="text" placeholder="Your name" className="input input-bordered" name='fullName' required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="Your email" className="input input-bordered" name='email' required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" className="input input-bordered" name='password' required />
                                <label className="label">
                                    <small>Have an account? <Link to='/register' className='link link-primary'>Sign In</Link> </small>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo</span>
                                </label>
                                <input type="text" placeholder="Your profile picture URL" className="input input-bordered" name='picURL' required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn  btn-outline">Sign up</button>
                            </div>
                            <div className="form-control mt-1">
                                <button className="btn  btn-outline btn-success"><FcGoogle className='text-2xl mr-2' /> Sign Up with Google</button>
                            </div>
                            <div className="form-control mt-1">
                                <button className="btn btn-outline"><BsGithub className='text-2xl mr-2' />Sign Up with Github</button>
                            </div>
                        </div>
                    </form>
                    <div className="text-center lg:text-left">
                        <h1 className="text-xl font-medium ">Sign Up <br /><strong className='text-3xl font-bold'>Code for Chill</strong></h1>
                        <p className="py-6">Learning the code with feel and chill</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Register;