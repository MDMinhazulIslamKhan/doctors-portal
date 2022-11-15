import React from 'react';

const Review = ({ review }) => {
    return (
        <div className="card max-w-lg bg-base-100 shadow-xl">
            <div className="card-body">
                <p>{review.reviews}</p>
                <div className='flex mt-2 items-center'>
                    <div className="avatar">
                        <div className="w-12  rounded-full ring ring-primary ring-offset-base-100 mr-5">
                            <img src={review.img} alt='' />
                        </div>
                    </div>
                    <div>
                        <h3 className='font-semibold'>{review.name}</h3>
                        <h3 className=''>{review.city}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;