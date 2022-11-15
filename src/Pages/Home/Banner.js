import React from 'react';
import chair from '../../assets/images/chair.png';
import './Banner.css'

const Banner = () => {
    return (
        <div>
            <div className='hero min-h-screen px-12 w-full'>
                <div className="hero-content flex-col lg:flex-row-reverse bg">
                    <img src={chair} className="max-w-sm rounded-lg shadow-2xl w-full" />
                    <div>
                        <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                        <p className="py-6">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius iure nostrum suscipit ab vero non nemo ex inventore expedita corporis officia minima similique mollitia eaque deserunt quidem, eveniet perspiciatis culpa?</p>
                        <button className="btn btn-primary text-bold text-white bg-gradient-to-r from-secondary to-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;