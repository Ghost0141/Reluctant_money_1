import React from 'react'
import "./login.scss"
import loginImg from "./../../assets/img1.jpg"
import { useForm } from 'react-hook-form';


const Login = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <section>
            <div className='login-container'>

                <div className="register">
                    <div className="col-1">
                        <h2 className='text-gray-500 text-xl'>Sign In</h2>
                        <span>Register and enjoy the service</span>
                        <form className='flex flex-col' id="form" onSubmit={handleSubmit(onSubmit)}>
                            <input type="text" {...register("username", { required: true })} placeholder='username' />
                            <input type="text" {...register("password", { required: true })} placeholder='password' />

                            {
                                errors.username?.type === 'required' && <p className='text-red-600'>Username is Required</p>

                            }
                            {
                                errors.password?.type === 'required' && <p className='text-red-600'>Password is Required</p>
                            }

                            <button className='btn'>sign in</button>
                        </form>
                    </div>
                    <div className="col-2">
                        <img src={loginImg} alt="" />
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Login