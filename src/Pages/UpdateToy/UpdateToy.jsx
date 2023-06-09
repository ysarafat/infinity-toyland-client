import React, { useState } from 'react';
import { ScrollRestoration, useLoaderData, useNavigation } from 'react-router-dom';
import Swal from 'sweetalert2';
import DynamicTitle from '../../Components/DynamicTitle/DynamicTitle';
import Spinner from '../../Components/Spinner/Spinner';

export const options = (
    <>
        <option value="Science Kits">Science Kits</option>
        <option value="Engineering Kits">Engineering Kits</option>
        <option value="Math Learning Toys">Math Toy</option>
    </>
);
function UpdateToy() {
    const [error, setError] = useState('');
    const toyData = useLoaderData();
    const navigation = useNavigation();
    const { _id, name, category, price, image, qty, description, rating } = toyData;
    console.log(toyData);
    const handelUpdateToy = (e) => {
        setError('');
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const category = form.category.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const qty = form.qty.value;
        const description = form.details.value;
        const image = form.image.value;
        const priceValue = parseFloat(price);
        if (rating > 5 || rating < 0) {
            return setError('Sorry!!! Rating must be out of 5');
        }
        if (price < 0) {
            return setError('Sorry!!! Price value cannot be negative');
        }
        if (qty < 0) {
            return setError('Sorry!!! Stock Quantity value cannot be negative');
        }
        const toy = {
            name,
            category,
            price: priceValue,
            rating,
            qty,
            image,
            description,
        };
        fetch(`https://infinity-toyland-server.vercel.app/my-toys/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(toy),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.acknowledged === true) {
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Toy Update Successful',
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }
                console.log(data);
            });
    };
    window.scrollTo(0, 0);
    if (navigation.state === 'loading') {
        return <Spinner />;
    }

    return (
        <div className="my-10">
            <ScrollRestoration />
            <h1 className="text-3xl lg:text-4xl font-bold text-center mb-10 text-primary-text">
                Update Toy
            </h1>

            <DynamicTitle title="Update Toy" />
            <form
                onSubmit={handelUpdateToy}
                className="flex flex-col gap-4 lg:gap-6 border border-slate-200 p-4 lg:p-8 rounded-lg bg-[#f1f5f9]"
                action=""
            >
                {error && (
                    <p className="text-lg font-semibold text-red-500 text-center">⚠️ {error}</p>
                )}
                <div className="flex gap-4 lg:gap-6 items-center flex-col lg:flex-row">
                    <input
                        className="w-full h-11 px-3 rounded-lg border shadow hover:shadow-lg border-slate-100"
                        type="text"
                        name="name"
                        placeholder="Enter Toy Name"
                        defaultValue={name}
                    />

                    <select
                        className="w-full h-11 px-3 rounded-lg border shadow hover:shadow-lg border-slate-100"
                        name="category"
                        defaultValue={category}
                    >
                        {options}
                    </select>
                </div>

                <div className="flex gap-4 lg:gap-6 items-center flex-col lg:flex-row">
                    <input
                        className="w-full h-11 px-3 rounded-lg border shadow hover:shadow-lg border-slate-100"
                        type="number"
                        name="price"
                        step="any"
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
                        step="any"
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
