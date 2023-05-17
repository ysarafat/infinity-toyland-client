import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layouts/Main';
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
        ],
    },
]);

export default routes;
