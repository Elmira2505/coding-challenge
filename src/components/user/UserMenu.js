import React from 'react';
import {ListItemIcon, Menu, MenuItem} from "@mui/material";
import {Dashboard, Logout, Settings} from "@mui/icons-material";
import {useValue} from "../../context/ContextProvider";
import {useNavigate} from "react-router-dom";

const UserMenu = ({anchorUserMenu, setAnchorUserMenu}) => {
    const {dispatch} = useValue()

    const handleCloseUserMenu = () => {
        setAnchorUserMenu(null);
    };

    const navigate= useNavigate();

    return (
        <Menu
            anchorEl={anchorUserMenu}
            open={Boolean(anchorUserMenu)}
            onClose={handleCloseUserMenu}
            onClick={handleCloseUserMenu}
        >
            <MenuItem>
                <ListItemIcon>
                    <Settings fontSize="small"/>
                </ListItemIcon>
                Profile
            </MenuItem>
            <MenuItem onClick={() => navigate('dashboard')}>
                <ListItemIcon>
                    <Dashboard fontSize="small"/>
                </ListItemIcon>
                Dashboard
            </MenuItem>
            <MenuItem onClick={() => dispatch({type: 'UPDATE_USER', payload: null})}>
                <ListItemIcon>
                    <Logout fontSize="small"/>
                </ListItemIcon>
                Logout
            </MenuItem>
        </Menu>
    );
};

export default UserMenu;