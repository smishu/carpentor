import { data } from 'autoprefixer';
import React from 'react';
import { toast } from 'react-toastify';

const AllUsers = ({ user, refetch }) => {
    const { email, role } = user;
    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: "PUT",
            headers: {
                authorization: `Bearer ${localStorage.getItem('accesstoken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed to make admin')
                }
                return res.json()
            })
            .then(data => {
                // console.log(data);
                if (data.modifiedCounnt > 0) {
                    refetch();
                    toast.success(`Successfully add Adimn`);
                }

            })
    }
    return (
        <tr>


            <td>{email}</td>
            <td>{role !== "admin" && <button onClick={makeAdmin}
                class="btn btn-xs">Make Admin</button>}</td>
            <td><button class="btn btn-xs">Remove User</button></td>
        </tr>
    );
};

export default AllUsers;