/* Material UI imports */
import { Container, Box, Typography, Button } from '@material-ui/core';
import history from "../utils/history";

const NotFound = () => {
    return (
        <Container maxWidth="lg" bgcolor="black">
            <Box my={7} align="center">
                <Typography color="error" variant="h3" component="h1" gutterBottom> Error 404 </Typography>
                <Typography variant="h6" component="h1" gutterBottom> La página que está buscando no existe </Typography>
                <Button onClick={() => { history.push('/') }} color="secondary" margin="dense">Volver al inicio</Button>
            </Box>
        </Container>
    )
};

export default NotFound;