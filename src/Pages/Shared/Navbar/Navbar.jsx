import { Tooltip } from 'flowbite-react';
import React, { useContext, useState } from 'react';
import { HiBars3BottomLeft, HiMagnifyingGlass, HiXMark } from 'react-icons/hi2';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../../public/Logo.png';
import { AuthContext } from '../../../Providers/AuthProvider';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { user, logoutUser } = useContext(AuthContext);
    const navLinks = (
        <>
            <NavLink
                to="/"
                onClick={() => setIsOpen(!isOpen)}
                className={({ isActive }) =>
                    isActive ? 'text-primary' : 'text-primary-text hover:text-primary duration-300'
                }
            >
                <li>Home</li>
            </NavLink>
            <NavLink
                to="/toys"
                onClick={() => setIsOpen(!isOpen)}
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
                        onClick={() => setIsOpen(!isOpen)}
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
                        onClick={() => setIsOpen(!isOpen)}
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
                onClick={() => setIsOpen(!isOpen)}
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
                        onClick={() => setIsOpen(!isOpen)}
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
                        onClick={() => setIsOpen(!isOpen)}
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
                <Link
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-primary-text hover:text-primary duration-300"
                >
                    <button onClick={logoutUser}>logout</button>
                </Link>
            )}
        </>
    );

    return (
        <div className="sticky top-0 z-40 border-b lg:py-4 py-2 bg-white ">
            <div className="container mx-auto  hidden lg:flex justify-between items-center px-4">
                <Link to="/">
                    <div className="flex items-center gap-3">
                        <img className="w-10 h-10" src={logo} alt="" />
                        <h1 className="text-2xl font-bold text-primary-text ">
                            INFINITY <span className="text-primary">TOYLAND</span>
                        </h1>
                    </div>
                </Link>
                <div>
                    <ul className="flex items-center text-base font-medium gap-5">
                        {navLinks}
                        {user && (
                            <Tooltip content={user.displayName}>
                                <img
                                    className="w-10 h-10 rounded-full border-2 border-primary"
                                    src={user.photoURL}
                                    alt=""
                                />
                            </Tooltip>
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
                        <div className="flex items-center gap-3">
                            <img className="w-8 h-8" src={logo} alt="" />
                            <h1 className="text-2xl font-bold text-primary-text ">
                                INFINITY <span className="text-primary">TOYLAND</span>
                            </h1>
                        </div>
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
