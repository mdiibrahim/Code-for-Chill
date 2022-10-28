import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { BsGithub } from 'react-icons/bs';
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';
const Login = () => {
    const { logIn, setToaster, registerWithGoogle, registerWithGithub,setUser, profileUpdate, emailVerify} = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        logIn(email, password)
            .then(result => {
                const user = result.user;
                form.reset();
                if (user.emailVerified) {
                    toast('Good Job!', {
                        icon: '👏',
                    });
                    setUser(user);
                    navigate(from, { replace: true });
                }
                else {
                    toast.error("Please sir/maam, go to your registered email. If it is not found in inbox then check it out on spam. Then verify your mail. After that you can log in our website. Thank you!!!");
                }
            })
            .catch(error => console.log(error))
            .finally(() => setToaster(false));

    }
    
    
    const handleRegisterWithGoogle = () => {
        registerWithGoogle()
            .then(result => {
                
                const user = result.user;
                if (user.uid) {
                    toast('Good Job!', {
                        icon: '👏',
                    });
                    setUser(user);
                    navigate(from, { replace: true });
                }
                else {
                    toast.error("Please sir/maam,go to your register or email inbox. If it is not found in inbox then check it out on spam. Then verify your mail. After that you can log in our website. Thank you!!!");
                }
                

            })
            .catch(error => console.log(error))
            .finally(() => setToaster(false));
    }
    const handleRegisterWithGithub = () => {
        registerWithGithub()
            .then(result => {
        
                const user = result.user;
                if (user.uid) {
                    toast('Good Job!', {
                        icon: '👏',
                    });
                    setUser(user);
                    navigate(from, { replace: true });
                }
                else {
                    toast.error("Please sir/maam, go to your register or email inbox. If it is not found in inbox then check it out on spam. Then verify your mail. After that you can log in our website. Thank you!!!");
                }

            })
            .catch(error => console.log(error))
            .finally(() => setToaster(false));
    }
    return (
        <div>
            <div className="hero mx-auto my-20 w-9/12 bg-zinc-500">
                <div className="hero-content flex-col-reverse  lg:flex-row-reverse lg:justify-between">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" placeholder="email" className="input input-bordered" name='email' required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="text" placeholder="password" className="input input-bordered" name='password' required />
                                    <label className="label">
                                        <small>Not registered? <Link to='/register' className="link link-accent">Register now</Link> </small>
                                    </label>



                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn  btn-outline">Sign In</button>
                                </div>
                            </form>
                            <div className="form-control mt-1">
                                <button onClick={handleRegisterWithGoogle} className="btn  btn-outline btn-success"><FcGoogle className='text-2xl mr-2' /> Sign In with Google</button>
                            </div>
                            <div className="form-control mt-1">
                                <button onClick={handleRegisterWithGithub} className="btn btn-outline"><BsGithub className='text-2xl mr-2' />Sign In with Github</button>
                            </div>
                        </div>
                    </div>
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