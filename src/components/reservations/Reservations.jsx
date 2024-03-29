import Box from "@mui/material/Box";
import background from "../../photos/tent-site.jpg";
import {centerVertHoriz} from "../../global-parameters/Styles";
import {Link, Stack, Typography} from "@mui/material";

function Reservations() {
    return (<Box
        sx={{
            backgroundImage: `url(${background})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            width: '100vw',
            position: 'relative',
            ...centerVertHoriz
        }}
    >
        <Stack sx={{margin: '4rem 4rem'}}>
            <Typography sx={{color: 'white'}} variant={'h4'}>Reservations</Typography>
            <Typography sx={{color: 'white'}}>
                Please visit our <Link>online reservation system</Link> where you can view our current availability,
                site types, pricing & terms. You can also confirm your reservation and pay for your site through the
                link below.</Typography>
        </Stack>
    </Box>)
}

export default Reservations
