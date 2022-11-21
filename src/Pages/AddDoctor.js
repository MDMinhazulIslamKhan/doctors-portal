import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Services from './Home/Services';
import Loading from './Shared/Loading';

const AddDoctor = () => {
    const { data: services, isLoading } = useQuery('services', () => fetch('https://stormy-shelf-21707.herokuapp.com/service').then(res => res.json()))
    const { register, formState: { errors }, handleSubmit } = useForm();
    // const [doctor, setDoctor] = useState({});
    const imageStorageKey = 'bc86a39269ff5c2904ac85657da2db51';
    const onSubmit = async data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        specialty: data.Specialty,
                        img: result.data.url
                    };
                    // send doctor in database
                    fetch('https://stormy-shelf-21707.herokuapp.com/doctor', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(insert => {
                            if (insert.insertedId) {
                                toast('Successfully add a doctor')
                            }
                        })
                }
            })
    }
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h1 className='text-2xl'>Add a new doctor</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Doctor's Name"
                        className="input input-bordered w-full max-w-xs"
                        {...register("name", {
                            required: {
                                value: true,
                                message: 'Name is required'
                            },
                            minLength: {
                                value: 3,
                                message: 'Must be 3 characters or longer.'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                        {errors.name?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        type="email"
                        placeholder="Doctor's Email"
                        className="input input-bordered w-full max-w-xs"
                        {...register("email", {
                            required: {
                                value: true,
                                message: 'Email is required'
                            },
                            pattern: {
                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                message: 'Error'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                        {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Specialty</span>
                    </label>
                    <select {...register('Specialty')} className="select input input-bordered w-full max-w-xs mb-5">
                        {services.map(service => <option
                            key={service._id}
                            value={service.name}
                        >{service.name}</option>)}
                    </select>
                </div>
                <div className="form-control w-full max-w-xs">
                    <input
                        type="file"
                        className="w-full max-w-xs"
                        {...register("image", {
                            required: {
                                value: true,
                                message: 'Image is required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.image?.type === 'required' && <span className="label-text-alt text-red-500">{errors.image.message}</span>}
                    </label>
                </div>
                <button type="submit" className="btn btn-accent text-white w-full font-bold">Add</button>
            </form>
        </div>
    );
};

export default AddDoctor;