/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Providers/AuthProvider';
import img from '../../assets/login_bg.svg';

function Login() {
    const { loginUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const handelLoginForm = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        loginUser(email, password)
            .then(() => {
                navigate(from, { replace: true });
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Login Successful',
                    showConfirmButton: false,
                    timer: 1500,
                });
            })
            .catch((err) => console.log(err.message));
    };
    return (
        <div className="min-h-[calc(100vh-65px)] lg:min-h-[calc(100vh-64px)] mt-10 flex items-center flex-col-reverse lg:flex-row">
            <img className="lg:w-1/2 w-full" src={img} alt="" />
            <div className="w-full  border border-slate-200 p-4 lg:p-8 rounded-lg bg-[#f1f5f9]">
                <h1 className="text-2xl lg:text-3xl font-bold text-center mb-4">Login</h1>
                <form onSubmit={handelLoginForm} className="flex flex-col gap-3">
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

                    <input
                        className="w-full bg-primary mt-4 hover:bg-secondary duration-300 text-white rounded-lg h-11 text-lg"
                        type="submit"
                        value="Login"
                    />
                </form>
                <p className="mt-4 text-primary-text">
                    Already have an account?{' '}
                    <Link className="text-primary underline" to="/register">
                        Register
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default Login;
