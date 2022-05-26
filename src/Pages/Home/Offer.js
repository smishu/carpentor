import React from 'react';
import carpenter1 from '../../Assets/carpenter-grid-1_470x.webp';
import carpenter3 from '../../Assets/carpenter-grid-3_470x.webp';
import carpenter4 from '../../Assets/carpenter-grid-4_470x.webp';

const Offer = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            <div className="card lg:card-side shadow-xl bg-orange-100 ">

                <div className="card-bod">
                    <h2 className="card-title">Hot List!</h2>
                    <p className='text-4xl font-bold text-orange-300'>WOODEN
                        TOOLBOX</p>

                </div>
                <figure><img className='h-80' src={carpenter1} alt="Album" /></figure>
            </div>

            <div className="card lg:card-side bg-orange-200 shadow-xl">

                <div className="card-body">
                    <h2 className="card-title">Summer Offer!</h2>
                    <p className='text-4xl font-bold'>CARPENTER
                        TOOLS</p>


                </div>
                <figure><img className='h-80' src={carpenter3} alt="Album" /></figure>

            </div>
            <div className="card lg:card-side bg-amber-100 shadow-xl">

                <div className="card-body">
                    <h2 className="card-title">New Arrival!</h2>
                    <p className='text-3xl font-bold'>HAND SAW
                        ON WOOD</p>


                </div>
                <figure><img className='h-80' src={carpenter4} alt="Album" /></figure>

            </div>
        </div >
    );
};

export default Offer;