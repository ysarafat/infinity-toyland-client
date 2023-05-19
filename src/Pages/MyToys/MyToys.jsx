/* eslint-disable no-underscore-dangle */
import { Table } from 'flowbite-react';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigation } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

import Spinner from '../../Components/Spinner/Spinner';
import MyToysTable from './MyToysTable';

function MyToys() {
    const { user } = useContext(AuthContext);
    const [toys, setToys] = useState([]);

    useEffect(() => {
        fetch(`https://infinity-toyland-server.vercel.app/my-toys?email=${user?.email}`)
            .then((res) => res.json())
            .then((data) => setToys(data));
    }, [toys, user]);

    const navigate = useNavigation();
    if (navigate.state === 'loading') {
        return <Spinner />;
    }
    return (
        <div className="mt-10 w-full overflow-x-auto">
            <Table className="">
                <Table.Head>
                    <Table.HeadCell className="text-base">Image</Table.HeadCell>
                    <Table.HeadCell className="text-base">Toy name</Table.HeadCell>
                    <Table.HeadCell className="text-base ">Price</Table.HeadCell>
                    <Table.HeadCell className="text-base ">Rating</Table.HeadCell>
                    <Table.HeadCell className="text-base ">Stock</Table.HeadCell>
                    <Table.HeadCell className="text-base ">Description</Table.HeadCell>
                    <Table.HeadCell className="text-base">Action</Table.HeadCell>
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
