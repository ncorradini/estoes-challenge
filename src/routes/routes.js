import { useRoutes, Navigate } from 'react-router-dom';
import App from '../App';
import Form from '../components/Form';

const Routing = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <App />,
      children: [
        { path: '/create', element: <Form /> },
      ],
    },
    { path: '*', element: <Navigate to="/" /> },
  ]);

  return routes;
};

export default Routing;
