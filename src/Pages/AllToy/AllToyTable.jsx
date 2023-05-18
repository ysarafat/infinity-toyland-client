import { Table } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

function AllToyTable({ toys }) {
    const { name, category, sellerName, price, qty, _id } = toys;
    return (
        <Table.Row className="bg-white  dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell>
                <h3 className="text-lg text-primary-text">{name}</h3>
            </Table.Cell>
            <Table.Cell className="text-base text-secondary-text  ">{sellerName}</Table.Cell>
            <Table.Cell className="text-base text-secondary-text  ">{category}</Table.Cell>
            <Table.Cell className="text-base text-secondary-text  ">${price}</Table.Cell>

            <Table.Cell className="text-base text-secondary-text   ">{qty}</Table.Cell>

            <Table.Cell className="">
                <Link to={`/toy-details/${_id}`}>
                    <button className=" text-primary h-8 px-4  hover:underline text-base">
                        View Details
                    </button>
                </Link>
            </Table.Cell>
        </Table.Row>
    );
}

export default AllToyTable;
