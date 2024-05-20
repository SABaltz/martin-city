import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import {Grid} from "@mui/material";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import Typography from "@mui/material/Typography";
import {Mail} from "@mui/icons-material";
import {centerVertHoriz} from "../../global-parameters/Styles";
import DirectionsIcon from '@mui/icons-material/Directions';
import {secondaryColor} from "../../global-parameters/Parameters";

function PreNav() {
    const recipientEmail = 'glaciernationalparkcamping@gmail.com';
    const subject = '';
    const body = '';
    const mailToLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    const handleEmailClick = () => {
        window.location.href = mailToLink;
    };
    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static" sx={{ backgroundColor: secondaryColor}}>
                <Grid container>
                    <Grid item xs={12} sm={4} md={2}><Typography onClick={() => window.open('tel:+14062532867')} sx={{...centerVertHoriz}}><LocalPhoneIcon
                        sx={{paddingRight: '.5rem', cursor: 'pointer'}}/>(406)
                        253-2867</Typography></Grid>
                    <Grid item xs={12} sm={4} md={2}><Typography onClick={handleEmailClick} sx={{...centerVertHoriz}}><Mail sx={{paddingRight: '.5rem', cursor: 'pointer'}}
                                                                                        />glaciernationalparkcamping@gmail.com</Typography></Grid>
                    <Grid item xs={12} sm={4} md={2}><Typography onClick={() => window.open("https://www.google.com/maps/place/9234+Hwy+2+E,+Columbia+Falls,+MT+59912/@48.3910565,-114.0436689,17z/data=!3m1!4b1!4m6!3m5!1s0x53663ee5fcea226b:0xa23a1e7f79093ae7!8m2!3d48.391053!4d-114.041094!16s%2Fg%2F11c2h319n3?entry=ttu")} sx={{...centerVertHoriz}}><DirectionsIcon
                        sx={{paddingRight: '.5rem', cursor: 'pointer'}}/>Directions</Typography></Grid>
                </Grid>
            </AppBar>
        </Box>
    )
}

export default PreNav
