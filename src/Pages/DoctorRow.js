import React from 'react';
import { toast } from 'react-toastify';

const DoctorRow = ({ doctor, index, refetch }) => {
    const { name, specialty, img, email } = doctor;
    const handleDelete = email => {
        fetch(`https://stormy-shelf-21707.herokuapp.com/doctor/${email}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    toast.success('Doctor is successfully removed')
                    refetch()
                }
            })
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td><div className="avatar">
                <div className="w-12 rounded">
                    <img src={img} alt="Tailwind-CSS-Avatar-component" />
                </div>
            </div></td>
            <td>{name}</td>
            <td>{specialty}</td>
            <td><button onClick={() => handleDelete(email)} className="btn btn-xs">Delete</button>
            </td>
        </tr>
    );
};

export default DoctorRow;