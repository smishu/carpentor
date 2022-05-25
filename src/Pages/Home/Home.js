import React from 'react';

import Banner from './Banner';
import Brands from './Brands';
import Footer from './Footer';
import Navbar from './Navbar';
import Offer from './Offer';
import Products from './Products';
import Qality from './Qality';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Offer></Offer>
            <Products></Products>
            <Qality></Qality>
            <Brands></Brands>
            <Footer></Footer>

        </div>
    );
};

export default Home;