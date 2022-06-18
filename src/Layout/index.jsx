import Header from '../components/Header';
import { Container, ThemeProvider } from '@mui/material';
import theme from './theme';
import Footer from '../components/Footer';

const Layout = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Container sx={{
        display: 'flex',
        justifyContent: 'center',
        maxWidthXs: '100%',
        px: 0,
      }}>
        {props.children}
      </Container>
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
