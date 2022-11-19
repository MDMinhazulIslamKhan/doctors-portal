import { signOut } from 'firebase/auth';
import React from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
import Loading from './Shared/Loading';
import UserRow from './UserRow';

const Users = () => {
    const navigate = useNavigate();
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/user', {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`,
        },
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h1 className='text-2xl'>All users{users?.length}</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users?.map(user => <UserRow
                            key={user._id}
                            user={user}
                            refetch={refetch}
                        ></UserRow>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;