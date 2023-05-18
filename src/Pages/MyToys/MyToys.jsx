/* eslint-disable no-underscore-dangle */
import { Table } from 'flowbite-react';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import MyToysTable from './MyToysTable';

function MyToys() {
    const { user } = useContext(AuthContext);
    const [toys, setToys] = useState([]);
    useEffect(() => {
        fetch(`https://infinity-toyland-server.vercel.app/my-toys?email=${user?.email}`)
            .then((res) => res.json())
            .then((data) => setToys(data));
    }, [toys, user]);

    return (
        <div className="mt-10 max-w-full">
            <Table>
                <Table.Head>
                    <Table.HeadCell className="text-base">Product Image</Table.HeadCell>
                    <Table.HeadCell className="text-base">Product name</Table.HeadCell>
                    <Table.HeadCell className="text-base">Price</Table.HeadCell>
                    <Table.HeadCell className="text-base">Rating</Table.HeadCell>
                    <Table.HeadCell className="text-base">Stock</Table.HeadCell>
                    <Table.HeadCell className="text-base">Description</Table.HeadCell>
                    <Table.HeadCell className="text-base">
                        <span className="sr-only">Edit</span>
                    </Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                    {toys?.map((toy) => (
                        <MyToysTable key={toy._id} toys={toy} />
                    ))}
                </Table.Body>
            </Table>
        </div>
    );
}

export default MyToys;
