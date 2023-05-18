import React from 'react';
import { useLoaderData } from 'react-router-dom';

function AllToy() {
    const toys = useLoaderData();
    console.log(toys);
    return (
        <div>
            hel
            <h1>okk</h1>
        </div>
    );
}

export default AllToy;
