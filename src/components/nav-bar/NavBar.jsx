import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import {BrowserView, MobileView} from "react-device-detect";
import {Button, Grid, Link, Menu, MenuItem} from "@mui/material";
import Typography from "@mui/material/Typography";
import React, {useState} from "react";
import {mainColor, name} from "../../global-parameters/Parameters";
function NavBar() {

    let parameters =  ['home', 'work', 'about', 'contact']
    const [anchorEl, setAnchorEl] = useState(undefined);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(undefined);
    };

    const handleMenuClose = () => {
        setAnchorEl(undefined);
    };
    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <BrowserView>
                    <Toolbar sx={{backgroundColor: mainColor}}>
                        <Grid container>
                            <Grid item xs={7}>
                                <Link href={'home'} sx={{textDecoration: 'none'}}>
                                <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                                    {name}
                                </Typography>
                                </Link>
                            </Grid>
                            <Grid item xs={1}>
                                <Link href={'home'} sx={{textDecoration: 'none'}}>
                                <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                                    Home
                                </Typography>
                                </Link>
                            </Grid>
                            <Grid item xs={1}>
                                <Link href={'book'} sx={{textDecoration: 'none'}}>
                                <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                                    Book
                                </Typography>
                                </Link>
                            </Grid>
                            <Grid item xs={1}>
                                <Link href={'rates'} sx={{textDecoration: 'none'}}>
                                <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                                    Rates
                                </Typography>
                                </Link>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </BrowserView>
                <MobileView>
                    <Grid container>
                        <Grid item xs={9}>
                            <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                                {name}
                            </Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <Button
                                id="demo-positioned-button"
                                aria-controls={anchorEl ? 'demo-positioned-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={anchorEl ? 'true' : undefined}
                                onClick={handleClick}
                            >
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
                            </Button>
                        </Grid>
                    </Grid>
                </MobileView>
            </AppBar>
        </Box>
    )
}

export default NavBar
