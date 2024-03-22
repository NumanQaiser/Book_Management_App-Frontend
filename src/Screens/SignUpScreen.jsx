import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"
import { userCreate } from '../Configuration/Api'
function SignUpScreen() {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    }
  })

  const submit = (data) => {
    // call the signup api here
    const user = {
      name: data.name,
      email: data.email,
      password: data.password
    }
    userCreate(user);

  }

  return (
    <div className='container border mt-4'>
      <h1 className='text-center text-capitalize'>Create an account</h1>
      <form className='w-75 m-auto mb-2 text-center' onSubmit={handleSubmit(submit)}>
        <div >
          <label className='fw-bold p-2 fs-3'>
            Name
          </label>
          <input   {...register("name", { required: true })} type='text' placeholder='Enter your Name' />
        </div>

        <div >
          <label className='fw-bold p-2 fs-3'>
            Email
          </label>
          <input  {...register("email", { required: true })} type='email' placeholder='Enter your Email' />
        </div>

        <div >
          <label className='fw-bold p-2 fs-3'>
            Password
          </label>
          <input  {...register("password", { required: true })} type='password' placeholder='Enter your Password' />
        </div>
        <input className='m-3' type='submit' />
        <p>Already have an account ? <Link to="/login">LogIn</Link></p>
      </form>

    </div>
  )
}

export default SignUpScreen