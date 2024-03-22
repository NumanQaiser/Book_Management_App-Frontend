import { createContext, useContext, useEffect, useState } from "react";

// this is for creating the context and as well exporting
export const AppContext = createContext();

// this is for use the app context
export const useAppContext = (context) => {
    return useContext(context)
}


export const Context = ({ children }) => {

    const [login, setLogin] = useState(JSON.parse(localStorage.getItem("login")) === null ? false : true);
    const [userData, setUserData] = useState(JSON.parse(localStorage.getItem("user")));
    const loginUser = (user) => {
        setLogin(user);
    }
    const handleUserData = (data) => {
        setUserData(data)
    }
    useEffect(() => {
        login ? localStorage.setItem("login", login) : localStorage.removeItem("login")
        login ? localStorage.setItem("user", JSON.stringify(userData)) : localStorage.removeItem("user")
    }, [login, userData])
    return (
        <AppContext.Provider value={{ login, loginUser, userData, handleUserData }}>
            {children}
        </AppContext.Provider>
    )

}