import React from 'react';
import { Bars } from 'react-loader-spinner';

function Spinner() {
    return (
        <div className="flex justify-center items-center min-h-[calc(100vh-73px)]">
            <Bars
                height="110"
                width="110"
                color="#5057FE"
                ariaLabel="bars-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible
            />
        </div>
    );
}

export default Spinner;
