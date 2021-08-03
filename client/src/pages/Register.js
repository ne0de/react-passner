/* Material UI imports */
import { Container, Button, Link, TextField, Box, Typography, Grid } from '@material-ui/core';

/* Form helper */
import useForm from "../hooks/useForm";

const Register = () => {
    const [handleChange, handleSubmit] = useForm();

    return (
        <Container maxWidth="xl" bgcolor="black">
            <Box display="flex" p={6} alignItems="center">
                <Grid container spacing={1}>
                    <Grid item xs={7}>
                        <Typography variant="h3" component="h1" align="center" gutterBottom> Crear una cuenta </Typography>
                        <Typography variant="h6" component="h1" align="center" gutterBottom> Necesitas una cuenta para acceder a nuestras funciones </Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Box display="flex" justifyContent="center"> <Typography variant="h5" component="h1" align="left" gutterBottom> Formulario    </Typography> </Box>
                        <form onChange={e => handleChange(e)} onSubmit={e => handleSubmit(e, 'register')}>
                            <TextField
                                variant="outlined"
                                margin="dense"
                                fullWidth
                                required
                                id="email"
                                label="Correo electrónico"
                                name="email"
                                autoComplete="email"
                                autoFocus
                            />
                            <TextField
                                variant="outlined"
                                margin="dense"
                                required
                                fullWidth
                                id="password"
                                label="Contraseña"
                                type="password"
                                name="password"
                                autoComplete="password"
                                autoFocus
                            />
                            <Box display="flex" mt={4} justifyContent="center">
                                <Grid spacing={2} container>
                                    <Grid item xs={12}><Button type="submit" m={3} fullWidth variant="contained" color="secondary" > Registrarme </Button></Grid>
                                    <Grid item xs={12}> <Link href="/login" color="secondary" variant="body2"> ¿Ya tienes cuenta? Inicia sesión aquí. </Link> </Grid>
                                 </Grid>
                            </Box>
                        </form>
                    </Grid>
                </Grid>
            </Box>
        </Container >
    )
};

export default Register;