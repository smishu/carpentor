import React, { useEffect, useState } from 'react';
import PacelOrder from '../Oders/PacelOrder';
import Product from './Product';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [pacel, setPacel] = useState(null);
    useEffect(() => {
        fetch(`http://localhost:5000/product`)
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return (
        <div>
            <h2 className='text-center text-3xl text-bold mt-12'>Ours Products</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                        setPacel={setPacel}
                    ></Product>)

                }
            </div>

            {
                pacel && <PacelOrder
                    pacel={pacel}
                    setPacel={setPacel}
                ></PacelOrder>
            }
        </div>
    );
};

export default Products;