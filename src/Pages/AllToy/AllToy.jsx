/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-underscore-dangle */
import { Table } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import DynamicTitle from '../../Components/DynamicTitle/DynamicTitle';
import Spinner from '../../Components/Spinner/Spinner';
import AllToyTable from './AllToyTable';

function AllToy() {
    const [toys, setToys] = useState([]);

    const toysData = useLoaderData();
    useEffect(() => {
        setToys(toysData);
    }, []);

    const navigation = useNavigation();
    if (navigation.state === 'loading') {
        return <Spinner />;
    }

    const handelSearch = (event) => {
        event.preventDefault();
        const title = event.target.search.value;
        fetch(`https://infinity-toyland-server.vercel.app/searchToy/${title}`)
            .then((res) => res.json())
            .then((data) => setToys(data));
    };
    return (
        <div className="my-16">
            <h1 className="text-3xl lg:text-4xl font-bold text-center mb-10 text-primary-text">
                All Toy
            </h1>
            <DynamicTitle title="All Toy" />
            <form onSubmit={handelSearch} className="mb-5 flex items-center justify-end gap-3">
                <label className="text-primary-text font-semibold hidden lg:block">
                    Search By Title
                </label>
                <input
                    className="h-11 px-3 rounded-lg border shadow hover:shadow-lg border-slate-400"
                    type="text"
                    placeholder="Search text here"
                    name="search"
                />
                <input
                    className="bg-primary hover:bg-secondary duration-300 text-white rounded-lg h-11 text-base px-4"
                    type="submit"
                    value="Search"
                />
            </form>
            <div className="w-full overflow-x-auto">
                <Table>
                    <Table.Head>
                        <Table.HeadCell className="text-base">Toy name</Table.HeadCell>
                        <Table.HeadCell className="text-base ">Seller</Table.HeadCell>
                        <Table.HeadCell className="text-base ">Sub-Category</Table.HeadCell>
                        <Table.HeadCell className="text-base ">Price</Table.HeadCell>
                        <Table.HeadCell className="text-base ">Stock Qty</Table.HeadCell>
                        <Table.HeadCell className="text-base ">View Details</Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        {toys?.map((toy) => (
                            <AllToyTable key={toy._id} toys={toy} />
                        ))}
                    </Table.Body>
                </Table>
            </div>
        </div>
    );
}

export default AllToy;
