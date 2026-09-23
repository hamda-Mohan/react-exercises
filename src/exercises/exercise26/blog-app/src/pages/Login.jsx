import React, { useContext } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Context/AuthContext';

const Login = () => {
    const {  login }  = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()

    const handleLogin = () => {
        login()
        const destination = location.state?.from?.pathname || "/";

    navigate(destination, { replace: true });

    }
    return (
        <div className='text-center'>  
            <h1 className='text-center text-3xl font-bold text-blue-700 mt-10'> make login first </h1>
            <button className='p-4 mt-10 text-white text-center bg-green-600 ' onClick={handleLogin}>Login</button>

        </div>
    );
}

export default Login;
