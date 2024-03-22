import { Navigate, useNavigate } from "react-router-dom"


export default function ProtectedRoutes({ children, isLogin }) {
    

    return (
        <div>
            {
                isLogin ? children : <Navigate to={"/login"}/>
            }
        </div>
    )
}