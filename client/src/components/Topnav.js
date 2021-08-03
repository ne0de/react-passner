/* Material UI imports */
import { Box, Button, Typography, Switch } from '@material-ui/core';
import { useContext } from 'react';
import UserContext from '../context/UserContext';

const Header = props => {
    const [changeTheme, theme] = props.args;
    const { user, handleLogout } = useContext(UserContext);

    return (
        <Box display="flex" p={3} alignItems="center">
            <Typography variant="h5">Passner Safety</Typography>
            <Box ml={3} >
                <Button href="/" color="secondary">Inicio</Button>
                <Button color="secondary">Productos y servicios</Button>
                <Button color="secondary">Sobre nosotros</Button>
            </Box>
            <Box flexGrow={1} textAlign="right">
                {!user ? <>
                    <Button href="/login" color="secondary">Iniciar sesión</Button>
                    <Button href="/register" color="secondary">Crear cuenta</Button>
                </> : <Button onClick={handleLogout} color="secondary">Cerrar sesión</Button>}

                <Switch color="secondary" checked={!theme} onChange={() => changeTheme(theme)} />
            </Box>
        </Box>
    )
};

export default Header;