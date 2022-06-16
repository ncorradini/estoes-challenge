import Header from '../components/Header';
import { Container } from '@mui/material';

const Layout = (props) => {
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        {props.children}
      </Container>
      {/* COLOCAR FOOTER CON MI FIRMA */}
    </>
  );
};

export default Layout;
