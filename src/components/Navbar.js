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

import {
    AboutMe,
    Portfolio,
} from '../components';

export function Navbar() {
    const pages = ['About Me', 'Portfolio', 'Contact', 'Resume'];
    const [chosenTab, setChosetTab] = useState('About Me');
    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    function renderChosenSection() {
        switch (chosenTab) {
            case 'About Me': return <AboutMe />;
            case 'Portfolio': return <Portfolio />;
        }
    }

    function changeChosenPageValue(event) {
        console.log(event.currentTarget.value);
        setChosetTab(event.currentTarget.value)
    }

    return (
        <div>
            <AppBar
                position="static"
                sx={{
                    backgroundColor: '#ffffff',
                    backgroundImage: 'url(./navbar_bg_1.svg)',
                    //backgroundAttachment: 'fixed',
                    //backgroundSize: 'cover',
                    //backgroundRepeat: 'repeat'
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
                                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">{page}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        <Box sx={{
                            flexGrow: 1,
                            display: { xs: 'none', md: 'flex' },
                            marginLeft: '16rem'
                        }}
                        >
                            {pages.map((page, index) => (
                                <Button
                                    key={page}
                                    value={page}
                                    name={page}
                                    onClick={changeChosenPageValue}
                                    sx={{
                                        my: 2,
                                        color: 'white',
                                        display: 'block',
                                        marginLeft: '3rem',
                                        borderRadius: 3,
                                        '&:hover': {
                                            background: 'rgb(27, 91, 247, 0.5)',

                                        }
                                    }}
                                >
                                    {page}
                                </Button>
                            ))}
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <main>
                {renderChosenSection()}
            </main>
        </div>
    );
}

export default Navbar;