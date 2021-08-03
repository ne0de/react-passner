import { useContext, useState } from "react";
import { MenuItem, Menu, Button } from '@material-ui/core';
import UserContext from '../context/UserContext';
import history from "../utils/history";

export default function SimpleMenu() {
    const [anchorEl, setAnchorEl] = useState(null);
    const { user, handleLogout } = useContext(UserContext)
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button aria-controls="simple-menu" color="secondary" aria-haspopup="true" onClick={handleClick}> {user.email}
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={() => { history.push('/profile') }}>Perfil</MenuItem>
                <MenuItem onClick={() => { history.push('/configuracion') }}>Configuración</MenuItem>
                <MenuItem onClick={handleLogout}>Cerrar Sesión</MenuItem>
            </Menu>
        </div>
    );
}