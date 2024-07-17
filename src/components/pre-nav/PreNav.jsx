import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import {Grid, Link, Typography} from "@mui/material";
// import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import {Directions as DirectionsIcon, Mail} from "@mui/icons-material";
import {centerVertHoriz} from "../../global-parameters/Styles";
import {secondaryColor} from "../../global-parameters/Parameters";

function PreNav() {
    const recipientEmail = 'glaciernationalparkcamping@gmail.com';
    const mailToLink = `mailto:${recipientEmail}`;

    const handleEmailClick = () => {
        window.location.href = mailToLink;
    };

    // const handlePhoneClick = () => {
    //     window.open('tel:+14062532867');
    // };

    const handleDirectionsClick = () => {
        window.open("https://www.google.com/maps/place/9234+Hwy+2+E,+Columbia+Falls,+MT+59912/@48.3910565,-114.0436689,17z/data=!3m1!4b1!4m6!3m5!1s0x53663ee5fcea226b:0xa23a1e7f79093ae7!8m2!3d48.391053!4d-114.041094!16s%2Fg%2F11c2h319n3?entry=ttu");
    };

    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static" sx={{backgroundColor: secondaryColor, height: '5rem', ...centerVertHoriz}}>
                <Grid container alignItems="center" justifyContent="center">
                    {/*<Grid item xs={12} sm={4} md={2}>*/}
                    {/*<Typography onClick={handlePhoneClick} sx={{...centerVertHoriz, cursor: 'pointer'}}>*/}
                    {/*    <LocalPhoneIcon sx={{paddingRight: '.5rem'}}/>*/}
                    {/*    (406) 253-2867*/}
                    {/*</Typography>*/}
                    {/*</Grid>*/}
                    <Grid item xs={12} sm={4} md={4}>
                        <Typography onClick={handleEmailClick} sx={{...centerVertHoriz, cursor: 'pointer'}}>
                            <Mail sx={{paddingRight: '.5rem'}}/>
                            glaciernationalparkcamping@gmail.com
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4}>
                        <Typography onClick={handleDirectionsClick} sx={{...centerVertHoriz, cursor: 'pointer'}}>
                            <DirectionsIcon sx={{paddingRight: '.5rem'}}/>
                            Directions
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4}>
                        <Typography>
                            <Link href="/terms"
                                  sx={{...centerVertHoriz, cursor: 'pointer', color: 'white'}}>
                                Terms of Service
                            </Link>
                        </Typography>
                    </Grid>

                </Grid>
            </AppBar>
        </Box>
    );
}

export default PreNav;
