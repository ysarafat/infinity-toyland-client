import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import React from 'react';
import { ScrollRestoration, useLoaderData, useNavigation } from 'react-router-dom';
import DynamicTitle from '../../Components/DynamicTitle/DynamicTitle';
import Spinner from '../../Components/Spinner/Spinner';

function ToyDetails() {
    const toyData = useLoaderData();
    const navigation = useNavigation();
    const { name, image, category, sellerName, sellerEmail, price, rating, description, qty } =
        toyData;
    if (navigation.state === 'loading') {
        return <Spinner />;
    }

    return (
        <div className="my-10">
            <ScrollRestoration />
            <div className="flex items-center justify-between flex-col lg:flex-row">
                <DynamicTitle title={name} />
                <div>
                    <h1 className="text-4xl text-primary-text font-bold mb-3">Toy: {name}</h1>
                    <p className="text-lg text-primary-text">Sub-Category: {category}</p>
                    <p className="text-lg text-primary-text">Seller Name: {sellerName}</p>
                    <p className="text-lg text-primary-text my-2">Seller Email: {sellerEmail}</p>
                    <p className="text-lg text-primary-text ">Price: ${price}</p>
                    <span className="text-lg text-primary-text my-2 flex gap-2 items-center">
                        Rating:{' '}
                        <Rating className="" style={{ maxWidth: 120 }} value={rating} readOnly />
                    </span>
                    <p className="text-lg text-primary-text">Stock Quantity: {qty}</p>
                </div>
                <div className="">
                    <img className="w-[800px] lg:h-[650px] rounded-lg" src={image} alt="" />
                </div>
            </div>
            <div className="mt-5">
                <p className="text-lg text-primary-text">
                    <strong>Description:</strong> {description}
                </p>
            </div>
        </div>
    );
}

export default ToyDetails;
