import Header from '../components/Header';
import { Container } from '@mui/material';

const Layout = (props) => {
  return (
    <>
      <Header />
      <Container maxWidth="lg" sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '60vh',
      }}>
        {props.children}
      </Container>
      {/* COLOCAR FOOTER CON MI FIRMA */}
    </>
  );
};

export default Layout;
