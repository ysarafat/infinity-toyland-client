import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layouts/Main';
import AddToy from '../Pages/AddToy/AddToy';
import Home from '../Pages/Home/Home/Home';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import UpdateToy from '../Pages/UpdateToy/UpdateToy';
import PrivateRoute from './PrivateRoute';

const routes = new createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/add-toy',
                element: (
                    <PrivateRoute>
                        <AddToy />
                    </PrivateRoute>
                ),
            },
            {
                path: '/update-toy',
                element: <UpdateToy />,
            },
            {
                path: '/register',
                element: <Register />,
            },
            {
                path: '/login',
                element: <Login />,
            },
        ],
    },
]);

export default routes;
