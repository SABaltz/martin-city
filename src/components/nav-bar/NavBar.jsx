import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import {BrowserView, MobileView} from "react-device-detect";
import {Button, Grid, Link, Menu, MenuItem} from "@mui/material";
import Typography from "@mui/material/Typography";
import React, {useState} from "react";
import {name} from "../../global-parameters/Parameters";
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
                    <Toolbar>
                        <Grid container>
                            <Grid item xs={7}>
                                <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                                    {name}
                                </Typography>
                            </Grid>
                            <Grid item xs={1}>
                                <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                                    Home
                                </Typography>
                            </Grid>
                            <Grid item xs={1}>
                                <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                                    Book
                                </Typography>
                            </Grid>
                            <Grid item xs={1}>
                                <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                                    Rates
                                </Typography>
                            </Grid>
                            <Grid item xs={1}>
                                <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                                    Gallery
                                </Typography>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </BrowserView>
                <MobileView>
                    <Grid container>
                        <Grid item xs={11}>
                            <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                                {name}
                            </Typography>
                        </Grid>
                        <Grid item xs={1}>
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
