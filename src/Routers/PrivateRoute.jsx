import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

function PrivateRoute({ children }) {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <h1> Hello</h1>;
    }
    if (user) {
        return children;
    }
    return <Navigate state={{ from: location }} to="/login" replace />;
}

export default PrivateRoute;
