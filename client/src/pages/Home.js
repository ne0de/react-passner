/* Material UI imports */
import { Container, Box, Grid, Typography } from '@material-ui/core';

const Home = () => {
  return (
    <Container maxWidth="lg" bgcolor="black">
      <Box my={8} >
        <Typography variant="h3" component="h1" align="center" gutterBottom>
          Gestiona y administra tus contraseñas
        </Typography>
        <Typography variant="h6" component="h1" align="center" gutterBottom>
          Te facilitamos el uso de tus contraseñas de la forma más segura en un depósito cifrado en línea
        </Typography>
      </Box>
      <Box p={5}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <img src="https://www.gb-advisors.com/wp-content/uploads/2019/11/computer-1591018_1920-1.jpg" style={{
              'width': '100%',
              'height': 'auto', 'border-radius': '20%'
            }} alt="" srcset="" />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h5" component="h1" align="center" color="textPrimary" gutterBottom>
              ¿Te cuesta recordar contraseñas?
            </Typography>
            <Box my={3}>
              <Typography variant="subtitle1" align="center" display="block" color="textSecondary" gutterBottom>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod totam omnis cum assumenda magnam, iste deleniti voluptate ipsa fuga quos sit libero natus, error corrupti molestiae rerum nulla eveniet! Tempore.
              </Typography>
            </Box>

          </Grid>
        </Grid>
      </Box>
    </Container >
  )
};

export default Home;