import React from 'react';

const Service = ({ img, heading }) => {
    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{heading}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, itaque.</p>
            </div>
        </div>
    );
};

export default Service;