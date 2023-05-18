/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useState } from 'react';
import { HiBars3BottomLeft, HiMagnifyingGlass, HiXMark } from 'react-icons/hi2';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { user, logoutUser } = useContext(AuthContext);
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

            {user && (
                <>
                    {' '}
                    <NavLink
                        to="/my-toys"
                        className={({ isActive }) =>
                            isActive
                                ? 'text-primary'
                                : 'text-primary-text hover:text-primary duration-300'
                        }
                    >
                        <li>My Toys</li>
                    </NavLink>
                    <NavLink
                        to="/add-toy"
                        className={({ isActive }) =>
                            isActive
                                ? 'text-primary'
                                : 'text-primary-text hover:text-primary duration-300'
                        }
                    >
                        <li>Add a Toy</li>
                    </NavLink>
                </>
            )}

            <NavLink
                to="/blog"
                className={({ isActive }) =>
                    isActive ? 'text-primary' : 'text-primary-text hover:text-primary duration-300'
                }
            >
                <li>Blog</li>
            </NavLink>
            {!user && (
                <>
                    {' '}
                    <NavLink
                        to="/login"
                        className={({ isActive }) =>
                            isActive
                                ? 'text-primary'
                                : 'text-primary-text hover:text-primary duration-300'
                        }
                    >
                        <li>Login</li>
                    </NavLink>
                    <NavLink
                        to="/register"
                        className={({ isActive }) =>
                            isActive
                                ? 'text-primary'
                                : 'text-primary-text hover:text-primary duration-300'
                        }
                    >
                        <li>Register</li>
                    </NavLink>
                </>
            )}
            {user && (
                <Link className="text-primary-text hover:text-primary duration-300">
                    <button onClick={logoutUser}>logout</button>
                </Link>
            )}
        </>
    );
    console.log(user);
    return (
        <div className="sticky top-0 z-40 border-b lg:py-4 py-2 bg-white ">
            <div className="container mx-auto  hidden lg:flex justify-between items-center px-4">
                <Link to="/">
                    <h1 className="text-2xl font-bold text-primary-text ">
                        INFINITY <span className="text-primary">TOYLAND</span>
                    </h1>
                </Link>
                <div>
                    <ul className="flex items-center text-base font-medium gap-5">
                        {navLinks}{' '}
                        {user && (
                            <img
                                title={user.displayName}
                                className="w-10 h-10 rounded-full border-2 border-primary"
                                src={user.photoURL}
                                alt=""
                            />
                        )}
                    </ul>
                </div>
            </div>
            <div className="lg:hidden z-40 bg-white  text-primary-text py-2 px-4 flex justify-between items-center">
                <button onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <HiXMark size={30} /> : <HiBars3BottomLeft size={30} />}
                </button>
                {isOpen && (
                    <ul className="absolute top-[65px]  bg-slate-100 border left-0 w-1/2 py-3 px-4 flex flex-col gap-2 min-h-[calc(100vh-48px)] ">
                        {user && (
                            <div className="flex items-center gap-2">
                                <img
                                    className="w-10 h-10 rounded-full border-2 border-primary"
                                    src={user.photoURL}
                                    alt=""
                                />
                                <p>{user.displayName}</p>
                            </div>
                        )}
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
