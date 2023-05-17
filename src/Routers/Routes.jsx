import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layouts/Main';

const routes = new createBrowserRouter([
    {
        path: '/',
        element: <Main />,
    },
]);

export default routes;
