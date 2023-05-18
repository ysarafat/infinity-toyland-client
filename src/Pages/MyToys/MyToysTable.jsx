import { Table } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

function MyToysTable({ toys }) {
    const { name, image, category, sellerName, price, rating, description, qty, _id } = toys;

    const handelDelete = (_id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://infinity-toyland-server.vercel.app/my-toys/${_id}`, {
                    method: 'DELETE',
                })
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                position: 'top-center',
                                icon: 'success',
                                title: 'Toy Delete successfully',
                                showConfirmButton: false,
                                timer: 1500,
                            });
                        }
                    });
            }
        });
    };
    return (
        <Table.Row className="bg-white  dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className=" text-gray-900 dark:text-white">
                <img className="max-w-20 max-h-20" src={image} alt="" />
            </Table.Cell>
            <Table.Cell>
                <div>
                    <h3 className="text-lg text-primary-text">{name}</h3>
                    <p className="text-base text-secondary-text">Category: {category}</p>
                    <p className="text-base text-secondary-text">Seller: {sellerName}</p>
                </div>
            </Table.Cell>
            <Table.Cell className="text-base text-secondary-text text-center ">${price}</Table.Cell>
            <Table.Cell className="text-base text-secondary-text text-center  ">
                {rating}
            </Table.Cell>
            <Table.Cell className="text-base text-secondary-text text-center  ">{qty}</Table.Cell>
            <Table.Cell className=" text-lg text-secondary-text">
                {description.slice(0, 50)}...
            </Table.Cell>
            <Table.Cell className="">
                <Link to={`/update-toy/${_id}`}>
                    <button className=" text-primary h-8 px-4  hover:underline text-base">
                        Edit
                    </button>
                </Link>
                <button
                    onClick={() => handelDelete(_id)}
                    className="  text-red-500 h-8 px-4   hover:underline text-base"
                >
                    Delete
                </button>
            </Table.Cell>
        </Table.Row>
    );
}

export default MyToysTable;
