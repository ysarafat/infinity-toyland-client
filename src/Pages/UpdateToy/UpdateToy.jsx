import React from 'react';

function UpdateToy() {
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
        console.log(toy);
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
                        type="number"
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
                        type="number"
                        name="qty"
                        placeholder="Enter Stock Quantity"
                    />

                    <input
                        className="w-full h-11 px-3 rounded-lg border shadow hover:shadow-lg border-slate-100"
                        type="number"
                        name="rating"
                        placeholder="Enter Toy Rating"
                    />
                </div>

                <textarea
                    cols="20"
                    rows="10"
                    className="w-full  px-3 rounded-lg border shadow hover:shadow-lg border-slate-100"
                    type="text"
                    name="details"
                    placeholder="Enter Toy Description"
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
