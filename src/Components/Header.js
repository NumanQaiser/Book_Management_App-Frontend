import React from 'react'
import { AppContext, useAppContext } from '../StateManagement/Context'
import { RoutHistory } from '../Navigation/MainNavigation'

function Header() {

    const { loginUser, login } = useAppContext(AppContext)
    const handleLougOut = () => {
        // remove the state of login user
        loginUser(false);
        if (login) {
            RoutHistory.navigate("/login")
        }

    }
    return (
        <div>
            <nav class="navbar navbar-expand-lg mt-3 container bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand">Book Management</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-start" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                {
                                    login ?
                                        <a class="nav-link" onClick={() => RoutHistory.navigate("/")} >Home</a>
                                        :
                                        ""
                                }
                            </li>
                        </ul>
                    </div>
                    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item ">
                                {
                                    login ?
                                        <a class="nav-link" aria-current="page" onClick={handleLougOut}>
                                            LogOut
                                        </a>
                                        :
                                        <div className='row'>
                                            <a class="nav-link col" aria-current="page" onClick={() => RoutHistory.navigate("/login")}>
                                                LogIn
                                            </a>
                                            <a class="nav-link col" aria-current="page" onClick={() => RoutHistory.navigate("/signup")}>
                                                SignIn
                                            </a>
                                        </div>

                                }
                            </li>
                            <li class="nav-item">
                                {
                                    login ?
                                        <a class="nav-link" onClick={() => RoutHistory.navigate("/profile")}>
                                            Profile
                                        </a>
                                        :
                                        ""
                                }
                            </li>
                        </ul>
                       
                    </div>
                </div>
            </nav >
        </div >
    )
}

export default Header