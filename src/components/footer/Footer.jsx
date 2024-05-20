import {centerVertHoriz} from "../../global-parameters/Styles";
import {Stack, Typography} from "@mui/material";
import Box from "@mui/material/Box";
import {secondaryColor} from "../../global-parameters/Parameters";

function Footer() {
    return (<Box
        sx={{
            width: '100vw',
            ...centerVertHoriz,
            backgroundColor: secondaryColor,
        }}
    >
        <Stack sx={{margin: '4rem 4rem'}}>
            <Typography sx={{fontSize: '1.5rem'}}>Martin City Campground | Martin City MT, 59926 | (406) 253-2867</Typography>
        </Stack>
    </Box>)
}

export default Footer
