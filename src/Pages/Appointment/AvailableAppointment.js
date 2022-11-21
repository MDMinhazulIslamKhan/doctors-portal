import { format } from 'date-fns';
import { useQuery } from 'react-query'

import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import Service from './Service';
import Loading from '../Shared/Loading';

const AvailableAppointment = ({ date }) => {
    const [treatment, setTreatment] = useState(null);
    const formattedDate = format(date, 'PP');
    const { data: services, isLoading, refetch } = useQuery(['available', formattedDate], () => fetch(`https://stormy-shelf-21707.herokuapp.com/available?date=${formattedDate}`)
        .then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h1 className='text-secondary text-center text-xl font-bold'>Available Appointment on {format(date, 'PP')}</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mx-12  my-28'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    ></Service>)
                }
            </div>
            {treatment && <BookingModal date={date}
                treatment={treatment}
                refetch={refetch}
                setTreatment={setTreatment}
            ></BookingModal>}
        </div >
    );
};

export default AvailableAppointment;