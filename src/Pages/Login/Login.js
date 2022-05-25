import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebes.init';
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../Shared/Loading';

const Login = () => {

    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    let signInError;
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (user || gUser) {
            navigate(from, { replace: true });
        }
    }, [user, gUser, from, navigate])


    if (loading || gLoading) {
        return <Loading></Loading>
    }




    if (user) {
        console.log(user);
    }
    const onSubmit = data => {
        console.log(data);
    }
    return (
        <div className='flex h-screen justify-center items-center'>

            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Login!</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Email</span>

                            </label>
                            <input type="email" placeholder="Inter Email" class="input input-bordered w-full max-w-xs"

                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'email is required'
                                    },
                                    pattern: /[A-Za-z]{3}/,
                                    message: 'Provide a valid email'
                                })}

                            />
                            <label class="label">
                                {errors.email?.type === 'required' && <span class="label-text-alt text-red-600">{errors.email.message}</span>}
                                {errors.pattern?.type === 'required' && <span class="label-text-alt text-red-600">{errors.email.message}</span>}


                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is Required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 characters or longer'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>
                        </div>

                        {signInError}





                        <input className='btn btn-outline w-full max-w-xs' type="submit" value="Login" />
                    </form>
                    <div className="divider">OR</div>
                    <button
                        onClick={() => signInWithGoogle()}
                        className="btn btn-outline">Continue with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;