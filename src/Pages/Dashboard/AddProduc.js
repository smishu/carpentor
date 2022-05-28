import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';

const AddProduc = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const { data: products, isLoading } = useQuery('products', () => fetch(`http://localhost:5000/product`)
        .then(res => res.json()))
    const imageStorageKey = '79a5c020cf113cc46c7563266cde389a';
    const onSubmit = async data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const newProduct = {
                        name: data.name,
                        price: data.price,
                        description: data.description,
                        product: data.product,
                        img: img


                    }
                    fetch(`http://localhost:5000/newProduct `, {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('newProduct')}`
                        },
                        body: JSON.stringify(newProduct)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            if (inserted.insertedId) {
                                toast.success('Product add')
                                reset();
                            }
                            else {
                                toast.error('Faile add Product');
                            }
                        })
                }
                // console.log('img', result);

            })
    }
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className='text-3xl'> Add New Product</h2>

            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="input input-bordered w-full max-w-xs"
                        {...register("name", {
                            required: {
                                value: true,
                                message: 'Name is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                    </label>
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input
                        type="text"
                        placeholder="price"
                        className="input input-bordered w-full max-w-xs"
                        {...register("price", {
                            required: {
                                value: true,
                                message: 'Price is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.price?.type === 'required' && <span className="label-text-alt text-red-500">{errors.price.message}</span>}
                    </label>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <input
                        type="text"
                        placeholder=" description"
                        className="input input-bordered w-full max-w-xs"
                        {...register("description", {
                            required: {
                                value: true,
                                message: 'Description is Required'
                            },

                        })}
                    />
                    <label className="label">
                        {errors.description?.type === 'required' && <span className="label-text-alt text-red-500">{errors.description.message}</span>}

                    </label>
                </div>
                <div className="input-bordered form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Product</span><br />
                        <select {...register('product')} class="select select-bordered w-full max-w-xs">
                            {
                                products.map(product => <option
                                    key={product._id}
                                    value={product.name}
                                    selected>{product.name}</option>)
                            }


                        </select>

                    </label>
                    <label className="label">
                        <span className="label-text">Product image</span>
                    </label>
                    <input
                        type="file"

                        className="input input-bordered w-full max-w-xs"
                        {...register("image", {
                            required: {
                                value: true,
                                message: 'Image is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                    </label>

                </div>


                <input className='btn btn-outline w-full max-w-xs' type="submit" value="add" />
            </form>
        </div>
    );
};

export default AddProduc;