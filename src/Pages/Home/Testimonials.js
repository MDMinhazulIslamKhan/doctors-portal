import React from 'react';
import quote from '../../assets/icons/quote.svg'
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import Review from './Review';
const Testimonials = () => {
    const reviews = [
        {
            _id: 1,
            name: 'Winson Herry',
            img: people1,
            reviews: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, provident.',
            city: 'Dhaka'
        },
        {
            _id: 2,
            name: 'Winson Herry',
            img: people2,
            reviews: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, provident.',
            city: 'Dhaka'
        },
        {
            _id: 3,
            name: 'Winson Herry',
            img: people3,
            reviews: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, provident.',
            city: 'Dhaka'
        }
    ]
    return (
        <section className='my-28 mx-12'>
            <div className='flex justify-between'>
                <div>
                    <h1 className='text-xl text-primary font-bold'>Testimonials</h1>
                    <h2 className="text-3xl">What Our Patients Says</h2>
                </div>
                <img src={quote} className='w-24 lg:w-48' />
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-3 md:mx-10 my-14'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonials;