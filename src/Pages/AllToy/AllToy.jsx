/* eslint-disable no-underscore-dangle */
import { Table } from 'flowbite-react';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllToyTable from './AllToyTable';

function AllToy() {
    const toys = useLoaderData();
    console.log(toys);
    return (
        <div className="mt-10 w-full overflow-x-auto">
            <Table className="">
                <Table.Head>
                    <Table.HeadCell className="text-base">Toy name</Table.HeadCell>
                    <Table.HeadCell className="text-base ">Seller</Table.HeadCell>
                    <Table.HeadCell className="text-base ">Sub-Category</Table.HeadCell>
                    <Table.HeadCell className="text-base ">Price</Table.HeadCell>
                    <Table.HeadCell className="text-base ">Stock Qty</Table.HeadCell>
                    <Table.HeadCell className="text-base ">View Details</Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                    {toys.slice(0, 20)?.map((toy) => (
                        <AllToyTable key={toy._id} toys={toy} />
                    ))}
                </Table.Body>
            </Table>
        </div>
    );
}

export default AllToy;
