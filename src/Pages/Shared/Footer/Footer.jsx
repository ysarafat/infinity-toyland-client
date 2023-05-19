import React from 'react';
import {
    BsEnvelope,
    BsFacebook,
    BsFillTelephoneFill,
    BsInstagram,
    BsLinkedin,
    BsTwitter,
} from 'react-icons/bs';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="bg-secondary text-slate-300 ">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 container mx-auto px-4 justify-items-center-start lg:justify-items-center py-14 ">
                <div className="">
                    <h1 className="text-white font-bold text-2xl bold ">
                        INFINITY <span className="text-primary">TOYLAND</span>
                    </h1>
                    <p className="mt-2">
                        Welcome to Infinity Toyland, your ultimate destination for all things
                        toy-related! Our website is a magical wonderland where enthusiasts.
                    </p>
                </div>
                <div>
                    <h2 className="text-white font-bold mb-2 text-lg">PAGES</h2>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                            <li>
                                <Link to="/toys">All Toy</Link>
                            </li>
                        </li>
                        <li>
                            <Link to="/blog">Blog</Link>
                        </li>
                        <li>
                            <Link to="/about">About us</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact us</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-white font-bold mb-2 text-lg">FOLLOW US</h2>
                    <ul>
                        <li>
                            <Link to="/"> Facebook Page </Link>
                        </li>
                        <li>
                            <Link to="/"> Facebook Group </Link>
                        </li>
                        <li>
                            <Link to="/"> Instagram </Link>
                        </li>
                        <li>
                            <Link to="/"> Twitter </Link>
                        </li>
                        <li>
                            <Link to="/"> Linkedin </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-white font-bold mb-2 text-lg">CONTACT</h2>
                    <p>123/A, Main Street, Gulshan-</p>
                    <p>Dhaka-1212, Bangladesh</p>
                    <p className="flex items-center gap-2">
                        <BsFillTelephoneFill />
                        +880 1710-100101
                    </p>
                    <p className="flex items-center gap-2">
                        <BsEnvelope />
                        support@toylad.com
                    </p>
                </div>
            </div>
            <div className="w-full sm:flex sm:items-center sm:justify-between border-t container mx-auto border-slate-700 py-5 px-4">
                <p className=" ">&#169;2023 Infinity ToyLand, All Rights Reserved</p>
                <div className="flex items-center gap-4 mt-3 lg:mt-0">
                    <BsFacebook style={{ color: '#0A81EC', cursor: 'pointer' }} size={26} />
                    <BsInstagram style={{ color: '#F74406', cursor: 'pointer' }} size={26} />
                    <BsTwitter style={{ color: '#1DA1F2', cursor: 'pointer' }} size={26} />
                    <BsLinkedin style={{ color: '#0077B5', cursor: 'pointer' }} size={26} />
                </div>
            </div>
        </footer>
    );
}

export default Footer;
