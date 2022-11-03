import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {useMemo, useState} from "react";
import SideList from "./SideList";
import {createTheme, ThemeProvider, Tooltip} from "@mui/material";
import {Brightness4, Brightness7, Home} from "@mui/icons-material";
import {useNavigate} from "react-router-dom";


const drawerWidth = 240;


const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({theme, open}) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));


export default function Dashboard() {
    const [open, setOpen] = useState(false);
    const [dark, setDark] = useState(true);
    const [light, setLight] = useState(true)

    const lightTheme = useMemo(() => createTheme({
        palette: {
            background: {
                default: "#e8efef"
            },
            mode: light ? 'light' : 'dark',
        }
    }), [light]);

    const darkTheme = useMemo(() => createTheme({
        palette: {
            background: {
                default: "#333f3f"
            },
            mode: dark ? 'dark' : 'light',
        },
    }), [dark]);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const navigate = useNavigate()

    return (
        <ThemeProvider theme={light ? lightTheme : darkTheme}>
            <Box sx={{display: 'flex'}} >
                <CssBaseline/>
                <AppBar position="fixed" open={open}>
                    <Toolbar sx={{ bgcolor: "orange"}}>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            sx={{
                                marginRight: 5,
                                ...(open && {display: 'none'}),
                            }}
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Tooltip title="Go back to home page">
                            <IconButton sx={{ mr: 1 }} onClick={() => navigate('/')}>
                                <Home />
                            </IconButton>
                        </Tooltip>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1 }}
                        >
                            STRIDER GENERAL STORE
                        </Typography>
                            <IconButton onClick={() => setLight((prev) => !prev)}> {dark ? <Brightness7 /> : <Brightness4 />}</IconButton>
                    </Toolbar>
                </AppBar>
                <SideList {...{ open, setOpen }} />
            </Box>
        </ThemeProvider>
    );
}
