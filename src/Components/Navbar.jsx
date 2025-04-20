import React from 'react';
import { NavLink } from 'react-router';
import { Link } from 'react-router';
import { MdShoppingCart, MdBookmarkAdd } from "react-icons/md";

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm px-4 md:px-8 lg:px-12 xl:px-16">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="cursor-pointer mr-2 lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><NavLink className={({ isActive }) => isActive ? 'text-blue-800 font-bold' : ''} to='/'>Home</NavLink></li>
                            <li><NavLink className={({ isActive }) => isActive ? 'text-blue-800 font-bold' : ''} to='/about'>About</NavLink></li>
                            <li><NavLink className={({ isActive }) => isActive ? 'text-blue-800 font-bold' : ''} to='/cart'> <MdShoppingCart size={20} /> </NavLink></li>
                            <li><NavLink className={({ isActive }) => isActive ? 'text-blue-800 font-bold' : ''} to='/favorites'> <MdBookmarkAdd size={20} /> </NavLink></li>
                        </ul>
                    </div>
                    <Link to='/' className="font-bold text-xl">FlagshipFaceoff</Link>
                </div>

                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><NavLink className={({ isActive }) => isActive ? 'text-blue-800 font-bold' : ''} to='/'>Home</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? 'text-blue-800 font-bold' : ''} to='/about'>About</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? 'text-blue-800 font-bold' : ''} to='/cart'> <MdShoppingCart size={20} /> </NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? 'text-blue-800 font-bold' : ''} to='/favorites'> <MdBookmarkAdd size={20} /> </NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar; Navbar