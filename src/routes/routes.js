import { useRoutes, Navigate } from 'react-router-dom';
import Form from '../components/Form';
import TableProyects from '../components/TableProyects';

const Routing = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <TableProyects />,
    },
    {
      path: '/create',
      element: <Form />,
    },
    {
      path: '/edit',
      element: <Form />,
    },
    { path: '*', element: <Navigate to="/" /> },
  ]);

  return routes;
};

export default Routing;
