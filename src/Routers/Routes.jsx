import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layouts/Main';
import AddToy from '../Pages/AddToy/AddToy';
import Home from '../Pages/Home/Home/Home';

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
                element: <AddToy />,
            },
        ],
    },
]);

export default routes;
