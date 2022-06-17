import Header from '../components/Header';
import { Container, ThemeProvider } from '@mui/material';
import theme from './theme';

const Layout = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Container sx={{
        display: 'flex',
        justifyContent: 'center',
      }}>
        {props.children}
      </Container>
      {/* COLOCAR FOOTER CON MI FIRMA */}
    </ThemeProvider>
  );
};

export default Layout;
