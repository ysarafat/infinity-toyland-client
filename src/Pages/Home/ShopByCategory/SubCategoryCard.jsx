/* eslint-disable no-underscore-dangle */
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import React from 'react';
import { Link } from 'react-router-dom';

function SubCategoryCard({ toy }) {
    const { name, image, _id, rating, price } = toy;
    return (
        <div className="border border-general rounded-lg grid grid-rows-[auto,1fr,auto] text-primary-text">
            <div>
                <img
                    className="w-full rounded-t-lg h-[300px] object-fill lg:h-[320px]"
                    src={image}
                    alt=""
                />
            </div>
            <div className="flex-grow">
                <h1 className="text-xl font-semibold my-3 px-2 lg:px-4 card">{name}</h1>
                <div className="mt-2.5 mb-5 flex items-center px-2 lg:px-4">
                    <Rating className="" style={{ maxWidth: 120 }} value={rating} readOnly />
                    <span className="mr-2 ml-3 rounded bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-primary">
                        {rating}
                    </span>
                </div>
            </div>

            <div className="self-end ">
                <div className="flex items-center justify-between px-2 lg:px-4 mb-4">
                    <span className="text-3xl font-bold text-primary-text">${price}</span>

                    <Link to={`/toy-details/${_id}`}>
                        <button className="rounded-lg bg-primary px-5 py-2.5 text-center text-base font-medium text-white hover:bg-secondary focus:outline-none duration-300">
                            View Details
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default SubCategoryCard;
