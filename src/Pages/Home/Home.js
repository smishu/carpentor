import React from 'react';

import Banner from './Banner';
import Navbar from './Navbar';
import Offer from './Offer';
import Qality from './Qality';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Offer></Offer>
            <Qality></Qality>

        </div>
    );
};

export default Home;