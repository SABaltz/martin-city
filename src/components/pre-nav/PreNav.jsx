import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import {Grid, Link, Typography, useMediaQuery} from "@mui/material";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import {Directions as DirectionsIcon, Gavel} from "@mui/icons-material";
import {centerVertHoriz} from "../../global-parameters/Styles";
import {secondaryColor} from "../../global-parameters/Parameters";

function PreNav() {
    // const recipientEmail = 'glaciernationalparkcamping@gmail.com';
    // const mailToLink = `mailto:${recipientEmail}`;

    // const handleEmailClick = () => {
    //     window.location.href = mailToLink;
    // };

    const handlePhoneClick = () => {
        window.open('tel:+14062532867');
    };
    const isMobile = useMediaQuery('(min-width:600px)');

    const handleDirectionsClick = () => {
        window.open("https://www.google.com/maps/place/Martin+City+Park/@48.3911745,-114.0434679,17z/data=!3m1!4b1!4m6!3m5!1s0x53663fc0f3deca83:0x4151277c7fcd9507!8m2!3d48.391171!4d-114.040893!16s%2Fg%2F11y3kn8nn5?entry=ttu");
    };

    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static"
                    sx={{backgroundColor: secondaryColor, height: isMobile ? '7rem' : '12rem', ...centerVertHoriz}}>
                <Grid container alignItems="center" justifyContent="center">

                    <Grid item xs={12} sm={4} md={4} lg={5}>
                        <Link href={"/"} sx={{textDecoration: "none"}}>
                            <Typography variant={'h4'}
                                        sx={{
                                            marginLeft: isMobile ? '3rem' : '',
                                            textAlign: isMobile ? '' : 'center',
                                            marginBottom: isMobile ? '1rem' : '',
                                            color: 'white',
                                        }}>
                                Martin City Campground</Typography>
                        </Link>
                    </Grid>

                    <Grid item xs={12} sm={4} md={2}>
                        <Typography onClick={handlePhoneClick} sx={{...centerVertHoriz, cursor: 'pointer'}}>
                            <LocalPhoneIcon sx={{paddingRight: '.5rem'}}/>
                            (406) 253-2867
                        </Typography>
                    </Grid>
                    {/*<Grid item xs={12} sm={4} md={4} lg={2}>*/}
                    {/*    <Typography onClick={() => {*/}
                    {/*        window.location.href = mailToLink;*/}
                    {/*    }}*/}
                    {/*                sx={{...centerVertHoriz, cursor: 'pointer'}}>*/}
                    {/*        <Mail sx={{paddingRight: '.5rem'}}/>*/}
                    {/*        glaciernationalparkcamping@gmail.com*/}
                    {/*    </Typography>*/}
                    {/*</Grid>*/}
                    <Grid item xs={12} sm={4} md={4} lg={2} sx={{marginTop: isMobile ? '' : '1rem',}}>
                        <Typography onClick={handleDirectionsClick} sx={{...centerVertHoriz, cursor: 'pointer'}}>
                            <DirectionsIcon sx={{paddingRight: '.5rem'}}/>
                            Directions
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4} lg={2} sx={{marginTop: isMobile ? '' : '1rem',}}>
                        <Typography >
                            <Link href="/terms"
                                  sx={{...centerVertHoriz, cursor: 'pointer', color: 'white'}}>
                                <Gavel/>
                                Terms
                            </Link>
                        </Typography>
                    </Grid>

                </Grid>
            </AppBar>
        </Box>
    );
}

export default PreNav;
