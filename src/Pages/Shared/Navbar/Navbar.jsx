import React, { useState } from 'react';
import { HiBars3BottomLeft, HiMagnifyingGlass, HiXMark } from 'react-icons/hi2';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const navLinks = (
        <>
            <NavLink
                to="/"
                className={({ isActive }) =>
                    isActive ? 'text-primary' : 'text-primary-text hover:text-primary duration-300'
                }
            >
                <li>Home</li>
            </NavLink>
            <NavLink
                to="/toys"
                className={({ isActive }) =>
                    isActive ? 'text-primary' : 'text-primary-text hover:text-primary duration-300'
                }
            >
                <li>All Toys</li>
            </NavLink>
            <NavLink
                to="/my-toys"
                className={({ isActive }) =>
                    isActive ? 'text-primary' : 'text-primary-text hover:text-primary duration-300'
                }
            >
                <li>My Toys</li>
            </NavLink>
            <NavLink
                to="/add-toy"
                className={({ isActive }) =>
                    isActive ? 'text-primary' : 'text-primary-text hover:text-primary duration-300'
                }
            >
                <li>Add a Toy</li>
            </NavLink>
            <NavLink
                to="/blog"
                className={({ isActive }) =>
                    isActive ? 'text-primary' : 'text-primary-text hover:text-primary duration-300'
                }
            >
                <li>Blog</li>
            </NavLink>
            <NavLink
                to="/register"
                className={({ isActive }) =>
                    isActive ? 'text-primary' : 'text-primary-text hover:text-primary duration-300'
                }
            >
                <li>Register</li>
            </NavLink>
        </>
    );
    return (
        <div className="sticky top-0 z-40 border-b lg:py-4 py-2 bg-white ">
            <div className="container mx-auto  hidden lg:flex justify-between items-center px-4">
                <Link to="/">
                    <h1 className="text-2xl font-bold text-primary-text ">
                        INFINITY <span className="text-primary">TOYLAND</span>
                    </h1>
                </Link>
                <div>
                    <ul className="flex items-center text-base font-medium gap-5">{navLinks}</ul>
                </div>
            </div>
            <div className="lg:hidden z-40 bg-white  text-primary-text py-2 px-4 flex justify-between items-center">
                <button onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <HiXMark size={30} /> : <HiBars3BottomLeft size={30} />}
                </button>
                {isOpen && (
                    <ul className="absolute top-[65px]  bg-slate-100 border left-0 w-1/2 py-3 px-4 flex flex-col gap-2 min-h-[calc(100vh-48px)] ">
                        {navLinks}
                    </ul>
                )}
                <div>
                    <Link to="/">
                        <h1 className="text-2xl font-bold text-primary-text ">
                            INFINITY <span className="text-primary">TOYLAND</span>
                        </h1>
                    </Link>
                </div>
                <button>
                    <HiMagnifyingGlass size={30} />
                </button>
            </div>
        </div>
    );
}

export default Navbar;
