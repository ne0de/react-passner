/* Material UI imports */
import { Box, Button, Typography, Switch } from '@material-ui/core';

const Header = props => {
    const [changeTheme, theme] = props.args;
    return (
        <Box display="flex" p={3} alignItems="center">
            <Typography variant="h5">Passner Safety</Typography>
            <Box ml={3} >
                <Button href="/" color="secondary">Inicio</Button>
                <Button color="secondary">Productos y servicios</Button>
                <Button color="secondary">Sobre nosotros</Button>
            </Box>
            <Box flexGrow={1} textAlign="right">
                <Button href="/login" color="secondary">Mi cuenta</Button>
                <Switch color="secondary" checked={!theme} onChange={() => changeTheme(theme)} />
            </Box>
        </Box>
    )
};

export default Header;