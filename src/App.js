import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import TableProyects from './components/TableProyects';
import Form from './components/Form';

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route exact path="/" element={<TableProyects />} />
        <Route exact path="/create" element={<Form />} />
        <Route exact path="/edit" element={<Form />} />
      </Routes>
    </Layout>
  );
};

export default App;
