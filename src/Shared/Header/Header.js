import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <div>

            <div className="navbar bg-base-300 shadow-xl">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-6 shadow bg-base-100 rounded-box w-52">
                            <Link className='mb-3' to='/courses'>Courses</Link>
                            <Link className='mb-3' to='/blogs'>Blogs</Link>
                            <Link to='/frequently-asked-questions' className='mb-3'>FAQ's </Link>
                            <div className="form-control">
                                <label className="label cursor-pointer">
                                    <span className="label-text">Mode</span>
                                    <input type="checkbox" className="toggle" />
                                </label>
                            </div>
                            <Link className="btn btn-outline btn-success mb-3" to='/login'>Sign In</Link>
                            <Link className="btn btn-outline btn-accent" to='/register'>Register</Link>
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-3xl"><img src="Code for Chill-1.png" className='w-10' alt="" />Code for Chill</Link>
                </div>
                <div className="navbar-center hidden lg:grid grid-cols-3">
                    <Link className='mx-auto btn btn-ghost normal-case  text-xl' to='/courses'>Courses</Link>
                    <Link className='mx-auto btn btn-ghost normal-case  text-xl' to='/blogs'>Blogs</Link>
                    <Link className='mx-auto btn btn-ghost normal-case  text-xl' to='/frequently-asked-questions' >FAQ's</Link>
                </div>
                <div className="navbar-end  hidden lg:flex">
                    <div className="form-control">
                        <label className="label cursor-pointer">
                            <span className="label-text">Mode</span>
                            <input type="checkbox" className="toggle" />
                        </label>
                    </div>
                    
                    <Link className="btn  btn-outline mr-2" to='/login'>Sign In</Link>
                    <Link className="btn  btn-outline" to='/register'>Join</Link>
                </div>
            </div>

        </div>
    );
};

export default Header;