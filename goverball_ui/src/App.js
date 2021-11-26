import * as React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Landing from "./Landing";
import { mainListItems } from './listItems';
import './App.css';

const goverballTheme = createTheme({
    /*typography: {
      fontFamily: [
          'Vollkorn', 'serif',
          'Teko',
          'sans-serif'
      ].join(','),
  },*/
  palette: {
    type: 'light',
    primary: {
      main: '#f8b033',
    },
    secondary: {
      main: '#e05141',
    },
  },
});


function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" to="/">
                Goverball
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
    );
}

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
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

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        '& .MuiDrawer-paper': {
            position: 'relative',
            whiteSpace: 'nowrap',
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
            boxSizing: 'border-box',
            ...(!open && {
                overflowX: 'hidden',
                transition: theme.transitions.create('width', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,
                }),
                width: theme.spacing(7),
                [theme.breakpoints.up('sm')]: {
                    width: theme.spacing(9),
                },
            }),
        },
    }),
);

function App() {
    const [open, setOpen] = React.useState(false);
    const toggleDrawer = () => {
        setOpen(!open);
    };
    return (
        <ThemeProvider theme={goverballTheme}>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar position="absolute" open={open}>
                    <Toolbar
                    sx={{
                        pr: '24px', // keep right padding when drawer closed
                    }}
                >
                        <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={toggleDrawer}
                        sx={{
                            marginRight: '36px',
                            ...(open && { display: 'none' }),
                        }}
                    >
                            <MenuIcon />
                        </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open={open}>
                <Toolbar
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    px: [1],
                }}
            >
                    <IconButton onClick={toggleDrawer}>
                        <ChevronLeftIcon />
                    </IconButton>
                </Toolbar>
                <Divider />
                <List>{mainListItems}</List>
            </Drawer>
            <Box
            component="main"
            sx={{
                backgroundColor: (theme) =>
                theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
                flexGrow: 1,
                height: '100vh',
                overflow: 'auto',
            }}
        >
                <Toolbar />
                <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                    <div className="App">
                        <Routes>
                            <Route path="/" element={<Home theme={goverballTheme} />} />
                            <Route path="about" element={<About />} />
                        </Routes>
                    </div>
                    <Copyright sx={{ pt: 4 }} />
                </Container>
            </Box>
        </Box>
    </ThemeProvider>
    );
}

function Home(props) {
    return (
        <>
        <ThemeProvider theme={props.theme}>
            <Landing />
        </ThemeProvider>
        </>
    );
}

function About() {
    return (
        <>
        <main>
            <h2>Who are we?</h2>
            <p>
                Nothing more than concerned citizens. In a sick nation that is incapable of progressing in any direction, we seek only to mobilize voters to give a d*mn. Mainstream media profits off of dividing us wth an "us versus them" narrative. They want us to believe in an imaginary battle between of extremists so as to scapegoat our issues on one class of people. We reject this depiction, and instead seek to promote a population of passionate moderates who simply want to see a break from the modern political stalemate.
            </p>
            <p>
                Goverball's mission is to not to offer any commentary on the issues plaguing this country. Instead, we seek to make it painfully easy to see what is going on, what has led us to this point. and what our trajectory is. We seek to do this by recording the votes of every individual lawmaker, getting feedback from those lawmakers' constituents, and watching events unfold as the people gain an understanding of the influence they really have.
            </p>
        </main>
        <nav>
            <Link to="/">Home</Link>
        </nav>
        </>
    );
}

export default App;
