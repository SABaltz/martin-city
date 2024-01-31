import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import {Grid} from "@mui/material";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import Typography from "@mui/material/Typography";
import {Mail} from "@mui/icons-material";
import {centerVertHoriz} from "../../global-parameters/Styles";
import {isMobile} from "react-device-detect";
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
        <Box sx={{flexGrow: 1,}}>
            <AppBar position="static" sx={{height: isMobile? '5rem' :'1.7rem', backgroundColor : secondaryColor}}>
                <Grid container>
                    <Grid item xs={12} md={2}><Typography sx={{...centerVertHoriz}}><LocalPhoneIcon sx={{paddingRight: '.5rem'}}
                                                                                            onClick={() => window.open('tel:+14062532867')}/>(406)
                        253-2867</Typography></Grid>
                    <Grid item xs={12} md={2}><Typography sx={{...centerVertHoriz}}><Mail sx={{paddingRight: '.5rem'}}
                                                                                  onClick={handleEmailClick}/>glaciernationalparkcamping@gmail.com</Typography></Grid>
                <Grid item xs={12} md={2}><Typography sx={{...centerVertHoriz}}><DirectionsIcon sx={{paddingRight: '.5rem'}}
                                                                                  onClick={handleEmailClick}/>Directions</Typography></Grid>
                </Grid>
            </AppBar>
        </Box>
    )
}

export default PreNav


// const MyComponent = () => {
//     return (
//         <>
//             <BrowserView>
//                 <h1>This is rendered only in browser</h1>
//             </BrowserView>
//             <MobileView>
//                 <h1>This is rendered only on mobile</h1>
//             </MobileView>
//         </>
//     );
// };
//
//
// const MyComponent = () => {
//     if(isMobile) {
//         return (
//             <div> This content is available only on mobile</div>
//         )
//     }
//     return (
//         <div> content... </div>
//     );
// };
