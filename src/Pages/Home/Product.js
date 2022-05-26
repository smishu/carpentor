import React from 'react';
// import { Link } from 'react-router-dom';


const Product = ({ product, setPacel }) => {
    const { name, price, description, img, _id } = product || {};

    return (


        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{price}</h2>
                <p>{name}</p>
                <div className="card-actions">

                    {/* <Link to='/paceloder'><label
                        onClick={() => setPacel(product)(_id)}
                        for="pacel-modal" className="btn btn-primary">Buy Now</label></Link> */}
                    <label
                        onClick={() => setPacel(product)(_id)}
                        for="pacel-modal" className="btn btn-primary">Buy Now</label>
                </div>
            </div>
        </div>


    );
};

export default Product;