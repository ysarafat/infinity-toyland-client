import React, { useContext, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import DynamicTitle from '../../Components/DynamicTitle/DynamicTitle';
import { AuthContext } from '../../Providers/AuthProvider';
import img from '../../assets/login_bg.svg';

function Register() {
    const { createUser, updateUser, googleLogin } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [showPass, setShowPass] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const handelRegisterForm = (e) => {
        e.preventDefault();
        setError('');
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        if (password !== confirmPassword) {
            return setError('Your password did not match');
        }
        if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/.test(password)) {
            return setError('Password must be 6 digits and a letter A-Z with a special character');
        }
        createUser(email, password)
            .then(() => {
                updateUser(name, photo);
                navigate(from, { replace: true });
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Registration Successful',
                    showConfirmButton: false,
                    timer: 1500,
                });
            })
            .catch((err) => setError(err.message));
    };
    const handelGoogleLogin = () => {
        setError('');
        googleLogin()
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
            .catch((err) => setError(err.message));
    };

    return (
        <div className=" lg:min-h-[calc(100vh-64px)] my-10 flex items-center flex-col-reverse lg:flex-row">
            <DynamicTitle title="Register" />
            <img className="lg:w-1/2 w-full" src={img} alt="" />
            <div className="w-full  border border-slate-200 p-4 lg:p-8 rounded-lg bg-[#f1f5f9]">
                <h1 className="text-2xl lg:text-3xl font-bold text-center mb-4">Register</h1>
                {error && (
                    <p className="text-base font-semibold my-2 text-red-500 text-center">
                        ❌ {error}
                    </p>
                )}
                <form onSubmit={handelRegisterForm} className="flex flex-col gap-3">
                    <label className="text-primary-text font-semibold">Full Name</label>
                    <input
                        type="text"
                        placeholder="Enter Full Name"
                        name="name"
                        required
                        className="w-full h-11 px-3 rounded-lg border shadow hover:shadow-lg border-slate-100"
                    />
                    <label className="text-primary-text font-semibold">Photo URL</label>
                    <input
                        type="url"
                        placeholder="Enter Photo URL"
                        name="photo"
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
                        type={showPass ? 'text' : 'password'}
                        placeholder="Secrete Password"
                        required
                        name="password"
                        className="w-full h-11 px-3 rounded-lg border shadow hover:shadow-lg border-slate-100"
                    />
                    <label className="text-primary-text font-semibold">Confirm Password</label>
                    <input
                        type={showPass ? 'text' : 'password'}
                        placeholder="Confirm Secrete Password"
                        name="confirmPassword"
                        required
                        className="w-full h-11 px-3 rounded-lg border shadow hover:shadow-lg border-slate-100"
                    />
                    <div className="flex items-center mt-2">
                        <input
                            onClick={() => setShowPass(!showPass)}
                            type="checkbox"
                            name="check"
                            className="w-4 h-4 text-primary bg-gray-100 border-gray-300 rounded focus:text-primary dark:text-primary"
                        />
                        <label className="ml-2  font-medium text-gray-900 dark:text-gray-300">
                            {showPass ? 'Hide Password' : 'Show Password'}{' '}
                        </label>
                    </div>
                    <input
                        className="w-full bg-primary mt-4 hover:bg-secondary duration-300 text-white rounded-lg h-11 text-lg"
                        type="submit"
                        value="Register"
                    />
                </form>
                <p className="mt-4 text-primary-text">
                    Already have an account?{' '}
                    <Link className="text-primary underline" to="/login">
                        Login
                    </Link>
                </p>
                <div className="flex justify-between items-center text-lg mt-4">
                    <div className="border border-slate-200 w-[45%]" />
                    or
                    <div className="border border-slate-200 w-[45%]" />
                </div>
                <button
                    onClick={handelGoogleLogin}
                    className="w-full  flex justify-center items-center gap-3 border border-slate-200 shadow h-11 rounded-lg hover:shadow-lg cursor-pointer bg-white mt-3"
                >
                    <FcGoogle size={30} /> <p>Login With Google</p>
                </button>
            </div>
        </div>
    );
}

export default Register;
