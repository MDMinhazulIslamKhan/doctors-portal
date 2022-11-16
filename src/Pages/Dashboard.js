import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content bg-[#F1F5F9] p-5">
                <h1 className='text-purple-500 text-3xl font-bold ml-3'>Welcome to your Dashboard</h1>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer" className="drawer-overlay"></label>
                <ul className="menu p-4 w-52 bg-base-100 text-base-content">
                    <li><Link to='/dashboard'>Dashboard</Link></li>
                    <li><Link to='/dashboard/review'>Review</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;