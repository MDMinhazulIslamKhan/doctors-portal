import React from 'react';
import { format } from 'date-fns';

const BookingModal = ({ treatment, date, setTreatment }) => {
    const { _id, name, slots } = treatment;
    const handleBooking = event => {
        event.preventDefault();
        const slot = event.target.slot.value;
        console.log(_id, name, slot);
        setTreatment(null)
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle sm:w-full">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-circle btn-sm btn-secondary text-white absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-primary">Booking for {name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-items-center mt-4'>
                        <input type="text" disabled value={format(date, 'PP')} className="input input-bordered w-full max-w-xs" />
                        <select name='slot' className="select select-bordered w-full max-w-xs">
                            {slots.map(slot => <option>{slot}</option>)}
                        </select>
                        <input name='name' type="text" placeholder="Your Name" className="input input-bordered w-full max-w-xs" />
                        <input name='email' type="email" placeholder="Your Email" className="input input-bordered w-full max-w-xs" />
                        <input name='phon' required pattern='/([+]?\d{1,2}[.-\s]?)?(\d{3}[.-]?){2}\d{4}/g' placeholder="Your Number" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="Submit" className='btn btn-secondary text-white w-full max-w-xs'></input>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;