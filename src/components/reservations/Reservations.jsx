import Box from "@mui/material/Box";
import background from "../../photos/tent-site.jpg";
import {centerVertHoriz} from "../../global-parameters/Styles";
import {Button, Link, Stack, Typography} from "@mui/material";
import {secondaryColor} from "../../global-parameters/Parameters";

function Reservations() {
    return (<Box
        sx={{
            backgroundImage: `url(${background})`,
            backgroundRepeat: 'no-repeat',
            // backgroundPosition: 'center',
            backgroundPosition: '50% 60%',
            backgroundSize: 'cover',
            width: '100vw',
            height: '50vh',
            position: 'relative',
            ...centerVertHoriz
        }}
    >
        <Stack sx={{margin: '4rem 4rem', ...centerVertHoriz}}>
            <Typography sx={{color: 'white', ...centerVertHoriz, paddingBottom: '1rem'}}
                        variant={'h3'}>Reservations</Typography>
            <Typography sx={{color: 'white', fontSize: '1.5rem'}}>
                Please visit our <Link sx={{color: 'lightBlue'}}>online reservation system</Link> where you can view our
                current availability,
                site types, pricing & terms. You can also confirm your reservation and pay for your site through the
                link above.</Typography>
            <Button variant={'contained'} sx={{
                width: '20rem',
                height: '5rem',
                backgroundColor: secondaryColor,
                paddingTop: '1rem'
            }}><Typography variant={'h5'} sx={{
                color: 'white',
            }}>Make A Reservation</Typography></Button>
        </Stack>
    </Box>)
}

export default Reservations
