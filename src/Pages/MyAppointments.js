import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
import { signOut } from 'firebase/auth';

const MyAppointments = () => {
    const [appointment, setAppointment] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    useEffect(() => {
        fetch(`http://localhost:5000/booking?patient=${user.email}`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`,
            },
        })
            .then(res => {
                console.log('response', res);
                if (res.status === 401 || res.status === 403) {
                    signOut(auth);
                    localStorage.removeItem('accessToken');
                    navigate('/');
                }
                return res.json();
            })
            .then(data => {

                setAppointment(data)
            })
    }, [])
    return (
        <div>
            <h1 className='font-bold text-2xl'>My Appointment</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>DATE</th>
                            <th>TIME</th>
                            <th>TREATMENT</th>
                        </tr>
                    </thead>
                    <tbody>
                        {appointment.map((a, index) => <tr key={index}>
                            <th>{index + 1}</th>
                            <td>{a.patientName}</td>
                            <td>{a.date}</td>
                            <td>{a.slot}</td>
                            <td>{a.treatment}</td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointments;