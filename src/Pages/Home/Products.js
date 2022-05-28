import React, { useState } from 'react';
import { useQuery } from 'react-query';
import PacelOrder from '../Oders/PacelOrder';
import Loading from '../Shared/Loading';
import Product from './Product';

const Products = () => {
    const [pacel, setPacel] = useState(null);
    const { data: products, isLoading, refetch } = useQuery('available', () => fetch(`http://localhost:5000/available`)
        .then(res => res.json())
    )
    if (isLoading)
        return <Loading></Loading>



    return (
        <div>
            <h2 className='text-center text-3xl text-bold mt-12'>Ours Products</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    products?.map(product => <Product
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
                    refetch={refetch}
                ></PacelOrder>
            }
        </div>
    );
};

export default Products;