/* Material UI imports */
import { Container, Button, Link, TextField, Box, Typography, Grid } from '@material-ui/core';

/* Form helper */
import useForm from "../hooks/useForm";

const Login = () => {
    const [handleChange, handleSubmit] = useForm();

    return (
        <Container maxWidth="xl" bgcolor="black">
            <Box display="flex" p={6} alignItems="center">
                <Grid container spacing={1}>
                    <Grid item xs={7}>
                        <Typography variant="h3" component="h1" align="center" gutterBottom> Bienvenid@ a Passner </Typography>
                        <Typography variant="h6" component="h1" align="center" gutterBottom> Para acceder a nuestras funcionalidades inicia la sesión aquí </Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Box display="flex" justifyContent="center"> <Typography variant="h5" component="h1" align="left" gutterBottom> Inicia sesión  </Typography> </Box>
                        <form onChange={e => handleChange(e)} onSubmit={e => handleSubmit(e)}>
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
                                    <Grid item xs={12}><Button type="submit" m={3} fullWidth variant="contained" color="secondary" > Iniciar sesión </Button></Grid>
                                    <Grid item xs={12}> <Link href="/" color="secondary" variant="body2"> ¿Has olvidado tu contraseña? </Link> </Grid>
                                    <Grid item xs> <Link href="#" color="secondary" variant="body2"> {"¿No posees una cuenta? Registrate aquí."} </Link> </Grid>
                                </Grid>
                            </Box>
                        </form>
                    </Grid>
                </Grid>
            </Box>
        </Container >
    )
};

export default Login;