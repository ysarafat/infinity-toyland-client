import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layouts/Main';
import AddToy from '../Pages/AddToy/AddToy';
import Home from '../Pages/Home/Home/Home';
import Login from '../Pages/Login/Login';
import MyToys from '../Pages/MyToys/MyToys';
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
                path: '/my-toys',
                element: (
                    <PrivateRoute>
                        <MyToys />
                    </PrivateRoute>
                ),
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
                path: '/update-toy/:id',
                element: <UpdateToy />,
                loader: ({ params }) => fetch(`http://localhost:5000/toy/${params.id}`),
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
