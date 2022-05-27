import { data } from 'autoprefixer';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebes.init';

const MyItems = () => {
    const [items, setItems] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/pacelBook?buyer=${user.email}`, {

                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accesstoken')}`
                }
            })
                .then(res => {
                    console.log('res', res);
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accesstoken');
                        navigate('/');
                    }

                    return res.json()
                })
                .then(data => {


                    setItems(data)
                });
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
                            items.map((item, index) => <tr>
                                <th>{index + 1}</th>
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