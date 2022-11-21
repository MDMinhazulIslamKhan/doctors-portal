import { signOut } from 'firebase/auth';
import React from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
import DoctorRow from './DoctorRow';
import Loading from './Shared/Loading';

const ManageDoctors = () => {
    const navigate = useNavigate();

    const { data: doctors, isLoading, refetch } = useQuery('doctors', () => fetch('https://stormy-shelf-21707.herokuapp.com/doctor', {
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => {
        if (res.status === 401 || res.status === 403) {
            signOut(auth);
            localStorage.removeItem('accessToken');
            navigate('/');
        }
        return res.json();
    }))

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h1 className='text-3xl'>Manage Doctors{doctors.length}</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Specialty</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {doctors.map((doctor, index) => <DoctorRow
                            key={doctor._id}
                            doctor={doctor}
                            index={index}
                            refetch={refetch}
                        ></DoctorRow>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageDoctors;