import React from 'react';
import treatment from '../../assets/images/treatment.png'
const Treatment = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 md:mx-36 mx-12 md:my-0 my-28'>
            <img src={treatment} className='md:h-3/5 my-auto mx-auto rounded-lg' alt="" srcSet="" />
            <div className='flex flex-col justify-center'>
                <h1 className='text-4xl font-bold text-accent'>Exceptional Dental Care, on Your Terms</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores soluta assumenda dignissimos repellendus quas laborum incidunt perferendis ad voluptates, quaerat asperiores saepe sed. Voluptatum animi molestias hic voluptatibus aliquam sapiente!</p>
                <div>
                    <button className=" my-5 btn btn-primary text-bold text-white bg-gradient-to-r from-secondary to-primary">Get Started</button>

                </div>
            </div>
        </div>
    );
};

export default Treatment;