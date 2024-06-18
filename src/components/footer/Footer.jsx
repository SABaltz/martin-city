import {centerVertHoriz} from "../../global-parameters/Styles";
import {Link, Stack, Typography} from "@mui/material";
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
        <Stack sx={{margin: '4rem 4rem', ...centerVertHoriz}}>
            <Typography sx={{fontSize: '1.5rem'}}>Martin City Campground | Martin City MT, 59926 | (406)
                253-2867</Typography>
            <Typography sx={{fontSize: '1.5rem'}}> <Link sx={{color: 'black'}} href={"/terms"}>Privacy Policy / Terms of Service</Link> </Typography>
        </Stack>
    </Box>)
}

export default Footer
