/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react-hooks/exhaustive-deps */
import { Table } from 'flowbite-react';
import React, { useContext, useEffect, useState } from 'react';
import { ScrollRestoration, useNavigation } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

import DynamicTitle from '../../Components/DynamicTitle/DynamicTitle';
import Spinner from '../../Components/Spinner/Spinner';
import MyToysTable from './MyToysTable';

function MyToys() {
    const { user } = useContext(AuthContext);
    const [toys, setToys] = useState([]);
    const [sortOrder, setSortOrder] = useState(1);

    const handleSortChange = (event) => {
        const sortValue = event.target.value;
        setSortOrder(sortValue);
    };

    useEffect(() => {
        fetch(
            `https://infinity-toyland-server.vercel.app/my-toys?email=${user?.email}&sort=${sortOrder}`
        )
            .then((res) => res.json())
            .then((data) => setToys(data));
    }, [toys, user]);

    const navigate = useNavigation();
    if (navigate.state === 'loading') {
        return <Spinner />;
    }

    return (
        <div className="my-16">
            <h1 className="text-3xl lg:text-4xl font-bold text-center mb-10 text-primary-text">
                My Toys
            </h1>
            <ScrollRestoration />
            <DynamicTitle title="My Toys" />
            <div className="flex justify-end items-center">
                <label className="text-primary-text font-semibold mr-2">Sort By price: </label>
                <select
                    className="h-11 px-3 rounded-lg border shadow hover:shadow-lg border-slate-100"
                    id="sortOrder"
                    value={sortOrder}
                    onChange={handleSortChange}
                >
                    <option value="1">Ascending</option>
                    <option value="-1">Descending</option>
                </select>
            </div>
            <div className="mt-5 w-full overflow-x-auto">
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
                {!toys.length && (
                    <h1 className="text-2xl text-secondary-text text-center mt-20">
                        If you haven't added a toy yet, add a toy
                    </h1>
                )}
            </div>
        </div>
    );
}

export default MyToys;
