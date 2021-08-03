/* Material UI imports */
import { Container, Box, Typography } from '@material-ui/core';
import { useContext } from 'react';
import UserContext from '../context/UserContext';

const Profile = () => {
    const { user } = useContext(UserContext);
    return (
        <Container maxWidth="lg" bgcolor="black">
            {user ?
                <Box my={7}>
                    <Typography variant="h3" component="h1" align="center" gutterBottom>
                        {user ? user.email : 'Cargando..'}                </Typography>
                    <Typography variant="h6" component="h1" align="center" gutterBottom>
                        Te facilitamos el uso de tus contraseñas de la forma más segura en un depósito cifrado en línea
                    </Typography>
                </Box>
                : <Typography variant="h3" component="h1" align="center" gutterBottom> Sesión caducada.. </Typography>}
        </Container>
    )
};

export default Profile;