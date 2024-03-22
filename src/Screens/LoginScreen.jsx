import React, { useReducer } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { userLogin } from '../Configuration/Api'
import { AppContext, useAppContext } from '../StateManagement/Context'

function LoginScreen({ isUserLogin }) {
    const { handleUserData } = useAppContext(AppContext)
    const personReducer = (state, action) => {
        switch (action.type) {
            case "email": {
                return {
                    ...state,
                    email: action.email
                }
            }
            case "password": {
                return {
                    ...state,
                    password: action.pass
                }
            }
            default:
                return state
        }

    }
    const [person, dispatchPerson] = useReducer(personReducer, { email: "", password: "" })
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await userLogin(person)
        if (response?.data?.success) {
            isUserLogin(true);
            handleUserData(response?.data?.Data)
            navigate("/");
            return
        } else {
            alert(response?.data?.message)
        }
    }

    return (
        <div className='container border'>
            <h1 className='text-center text-uppercase'>Login</h1>
            <form className=' w-75 m-auto mb-2 text-center ' onSubmit={handleSubmit}>
                <div >
                    <label className='fw-bold p-2 fs-3'>
                        Email
                    </label>
                    <input name='name' placeholder='please enter email ' type='email' onChange={(e) => dispatchPerson({ type: "email", email: e.target.value })} />
                </div>
                <div>
                    <label className='fw-bold p-2 fs-3'>
                        Password
                    </label>
                    <input name='pass' placeholder='please enter password' type='password' onChange={(e) => dispatchPerson({ type: "password", pass: e.target.value })} />
                </div>

                <input className='m-3' type='submit' />
                <p>Create a new account ? <Link to="/signup">SignUp</Link></p>
            </form>

        </div>
    )
}

export default LoginScreen