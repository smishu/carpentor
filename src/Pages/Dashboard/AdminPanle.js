import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import AllUsers from './AllUsers';

const AdminPanle = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/user', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accesstoken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>

                            <th>Admin</th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        {users.map(user => <AllUsers
                            key={user._id}
                            user={user}
                            refetch={refetch}

                        ></AllUsers>)}

                    </tbody>
                </table>
            </div>



        </div>
    );
};

export default AdminPanle;