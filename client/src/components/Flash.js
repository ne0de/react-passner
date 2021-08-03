/* Material UI imports */
import { Snackbar } from '@material-ui/core';
import { Alert } from "@material-ui/lab";

const Flash = props => {
    const [visibility, closeMessage] = props.args;
    const flash = JSON.parse(localStorage.getItem('flash-message'))
    return (
        "flash-message" in localStorage ?
            <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                open={visibility}
                onClose={closeMessage}
                autoHideDuration={10000} >
                <Alert variant="filled" severity={flash.type}> {flash.message} </Alert>
            </Snackbar>
            : <></>
    )
};

export default Flash;