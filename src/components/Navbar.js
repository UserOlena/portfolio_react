import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Navigation } from '../components';
import { navBarBg } from '../assets/img';

export function Navbar() {
    const pages = ['About Me', 'Portfolio', 'Contact', 'Resume'];
    const [chosenTab, setChosenTab] = useState('About Me');
    const [anchorElNav, setAnchorElNav] = useState(null);

    function handleOpenNavMenu(event) {
        setAnchorElNav(event.currentTarget);
    };
    
    function handleCloseNavMenu() {
        setAnchorElNav(null);
    };

    function handleNavMenuClick(page) {
        setChosenTab(page);
        handleCloseNavMenu();
    }

    console.log('anchor ' + anchorElNav)
    console.log('chosen tab main ' + chosenTab)

    return (
        <div
            style={{
                display: 'flex',
                flexFlow: 'column',
                width: '100%',
            }}
        >
            <AppBar
                position="static"
                sx={{
                    backgroundColor: '#ffffff',
                    backgroundImage: 'url(' + navBarBg + ')',
                    zIndex: 1,
                    position: 'sticky',
                    top: 0,
                }}
            >
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.2rem',
                                color: 'inherit',
                                textDecoration: 'none',
                                textShadow: '2px 1px 1px #3b0c34',
                                fontSize: 'calc(10px + (26 - 10) * ((100vw - 300px) / (1600 - 300)))',
                            }}
                        >
                            Olena Pashchenko
                        </Typography>
                        <Box sx={{
                            flexGrow: 1,
                            display: { xs: 'flex', md: 'none' }
                        }}
                        >
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                {pages.map((page) => (
                                    <MenuItem 
                                        key={page} 
                                        value={page}
                                        name={page}
                                        onClick={() => handleNavMenuClick(page)}
                                    >
                                        <Typography textAlign="center" >
                                            {page}
                                        </Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        <Box sx={{
                            flexGrow: 1,
                            display: { xs: 'none', md: 'flex' },
                            marginLeft: '20%'
                        }}
                        >
                            {pages.map((page) => (
                                <Button
                                    key={page}
                                    value={page}
                                    name={page}
                                    onClick={(event) => setChosenTab(event.currentTarget.value)}
                                    sx={{
                                        my: 2,
                                        color: 'white',
                                        display: 'block',
                                        marginLeft: '8%',
                                        borderRadius: '0.5em',
                                        textShadow: '1px 1px 1px #3b0c34',
                                        fontSize: 'calc(12px + (14 - 12) * ((100vw - 300px) / (1600 - 300)))',
                                        '&:hover': {
                                            background: 'rgb(27, 91, 247, 0.5)',
                                        },
                                        bgcolor: chosenTab === page && 'rgb(27, 91, 247, 0.7)',
                                    }}
                                >
                                    {page}
                                </Button>
                            ))}
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <main
                style={{
                    width: '100%',
                    padding: '3%',
                    backgroundColor: chosenTab === 'Contact' ? '#f2f2f2' : '#e8e8e8',
                }}
            >
                <Navigation chosenTab={chosenTab} />
            </main>
        </div>
    );
}

export default Navbar;