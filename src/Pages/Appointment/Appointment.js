import React, { useEffect, useState } from 'react';
import Footer from '../Shared/Footer';
import AppointmentBanner from './AppointmentBanner';
import AvailableAppointment from './AvailableAppointment';

const Appointment = () => {
    const [date, setDate] = useState(new Date());
    const [passingDate, setPassingDate] = useState(new Date());
    useEffect(() => {
        if (date) {
            setPassingDate(date)
        }
    }, [date])
    return (
        <div>
            <AppointmentBanner date={date} setDate={setDate}></AppointmentBanner>
            <AvailableAppointment date={passingDate}></AvailableAppointment>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;