import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
    const { name, price, description, img, _id } = product || {};
    const Navigete = useNavigate();
    const navigateToProduct = _id => {
        Navigate(`/product/${_id}`);
    }
    return (


        <div class="card w-96 bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <img src={img} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{price}</h2>
                <p>{name}</p>
                <div class="card-actions">
                    <button onClick={() => navigateToProduct(_id)} class="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>


    );
};

export default Product;