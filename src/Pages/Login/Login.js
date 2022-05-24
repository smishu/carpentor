import React from 'react';

const Login = () => {
    return (
        <div className='flex h-screen justify-center items-center'>

            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="text-center text-2xl font-bold">Login!</h2>
                    <div class="divider">OR</div>
                    <button class="btn btn-outline">Continue with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;