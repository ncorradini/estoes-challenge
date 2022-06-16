import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import TableProyects from './components/TableProyects';
import Form from './components/Form';

const App = () => {
  return (
    <Layout>
      {location.pathname === '/' && <TableProyects />}
      <Routes>
        <Route path="/create" element={<Form />} />
      </Routes>
    </Layout>
  );
};

export default App;
