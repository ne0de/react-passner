/* Material UI imports */
import { Container, Box, Typography } from '@material-ui/core';

const Home = () => {
  return (
    <Container maxWidth="lg" bgcolor="black">
      <Box my={7}>
        <Typography variant="h3" component="h1" align="center" gutterBottom>
          Gestiona y administra tus contraseñas
        </Typography>
        <Typography variant="h6" component="h1" align="center" gutterBottom>
          Te facilitamos el uso de tus contraseñas de la forma más segura en un depósito cifrado en línea
        </Typography>
      </Box>
    </Container>
  )
};

export default Home;