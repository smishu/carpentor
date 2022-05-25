import React from 'react';
import './Qality.css';
// import imges from '../../Assets/carpenter-banner-2.web';

const Qality = () => {

    return (
        < div className="hero min-h-[50%] Qality mt-6">
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">

                    <h4 className="mb-5">POWER TOOLS YOU SHOULD OWN</h4>
                    <p className="mb-5 font-bold">ENJOY THE BEST QALITY AND FEATURES MADE BY OUR TEAM.</p>
                    <button className="btn btn-active btn-accent text-white">Shop Now</button>
                    <button className="btn btn-active btn-accent text-white ml-4">View More</button>
                </div>
            </div>
        </div >
    );
};

export default Qality;