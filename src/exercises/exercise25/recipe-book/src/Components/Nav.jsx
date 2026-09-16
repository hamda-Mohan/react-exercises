import React from 'react';
import { NavLink } from 'react-router';

const Nav = () => {
    return (
        <div className='bg-gray-50 shadow-lg'>
            <div className='justify-around items-center flex space-x-4'>


                <header>
                    <h1 className='font-bold text-pink-600 text-3xl'>Recipe Book</h1>
                </header>
                <nav className=" flex gap-10 space-x-4  text-2xl text-center py-4 text-gray-700">
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? "text-pink-600 font-semibold " : undefined
                        }
                        to="/"
                    >
                        Home
                    </NavLink>
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? "text-pink-600 font-semibold " : undefined
                        }
                        to="/recipes"
                    >
                        Recipes
                    </NavLink>
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? "text-pink-600 font-semibold" : undefined
                        }
                        to="/categories"
                    >
                        Categories
                    </NavLink>

                </nav>
            </div>
        </div>
    );
}

export default Nav;
