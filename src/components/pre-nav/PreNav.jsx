import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import {Grid} from "@mui/material";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import Typography from "@mui/material/Typography";
import {Mail} from "@mui/icons-material";
import {centerVertHoriz} from "../../global-parameters/Styles";

function PreNav() {
    const recipientEmail = 'glaciernationalparkcamping@gmail.com';
    const subject = '';
    const body = '';
    const mailToLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    const handleEmailClick = () => {
        window.location.href = mailToLink;
    };
    return (
        <Box sx={{flexGrow: 1,}}>
            <AppBar position="static" sx={{height: '1.7rem'}}>
                <Grid container>
                    <Grid item xs={4}><Typography sx={{...centerVertHoriz}}><LocalPhoneIcon sx={{paddingRight: '.5rem'}}
                                                                                            onClick={() => window.open('tel:+14062532867')}/>(406)
                        253-2867</Typography></Grid>
                    <Grid item xs={4}><Typography sx={{...centerVertHoriz}}><Mail sx={{paddingRight: '.5rem'}}
                                                                                  onClick={handleEmailClick}/>glaciernationalparkcamping@gmail.com</Typography></Grid>
                </Grid>
            </AppBar>
        </Box>
    )
}

export default PreNav
