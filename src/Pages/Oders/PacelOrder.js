import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebes.init';


const PacelOrder = ({ pacel, setPacel, refetch }) => {
    const { _id, name, quantity, description, img, price } = pacel;
    const [user, error] = useAuthState(auth);
    const handlePacel = event => {
        event.preventDefault();
        const pacelBook = {
            pacelId: _id,
            pacel: name,
            buyer: user.email,
            buyerName: user.displayName,
            Phone: event.target.phone.value
        }
        fetch('https://fierce-sea-06191.herokuapp.com/pacelBook', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(pacelBook)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                refetch();
                setPacel('');
            })


    }

    return (
        <div>

            <div>
                <input type="checkbox" id="pacel-modal" className="modal-toggle" />
                <div className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <img src={img} alt="" />


                        <p className="py-4">{description}</p>
                        <h2 className='text-center font-bold text-2xl mb-4 text-cyan-400'>Payment Details</h2>
                        <form onSubmit={handlePacel} className='grid grid-cols-1 gap-3 justify-items-center'>
                            <input type="text" disabled value={name} className="input input-bordered w-full max-w-xs" />
                            <input type="text" disabled value={price} className="input input-bordered w-full max-w-xs" />
                            <select className="select select-bordered w-full max-w-xs" required>
                                <option required disabled selected>City?</option>
                                <option>Dhaka</option>
                                <option>Chattogram</option>
                                <option>Khulna</option>
                                <option>Sylhet</option>
                                <option>R??jsh??hi</option>
                                <option>Mymensingh</option>
                                <option>Barishal</option>
                                <option>Comilla</option>
                                <option>Rangpur</option>
                                <option>Br??hmanb??ria</option>
                                <option>Jessore</option>
                                <option>Saidpur</option>
                                <option>N??r??yanganj</option>
                                <option>Gaibandha</option>
                                <option>Naogaon</option>
                            </select>
                            <select className="select select-bordered w-full max-w-xs">
                                <option required disabled selected>quantity</option>
                                <option>10</option>
                                <option>20</option>
                                <option>30</option>
                                <option>40</option>
                                <option>50</option>
                                <option>100</option>
                                <option>1000</option>
                                <option>50000</option>

                            </select>
                            <input type="text" disabled name='name' value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />
                            <input type="email" disabled name='email' value={user?.email || ''} className="input input-bordered w-full max-w-xs" />
                            <input type="text" name='phone' placeholder="Phone Number" className="input input-bordered w-full max-w-xs" required />
                            <input type="submit" value="Pay Now" className="btn w-full max-w-xs" />
                        </form>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default PacelOrder;