// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import PacelOrder from './PacelOrder';

// const PacelOrderDetals = () => {
//     const { productId } = useParams()
//     console.log(productId);
//     const [product, setProduct] = useState({});
//     useEffect(() => {
//         const url = `http://localhost:5000/product?id=${productId}`;


//         console.log(url);
//         fetch(url)
//             .then(res => res.json())
//             .then(data => setProduct(data));

//     }, []);
//     return (

//         <div>
//             {
//                 product.map(product => <PacelOrder
//                     key={product._id}
//                     product={product}
//                 >
//                 </PacelOrder>
//                 )
//             };


//         </div>
//     );
// };

// export default PacelOrderDetals;