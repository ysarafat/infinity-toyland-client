import React from 'react';
import { useLoaderData } from 'react-router-dom';

function UpdateToy() {
    const toyData = useLoaderData();
    const { _id, name, category, price, image, qty, description, rating } = toyData;
    const handelUpdateToy = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const category = form.category.value;

        const price = form.price.value;
        const rating = form.rating.value;
        const qty = form.qty.value;
        const description = form.details.value;
        const image = form.image.value;
        const toy = {
            name,
            category,
            price,
            rating,
            qty,
            image,
            description,
        };
        fetch(`http://localhost:5000/my-toys/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(toy),
        })
            .then((res) => res.json())
            .then((data) => console.log(data));
    };
    return (
        <div className="mt-10">
            <form
                onSubmit={handelUpdateToy}
                className="flex flex-col gap-4 lg:gap-6 border border-slate-200 p-4 lg:p-8 rounded-lg bg-[#f1f5f9]"
                action=""
            >
                <div className="flex gap-4 lg:gap-6 items-center flex-col lg:flex-row">
                    <input
                        className="w-full h-11 px-3 rounded-lg border shadow hover:shadow-lg border-slate-100"
                        type="text"
                        name="name"
                        placeholder="Enter Toy Name"
                        defaultValue={name}
                    />

                    <input
                        className="w-full h-11 px-3 rounded-lg border shadow hover:shadow-lg border-slate-100"
                        type="text"
                        name="category"
                        placeholder="Enter Toy Category"
                        defaultValue={category}
                    />
                </div>

                <div className="flex gap-4 lg:gap-6 items-center flex-col lg:flex-row">
                    <input
                        className="w-full h-11 px-3 rounded-lg border shadow hover:shadow-lg border-slate-100"
                        type="number"
                        name="price"
                        placeholder="Enter Price"
                        defaultValue={price}
                    />

                    <input
                        className="w-full h-11 px-3 rounded-lg border shadow hover:shadow-lg border-slate-100"
                        type="url"
                        name="image"
                        placeholder="Enter Toy Image URL"
                        defaultValue={image}
                    />
                </div>
                <div className="flex gap-4 lg:gap-6 items-center flex-col lg:flex-row">
                    <input
                        className="w-full h-11 px-3 rounded-lg border shadow hover:shadow-lg border-slate-100"
                        type="number"
                        name="qty"
                        placeholder="Enter Stock Quantity"
                        defaultValue={qty}
                    />

                    <input
                        className="w-full h-11 px-3 rounded-lg border shadow hover:shadow-lg border-slate-100"
                        type="number"
                        name="rating"
                        placeholder="Enter Toy Rating"
                        defaultValue={rating}
                    />
                </div>

                <textarea
                    cols="20"
                    rows="10"
                    className="w-full  px-3 rounded-lg border shadow hover:shadow-lg border-slate-100"
                    type="text"
                    name="details"
                    placeholder="Enter Toy Description"
                    defaultValue={description}
                />
                <input
                    className="w-full bg-primary hover:bg-secondary duration-300 text-white rounded-lg h-11 text-lg"
                    type="submit"
                    value="Update Toy"
                />
            </form>
        </div>
    );
}

export default UpdateToy;
