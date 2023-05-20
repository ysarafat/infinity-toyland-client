import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import opps from '../../../public/Oops404.svg';
import DynamicTitle from '../../Components/DynamicTitle/DynamicTitle';
import './Error.css';

function Error() {
    const { error } = useRouteError();
    return (
        <div className="h-screen w-screen bg-[url('../../../public/Sprinkle.svg')] bg-cover bg-no-repeat items-center py-16 ">
            <DynamicTitle title="Error" />
            <img className="w-[70%] h-[70%] mx-auto" src={opps} alt="" />
            <div className="container mx-auto text-center">
                <p className="text-2xl font-semibold md:text-3xl mb-8">{error?.message}</p>
                <Link
                    to="/"
                    className="px-8 py-3 font-semibold rounded btn bg-primary text-white hover:bg-secondary duration-300"
                >
                    Back to homepage
                </Link>
            </div>
        </div>
    );
}

export default Error;
