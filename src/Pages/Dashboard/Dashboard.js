import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../Home/Navbar';

const Dashboard = () => {
    return (
        <div>
            <Navbar></Navbar>

            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet> </Outlet>

                </div>
                <div className="drawer-side">
                    <label for="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link to='/dashboard'>My Oders</Link></li>
                        <li><Link to='/dashboard/review'>Rewiew</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;