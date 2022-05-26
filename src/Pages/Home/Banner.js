import React from 'react';
import './Banner.css';
import silder3 from '../../Assets/slider-3.webp';

const Banner = () => {
    return (

        <div className="hero min-h-screen" style={{
            background: `url(${silder3})`,

        }}
        >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Welcome</h1>
                    <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-accent bannerButon text-white">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;