import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layouts/Main';
import AddToy from '../Pages/AddToy/AddToy';
import AllToy from '../Pages/AllToy/AllToy';
import Home from '../Pages/Home/Home/Home';
import Login from '../Pages/Login/Login';
import MyToys from '../Pages/MyToys/MyToys';
import Register from '../Pages/Register/Register';
import ToyDetails from '../Pages/ToyDetails/ToyDetails';
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
                path: '/toys',
                element: <AllToy />,
                loader: () => fetch('https://infinity-toyland-server.vercel.app/toys'),
            },
            {
                path: '/my-toys',
                element: (
                    <PrivateRoute>
                        <MyToys />
                    </PrivateRoute>
                ),
                loader: () => fetch('https://infinity-toyland-server.vercel.app/toys'),
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
                loader: ({ params }) =>
                    fetch(`https://infinity-toyland-server.vercel.app/toy/${params.id}`),
            },
            {
                path: '/toy-details/:id',
                element: (
                    <PrivateRoute>
                        <ToyDetails />
                    </PrivateRoute>
                ),
                loader: ({ params }) =>
                    fetch(`https://infinity-toyland-server.vercel.app/toy/${params.id}`),
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
