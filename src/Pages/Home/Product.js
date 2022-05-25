import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const Product = ({ products }) => {
    const { name, price, description, img, _id } = Product;
    const Navigete = useNavigate();
    // const navigateToProduct = _id => {
    //     Navigate(`/product/${_id}`);
    // }
    return (
        <div class="card lg:card-side bg-base-100 shadow-xl">
            <figure><img src={img} alt="Album" /></figure>
            <div class="card-body">
                <h2 class="card-title">{name}</h2>
                <p>{price} </p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary">Parches</button>
                </div>
            </div>
        </div>
    );
};

export default Product;