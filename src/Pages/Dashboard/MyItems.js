import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebes.init';

const MyItems = () => {
    const [items, setItems] = useState([]);
    const [user] = useAuthState(auth);
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/pacelBook?buyer=${user.email}`)
                .then(res => res.json())
                .then(data => setItems(data));
        }
    }, [user])
    return (
        <div>


            <div class="overflow-x-auto">
                <table class="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Product</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            items.map(item => <tr>
                                <th>1</th>
                                <td>{item.buyerName}</td>
                                <td>{item.buyer}</td>
                                <td>{item.pacel}</td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyItems;