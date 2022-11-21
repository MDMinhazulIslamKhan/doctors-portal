import React from 'react';
import imgDoctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'
import { Link } from 'react-router-dom';
const MakeAppointment = () => {
    return (
        <section style={{
            background: `url(${appointment})`,
            backgroundSize: 'cover',
            backgroundSize: '100% 100%'
        }} className=' mt-32 flex justify-center items-center'>
            <div className='flex-1  hidden md:block'>
                <img src={imgDoctor} className=' mt-[-200px]' alt="" />
            </div>
            <div className='flex-1 mx-10 my-10'>
                <h3 className='text-xl text-primary font-bold'>Appointment</h3>
                <h2 className='text-3xl text-white'>Make an appointment Today</h2>
                <p className=' text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae necessitatibus dolor vero atque quo illum iusto facere, quod odio eaque ipsam veritatis eligendi nam impedit soluta a deleniti. Ipsa, quae!  </p>
                <Link to='/appointment' className=" my-5 btn btn-primary text-bold text-white bg-gradient-to-r from-secondary to-primary">Get Started</Link>

            </div>
        </section>
    );
};

export default MakeAppointment;