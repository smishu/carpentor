import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import Review from './Review';

const Reviews = () => {
    const [review, setReviwe] = useState(null);
    const { data: reviews, isLoading, } = useQuery('reviws', () => fetch(`http://localhost:5000/reviews`)
        .then(res => res.json())
    )
    if (isLoading)
        return <Loading></Loading>
    return (
        <div>
            <h2 className='text-center text-3xl text-bold mt-12'>Reviews</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    reviews?.map(review => <Review
                        key={review._id}
                        review={review}
                        setReviwe={setReviwe}
                    >

                    </Review>)

                }
            </div>
        </div>
    );
};

export default Reviews;