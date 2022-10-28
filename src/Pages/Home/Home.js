import React from 'react';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-cover" style={{ backgroundImage: `url("background.jpg")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-6xl font-bold">Hey Coders!!!</h1>
                        <p className="mb-5">Wanna chilling with coding? Then join us. We are committed to learn the programming in a efficient manner, effective way with enjoy.</p>
                        <button className="btn btn-outline"><Link to='/courses'>Join for free </Link><BsFillArrowRightCircleFill className='text-lg ml-3'/></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;