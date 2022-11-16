import React from 'react';
import { format } from 'date-fns';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';


const BookingModal = ({ treatment, date, setTreatment, refetch }) => {
    const [user] = useAuthState(auth);
    const { _id, name, slots } = treatment;
    const formattedDate = format(date, 'PP');
    const handleBooking = event => {
        event.preventDefault();
        const slot = event.target.slot.value;
        // console.log(_id, name, slot);
        const booking = {
            treatmentId: _id,
            treatment: name,
            date: formattedDate,
            slot,
            patientName: user.displayName,
            patient: user.email,
            phon: event.target.phon.value
        }

        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(booking),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.success) {
                    toast(`Appointment is set,${formattedDate} at ${slot}`)
                }
                else {
                    toast.error(`Appointment is already set in ${formattedDate} at ${data.booking.slot}`)
                }
                // to close dhe modal
                refetch()
                setTreatment(null)
            })

    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle sm:w-full">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-circle btn-sm btn-accent text-white absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-primary">Booking for {name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-items-center mt-4'>
                        <input type="text" disabled value={format(date, 'PP')} className="input input-bordered w-full max-w-xs" />
                        <select name='slot' className="select select-bordered w-full max-w-xs">
                            {slots.map((slot, index) => <option key={index}>{slot}</option>)}
                        </select>
                        <input name='name' type="text" disabled value={user.displayName} className="input input-bordered w-full max-w-xs" />
                        <input name='email' type="email" disabled value={user.email} className="input input-bordered w-full max-w-xs" />
                        <input name='phon' required placeholder="Your Number" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="Submit" className='btn btn-secondary text-white w-full max-w-xs'></input>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;