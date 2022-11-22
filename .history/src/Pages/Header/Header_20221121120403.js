import { AppBar, Avatar, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Tooltip, Typography, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import React, { useContext, useState } from 'react';
import { tokens } from '../../Theme/Theme';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LoginIcon from '@mui/icons-material/Login';
import './Header.css'
import { AuthContext } from '../../Context/User/UserContext';


const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    console.log(user)
    const navigate = useNavigate()
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);


    const hello = () => {
        logOut()
            .then(() => {
                console.log('logout');
                navigate('/home')
            })
            .then((error) => {
                console.log(error)
            })
    }
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    const items = <React.Fragment>
        <Button sx={{ color: 'white' }} component={RouterLink} to="/home">Home</Button>
        <Button sx={{ color: 'white' }} component={RouterLink} to="/appointment">Appointment</Button>
        <Button sx={{ color: 'white' }} component={RouterLink} to="/shop">Shop</Button>
        {user?.email && <Button
            onClick={hello}
            color='secondary'
            variant="outlined" component={RouterLink} to='/signUp' startIcon={<LoginIcon />}>
            LogOut
        </Button>}
    </React.Fragment>
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>

                    <Typography
                        variant="h3"
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
                        Doctors portal
                    </Typography>

                    <Box className='middle' sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'center' }}>
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

                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography variant="h5" sx={{ color: 'withe' }} textAlign="center">{items}</Typography>
                            </MenuItem>

                        </Menu>
                    </Box>

                    <Typography
                        variant="h3"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Doctors portal
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

                        <Button

                            onClick={handleCloseNavMenu}
                            sx={{ color: `${colors.grey[400]} !important`, my: 2, display: 'block' }}
                        >
                            {items}
                        </Button>

                    </Box>
                    <Box sx={{ flexGrow: 0 }}>
                        {user?.email ? <Box>
                            <Tooltip title={user?.displayName}>
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                                    <Avatar style={avatarStyle}><PersonOutlineIcon /></Avatar>
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px', width: '500px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                {settings.map((setting) => (
                                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                        <Typography textAlign="center">{setting}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box> :
                            <Button
                                color='secondary'
                                variant="outlined" component={RouterLink} to='/signUp' startIcon={<LoginIcon />}>
                                SignUp
                            </Button>}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;