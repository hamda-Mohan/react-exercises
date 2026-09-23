import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router';
import { AuthContext } from '../Context/AuthContext';

const Nav = () => {
    const { isAuthenticated, logout } = useContext(AuthContext)
    const navigate = useNavigate();

    const handleLogout = () => {
        logout()
        navigate('/login')
    }
    return (
        <div className='bg-sky-50'>
            <div className='justify-around items-center flex space-x-4'>


                <header>
                    <h1 className="text-3xl font-extrabold tracking-wider text-sky-600 drop-shadow-sm">MY BLOG'S</h1>
                </header>
                <nav className=" flex gap-10 items-center space-x-4 font-semibold text-2xl text-center py-4 ">
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? "text-blue-300 font-extralight underline" : undefined
                        }
                        to="/"
                    >
                        Home
                    </NavLink>



                    {isAuthenticated ? (
                        <>
                            <NavLink
                                to="/create"
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-blue-300 font-extralight underline"
                                        : undefined
                                }
                            >
                                Create Post
                            </NavLink>

                            <button
                                onClick={handleLogout}
                                className="bg-red-700 text-white font-extralight text-xl p-4 rounded-lg"
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <NavLink
                            to="/login"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-blue-300 font-extralight underline"
                                    : undefined
                            }
                        >
                            Login
                        </NavLink>
                    )}
                </nav>
            </div>
        </div>
    );
}

export default Nav;
