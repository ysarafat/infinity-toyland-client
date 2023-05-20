import React from 'react';
import { Helmet } from 'react-helmet';

function DynamicTitle({ title }) {
    return (
        <Helmet>
            <title>Infinity Toyland | {title}</title>
        </Helmet>
    );
}

export default DynamicTitle;
