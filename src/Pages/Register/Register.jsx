/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import img from '../../assets/login_bg.svg';
import './Register.css';

function Register() {
    const { createUser } = useContext(AuthContext);

    const handelRegisterForm = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        console.log(name, email, password, confirmPassword);
        createUser(email, password)
            .then((res) => console.log(res.user))
            .catch((err) => console.log(err.message));
    };
    return (
        <div className="min-h-[calc(100vh-65px)] lg:min-h-[calc(100vh-64px)] mt-10 flex items-center flex-col-reverse lg:flex-row">
            <img className="lg:w-1/2 w-full" src={img} alt="" />
            <div className="w-full  border border-slate-200 p-4 lg:p-8 rounded-lg bg-[#f1f5f9]">
                <h1 className="text-2xl lg:text-3xl font-bold text-center mb-4">Register</h1>
                <form onSubmit={handelRegisterForm} className="flex flex-col gap-3">
                    <label className="text-primary-text font-semibold">Full Name</label>
                    <input
                        type="text"
                        placeholder="Yeasir Arafat"
                        name="name"
                        required
                        className="w-full h-11 px-3 rounded-lg border shadow hover:shadow-lg border-slate-100"
                    />
                    <label className="text-primary-text font-semibold">Email Address</label>
                    <input
                        type="email"
                        placeholder="exempla@infinity.com"
                        required
                        name="email"
                        className="w-full h-11 px-3 rounded-lg border shadow hover:shadow-lg border-slate-100"
                    />
                    <label className="text-primary-text font-semibold">Password</label>
                    <input
                        type="password"
                        placeholder="Secrete Password"
                        required
                        name="password"
                        className="w-full h-11 px-3 rounded-lg border shadow hover:shadow-lg border-slate-100"
                    />
                    <label className="text-primary-text font-semibold">Confirm Password</label>
                    <input
                        type="password"
                        placeholder="Confirm Secrete Password"
                        name="confirmPassword"
                        required
                        className="w-full h-11 px-3 rounded-lg border shadow hover:shadow-lg border-slate-100"
                    />
                    <input
                        className="w-full bg-primary mt-4 hover:bg-secondary duration-300 text-white rounded-lg h-11 text-lg"
                        type="submit"
                        value="Register"
                    />
                </form>
            </div>
        </div>
    );
}

export default Register;
