import React, { useEffect, useState } from 'react'
import { deleteUser } from '../Configuration/Api'
import { AppContext, useAppContext } from '../StateManagement/Context';

function UserProfile({ user }) {
  const { loginUser } = useAppContext(AppContext)
  const handleDelete = () => {
    deleteUser(user._id);
    loginUser(false)
    
  }
  return (
    <div className='container text-center mt-3'>

      <div className='bg-light'>
        <label className='fw-bold fs-3 m-1 text-uppercase'>Name : </label>{"\t\t"}
        <span className=' fs-3 m-1'>{user.name}</span>
        <br />
        <label className='fw-bold fs-3 m-1 text-uppercase'>Email</label>
        <span className=' fs-3 m-1'>{user.email}</span>
        <br />
        <label className='fw-bold fs-3 m-1 text-uppercase'>Password</label>
        <span className=' fs-3 m-1'>{user.password}</span>
        <br />
        <input className='bg-danger text-white fs-5 text-center fw-bold' value={"Delete Profile"} type='button' onClick={handleDelete} />
      </div>
    </div>
  )
}

export default UserProfile