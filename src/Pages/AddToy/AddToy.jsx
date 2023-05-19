/* eslint-disable consistent-return */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext, useState } from 'react';
import { useNavigation } from 'react-router-dom';
import Swal from 'sweetalert2';
import Spinner from '../../Components/Spinner/Spinner';
import { AuthContext } from '../../Providers/AuthProvider';
import { options } from '../UpdateToy/UpdateToy';

function AddToy() {
    const { user } = useContext(AuthContext);
    const [error, setError] = useState('');
    const handelToyListing = (e) => {
        setError('');
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
        if (rating > 5) {
            return setError('Sorry!!! Rating must be out of 5');
        }
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
        fetch('https://infinity-toyland-server.vercel.app/toys', {
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
    console.log(error);
    const navigate = useNavigation();
    if (navigate.state === 'loading') {
        return <Spinner />;
    }
    return (
        <div className="mt-10">
            <form
                onSubmit={handelToyListing}
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
                        required
                    />

                    <select
                        className="w-full h-11 px-3 rounded-lg border shadow hover:shadow-lg border-slate-100"
                        name="category"
                        required
                    >
                        {options}
                    </select>
                </div>
                <div className="flex gap-4 lg:gap-6 items-center flex-col lg:flex-row">
                    <input
                        className="w-full h-11 px-3 rounded-lg border shadow hover:shadow-lg border-slate-100"
                        type="text"
                        name="sellerName"
                        placeholder="Enter Seller Name"
                        required
                        defaultValue={user.displayName}
                        title="you can  not change your name"
                        readOnly
                    />

                    <input
                        className="w-full h-11 px-3 rounded-lg border shadow hover:shadow-lg border-slate-100"
                        type="Email"
                        name="sellerEmail"
                        placeholder="Enter Seller Email"
                        required
                        defaultValue={user.email}
                        title="you can  not change your email address"
                        readOnly
                    />
                </div>
                <div className="flex gap-4 lg:gap-6 items-center flex-col lg:flex-row">
                    <input
                        className="w-full h-11 px-3 rounded-lg border shadow hover:shadow-lg border-slate-100"
                        type="number"
                        name="price"
                        placeholder="Enter Price"
                        required
                    />

                    <input
                        className="w-full h-11 px-3 rounded-lg border shadow hover:shadow-lg border-slate-100"
                        type="url"
                        name="image"
                        placeholder="Enter Toy Image URL"
                        required
                    />
                </div>
                <div className="flex gap-4 lg:gap-6 items-center flex-col lg:flex-row">
                    <input
                        className="w-full h-11 px-3 rounded-lg border shadow hover:shadow-lg border-slate-100"
                        type="number"
                        name="qty"
                        placeholder="Enter Stock Quantity"
                        required
                    />

                    <input
                        className="w-full h-11 px-3 rounded-lg border shadow hover:shadow-lg border-slate-100"
                        type="number"
                        name="rating"
                        placeholder="Enter Toy Rating"
                        required
                    />
                </div>

                <textarea
                    cols="20"
                    rows="10"
                    className="w-full  px-3 rounded-lg border shadow hover:shadow-lg border-slate-100"
                    type="text"
                    name="details"
                    placeholder="Enter Toy Description"
                    required
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
