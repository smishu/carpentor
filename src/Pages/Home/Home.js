import React from 'react';

import Banner from './Banner';
import Footer from './Footer';
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
            <Footer></Footer>

        </div>
    );
};

export default Home;