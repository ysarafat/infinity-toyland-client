/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import Swal from 'sweetalert2';

function AddToy() {
    const handelToyListing = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const category = form.category.value;
        const sellerName = form.sellerName.value;
        const sellerEmail = form.sellerEmail.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const qty = form.qty.value;
        const description = form.details.value;
        const image = form.image.value;
        const toy = {
            name,
            category,
            sellerName,
            sellerEmail,
            price,
            rating,
            qty,
            image,
            description,
        };
        console.log(toy);

        // send toy data to server
        fetch('http://localhost:5000/toys', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(toy),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Toy Added Successful',
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }
            });
    };
    return (
        <div className="mt-10">
            <form
                onSubmit={handelToyListing}
                className="flex flex-col gap-4 lg:gap-6 border border-slate-200 p-4 lg:p-8 rounded-lg bg-[#f1f5f9]"
                action=""
            >
                <div className="flex gap-4 lg:gap-6 items-center flex-col lg:flex-row">
                    <input
                        className="w-full h-11 px-3 rounded-lg border shadow hover:shadow-lg border-slate-100"
                        type="text"
                        name="name"
                        placeholder="Enter Toy Name"
                    />

                    <input
                        className="w-full h-11 px-3 rounded-lg border shadow hover:shadow-lg border-slate-100"
                        type="text"
                        name="category"
                        placeholder="Enter Toy Category"
                    />
                </div>
                <div className="flex gap-4 lg:gap-6 items-center flex-col lg:flex-row">
                    <input
                        className="w-full h-11 px-3 rounded-lg border shadow hover:shadow-lg border-slate-100"
                        type="text"
                        name="sellerName"
                        placeholder="Enter Seller Name"
                    />

                    <input
                        className="w-full h-11 px-3 rounded-lg border shadow hover:shadow-lg border-slate-100"
                        type="Email"
                        name="sellerEmail"
                        placeholder="Enter Seller Email"
                    />
                </div>
                <div className="flex gap-4 lg:gap-6 items-center flex-col lg:flex-row">
                    <input
                        className="w-full h-11 px-3 rounded-lg border shadow hover:shadow-lg border-slate-100"
                        type="text"
                        name="price"
                        placeholder="Enter Price"
                    />

                    <input
                        className="w-full h-11 px-3 rounded-lg border shadow hover:shadow-lg border-slate-100"
                        type="url"
                        name="image"
                        placeholder="Enter Toy Image URL"
                    />
                </div>
                <div className="flex gap-4 lg:gap-6 items-center flex-col lg:flex-row">
                    <input
                        className="w-full h-11 px-3 rounded-lg border shadow hover:shadow-lg border-slate-100"
                        type="text"
                        name="qty"
                        placeholder="Enter Stock Quantity"
                    />

                    <input
                        className="w-full h-11 px-3 rounded-lg border shadow hover:shadow-lg border-slate-100"
                        type="text"
                        name="rating"
                        placeholder="Enter Toy Rating"
                    />
                </div>

                <textarea
                    cols="60"
                    className="w-full h-11 px-3 rounded-lg border shadow hover:shadow-lg border-slate-100"
                    type="text"
                    name="details"
                    placeholder="Enter Toy Description"
                />
                <input
                    className="w-full bg-primary hover:bg-secondary duration-300 text-white rounded-lg h-11 text-lg"
                    type="submit"
                    value="Add Toy"
                />
            </form>
        </div>
    );
}

export default AddToy;
