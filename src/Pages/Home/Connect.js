import React from 'react';
import appointment from '../../assets/images/appointment.png'


const Connect = () => {
    return (
        <section style={{
            background: `url(${appointment})`,
            backgroundSize: 'cover',
            backgroundSize: '100% 100%'
        }} className="w-full">
            <div className='flex flex-col justify-center items-center pt-14  mx-12'>
                <h2 className="text-secondary font-bold text-lg">Connect Us</h2>
                <h4 className="text-white text-xl sm:text-3xl">Stay connected with us</h4>
                <form className='md:w-2/3 lg:w-1/3 mb-16'>
                    <input type="email" name="email" id="" placeholder='Email Address' className='rounded pl-2 my-2 w-full h-8' />
                    <input type="text" name="subject" id="" placeholder='Subject' className='rounded pl-2 my-2  w-full h-8' />
                    <textarea name="" id="" placeholder='Your message' className='rounded pl-2 my-2  w-full h-20'></textarea>
                    <div className='w-full'>
                        <button type="submit" className='px-7 block my-5 btn btn-primary text-bold text-white bg-gradient-to-r from-secondary to-primary mx-auto'>Submit</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Connect;