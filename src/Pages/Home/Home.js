import React from 'react';

import Banner from './Banner';
import Brands from './Brands';
import Footer from './Footer';
import Offer from './Offer';
import Products from './Products';
import Qality from './Qality';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <Offer></Offer>
            <Products></Products>
            <Qality></Qality>
            <Reviews></Reviews>
            <Brands></Brands>
            <Footer></Footer>

        </div>
    );
};

export default Home;