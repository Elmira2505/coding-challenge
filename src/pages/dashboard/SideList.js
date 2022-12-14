import React, {useMemo, useState} from 'react';
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {styled} from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import {ChevronLeft, Inbox, Logout, Mail, PeopleAlt, Dashboard, Inventory2, QueryStats} from "@mui/icons-material";
import {useValue} from "../../context/ContextProvider";
import {Avatar, Tooltip} from "@mui/material";
import {Route, Routes, useNavigate} from "react-router-dom";
import Orders from "./orders/Orders";
import Stats from "./Statistics/Stats";
import CustomerCards from "./customers/CustomerCards";


const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

const SideList = ({open, setOpen}) => {
    const {state:{currentUser}, dispatch} = useValue();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch({type:'UPDATE_USER', payload:null})
        navigate('/')
    }

    const [selectedLink, setSelectedLink] = useState('')

    const list = useMemo(()=>[
        {title:'Customers', icon:<PeopleAlt/>, link:'orders/customers/:CustomerId', component:<CustomerCards {...{setSelectedLink, link: 'customers'}}/>},
        {title:'Statistics', icon:<QueryStats/>, link:'stats', component:<Stats {...{setSelectedLink, link: 'stats'}}/>},
        {title:'Orders', icon:<Inventory2/>, link:'orders', component:<Orders {...{setSelectedLink, link: 'orders'}}/>},
        // {title:'Dashboard', icon:<Dashboard/>, link:'dashboard', component:<HomePage {...{setSelectedLink, link: 'dashboard'}}/>},
    ], [])

    return (
        <>
            <Drawer variant="permanent" open={open}>
                <DrawerHeader>
                    <IconButton onClick={() => setOpen(false)}>
                       <ChevronLeft />
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    {list.map(item => (
                        <ListItem key={item.title} disablePadding sx={{ display: 'block' }}>
                            <ListItemButton
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 2.5,
                                }}
                                onClick={() => navigate(item.link)}
                                selected={selectedLink === item.link}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : 'auto',
                                        justifyContent: 'center',
                                    }}
                                >
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText primary={item.title} sx={{ opacity: open ? 1 : 0 }} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <Box sx={{ mx: 'auto', mt: 3, mb: 1 }}>
                    <Tooltip title={currentUser?.name || ''}>
                        <Avatar
                            src={currentUser?.photoURL}
                            {...(open && { sx: { width: 100, height: 100 } })}
                        />
                    </Tooltip>
                </Box>
                <Box sx={{ textAlign: 'center' }}>
                    {open && <Typography>{currentUser?.name}</Typography>}
                    <Typography variant="body2">{currentUser?.role || 'role'}</Typography>
                    {open && (
                        <Typography variant="body2">{currentUser?.email}</Typography>
                    )}
                    <Tooltip title="Logout" sx={{ mt: 1 }}>
                        <IconButton onClick={handleLogout}>
                            <Logout />
                        </IconButton>
                    </Tooltip>
                </Box>
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <DrawerHeader />
                <Routes>
                    {list.map(item => (
                        <Route key={item.title} path={item.link} element={item.component}/>
                    ))}
                </Routes>

            </Box>
        </>
    );
};

export default SideList;