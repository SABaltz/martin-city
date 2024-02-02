import React, {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import {BrowserView, MobileView} from 'react-device-detect';
import {Button, Grid, Link, Menu, MenuItem, Typography} from '@mui/material';
import {mainColor, name} from '../../global-parameters/Parameters';
import MenuIcon from '@mui/icons-material/Menu';
import {centerVertHoriz} from "../../global-parameters/Styles";

function NavBar() {
    const parameters = ['home', 'work', 'about', 'contact'];
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static" sx={{backgroundColor: mainColor}}>
                <BrowserView>
                    <Toolbar>
                        <Grid container>
                            <Grid item xs={7}>
                                <Link href="home" sx={{textDecoration: 'none'}}>
                                    <Typography variant="h6" component="div"
                                                sx={{flexGrow: 1, color: 'white', ...centerVertHoriz}}>
                                        {name}
                                    </Typography>
                                </Link>
                            </Grid>
                            {parameters.map((option) => (
                                <Grid item xs={1} key={option}>
                                    <Link href={option} sx={{textDecoration: 'none'}}>
                                        <Typography variant="h6" component="div" sx={{flexGrow: 1, color: 'white'}}>
                                            {option.charAt(0).toUpperCase() + option.slice(1)}
                                        </Typography>
                                    </Link>
                                </Grid>
                            ))}
                        </Grid>
                    </Toolbar>
                </BrowserView>
                <MobileView>
                    <Grid container>
                        <Grid item xs={10}>
                            <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                                {name}
                            </Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <Button
                                id="demo-positioned-button"
                                aria-controls={anchorEl ? 'demo-positioned-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={anchorEl ? 'true' : undefined}
                                onClick={handleClick}
                            >
                                <MenuIcon sx={{height: 40, width: 40}}/>
                            </Button>
                            <Menu
                                id="demo-positioned-menu"
                                aria-labelledby="demo-positioned-button"
                                anchorEl={anchorEl}
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                                anchorOrigin={{vertical: 'bottom', horizontal: 'left'}}
                                transformOrigin={{vertical: 'top', horizontal: 'left'}}
                            >
                                {parameters.map((option, index) => (
                                    <MenuItem
                                        key={index}
                                        sx={{
                                            '&:active': {
                                                backgroundColor: 'grey',
                                            },
                                        }}
                                        onClick={handleMenuClose}
                                    >
                                        <Link href={`/${option}`} sx={{textDecoration: 'none'}}>
                                            <Typography
                                                color={'red'}
                                                variant="h6"
                                                component="div"
                                                sx={{
                                                    flexGrow: 1,
                                                }}
                                            >
                                                {option.toUpperCase()}
                                            </Typography>
                                        </Link>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Grid>
                    </Grid>

                </MobileView>
            </AppBar>
        </Box>
    )
        ;
}

export default NavBar;
