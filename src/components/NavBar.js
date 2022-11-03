import React from 'react';
import {AppBar, Box, Button, Container, IconButton, Toolbar, Typography} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import {Lock} from "@mui/icons-material";
import photoURL from '../images/photo1.jpg'
import UserIcon from './user/UserIcon'
import {useValue} from "../context/ContextProvider";


const user ={ name:'Name', email:'email@gmail.com', photoURL}

const NavBar = () => {
    const {
        state: { currentUser },
        dispatch,
    } = useValue();
    return (
        <AppBar sx={{ bgcolor: "orange"}}>
            <Container maxWidth='lg' >
                <Toolbar disableGutters >
                    <Box>
                        <IconButton size='large' color='inherit'>
                            <MenuIcon/>
                        </IconButton>
                    </Box>
                    <Typography variant='h6' component="h1" noWrap
                    sx={{flexGrow:1, display:{xs:'none', md:'flex'}}}>
                        Strider General Store
                    </Typography>
                    <Typography variant='h6' component="h1" noWrap
                                sx={{flexGrow:1, display:{xs:'flex', md:'none'}}}>
                        Strider General Store
                    </Typography>
                    {!currentUser ? (
                        <Button color="inherit" startIcon={<Lock />}
                    onClick={() => dispatch({type: 'UPDATE_USER', payload: user})}>
                        Login
                    </Button>): (
                        <UserIcon />
                    )}
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default NavBar;