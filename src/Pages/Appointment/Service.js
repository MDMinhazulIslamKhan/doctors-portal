import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, slots } = service;
    return (
        <div className="card text-neutral-content shadow-md">
            <div className="card-body items-center text-center">
                <h2 className="card-title text-secondary">{name}</h2>
                <p className='text-black'>{slots.length ?
                    <span>{slots[0]}</span> :
                    <span className='text-red-500'>Try another date</span>}</p>
                <p className='text-black uppercase'>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                <div>
                    <label className="btn btn-sm btn-primary text-bold mx-auto text-white bg-gradient-to-r from-secondary to-primary"
                        htmlFor="booking-modal"
                        disabled={slots.length === 0}
                        onClick={() => setTreatment(service)}
                    >Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default Service;