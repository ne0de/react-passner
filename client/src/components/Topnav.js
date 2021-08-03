/* Material UI imports */
import { Box, Button, Typography, Switch } from '@material-ui/core';
import { useContext } from 'react';
import Menu from './Menu';
import UserContext from '../context/UserContext';
import history from "../utils/history";

const Header = props => {
    const [changeTheme, theme] = props.args;
    const { user } = useContext(UserContext);

    return (
        <Box display="flex" p={3} alignItems="center">
            <Typography variant="h5">Passner Safety</Typography>
            <Switch color="secondary" checked={!theme} onChange={() => changeTheme(theme)} />
            <Box ml={3} >
                <Button onClick={() => { history.push('/') }} color="secondary">Inicio</Button>
                <Button color="secondary">Productos y servicios</Button>
                <Button color="secondary">Sobre nosotros</Button>
            </Box>
            <Box flexGrow={1} textAlign="right">
                {!user ? <>
                    <Button onClick={() => { history.push('/login') }} color="secondary">Iniciar sesión</Button>
                    <Button onClick={() => { history.push('/register') }} color="secondary">Crear cuenta</Button>
                </> : <>
                    <Menu />
                </>
                }
            </Box>
        </Box>
    )
};

export default Header;