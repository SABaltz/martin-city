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
            <Typography sx={{fontSize: '1.5rem', paddingBottom: '1rem'}}>Martin City Campground</Typography>
            <Typography sx={{fontSize: '1.5rem', paddingBottom: '1rem'}}>Martin City MT, 59926</Typography>
            <Typography sx={{fontSize: '1.5rem', paddingBottom: '1rem'}}>(406) 253-2867</Typography>
            <Typography sx={{fontSize: '1.5rem', paddingBottom: '1rem'}}> <Link sx={{color: 'black'}} href={"/terms"}>Privacy
                Policy / Terms of
                Service</Link> </Typography>
            <Typography>
                <Typography
                    sx={{...centerVertHoriz, cursor: 'pointer', fontSize: '1.5rem', paddingBottom: '1rem'}}>
                    glaciernationalparkcamping@gmail.com
                </Typography>
            </Typography>
        </Stack>
    </Box>)
}

export default Footer
