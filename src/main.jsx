import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import AuthProviders from './Providers/AuthProvider';
import routes from './Routers/Routes';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <AuthProviders>
            <RouterProvider router={routes} />
        </AuthProviders>
    </React.StrictMode>
);
