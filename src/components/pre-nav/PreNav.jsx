import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import {Grid} from "@mui/material";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import Typography from "@mui/material/Typography";
import {Mail} from "@mui/icons-material";
import {centerVertHoriz} from "../../global-parameters/Styles";
function PreNav() {
    return (
        <Box  sx={{flexGrow: 1, }}>
            <AppBar position="static" sx={{height: '1.7rem'}}>
                    <Grid container>
                        <Grid item><Typography sx={{...centerVertHoriz}}><LocalPhoneIcon/>(406) 253-2867</Typography></Grid>
                        <Grid item><Typography sx={{...centerVertHoriz}}><Mail/>glaciernationalparkcamping@gmail.com</Typography></Grid>
                    </Grid>
            </AppBar>
        </Box>
    )
}

export default PreNav
