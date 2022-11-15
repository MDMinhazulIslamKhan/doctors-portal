import React from 'react';
import Service from './Service';
import imgSer1 from '../../assets/images/fluoride.png'
import imgSer2 from '../../assets/images/cavity.png'
import imgSer3 from '../../assets/images/whitening.png'
const Services = () => {
    return (
        <div>
            <div className='text-center my-28'>
                <h1 className='text-primary text-xl uppercase font-bold'>Our Services</h1>
                <p className='text-4xl'>Service We Provide</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 px-12 mt-5 gap-7'>
                <Service img={imgSer1} heading={'Fluoride Treatment'}></Service>
                <Service img={imgSer2} heading={'Cavity Filling'}></Service>
                <Service img={imgSer3} heading={'Teeth Whitening'}></Service>
            </div>
        </div>
    );
};

export default Services;