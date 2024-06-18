import Box from "@mui/material/Box";
import background from "../../photos/tent-site.jpg";
import {centerVertHoriz} from "../../global-parameters/Styles";
import {Button, Link, Stack, Typography} from "@mui/material";
import {secondaryColor} from "../../global-parameters/Parameters";
import {isMobile} from 'react-device-detect';

function Reservations() {
    return (<Box
        sx={{
            backgroundImage: `url(${background})`,
            backgroundRepeat: 'no-repeat',
            // backgroundPosition: 'center',
            backgroundPosition: '50% 60%',
            backgroundSize: 'cover',
            height: isMobile ? '100vh' : '70vh',
            position: 'relative',
            ...centerVertHoriz
        }}
    >

        <Box sx={{
            backgroundColor: 'rgba(255, 255, 255, 0.13)',
            borderRadius: '10px',
            backdropFilter: 'blur(3px)',
            border: '2px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 0 40px rgba(8, 7, 16, 0.6)',
        }}>
            <Stack sx={{margin: '4rem 4rem', ...centerVertHoriz}}>

                <Typography sx={{color: 'white', ...centerVertHoriz, paddingBottom: '1rem'}}
                            variant={'h3'}>Reservations</Typography>
                <Typography sx={{color: 'white', fontSize: '1.5rem'}}>
                    Please visit our <Link sx={{color: 'lightBlue', cursor: 'pointer'}}>online reservation
                    system</Link>
                    {isMobile ? " where you can make a reservation" : " where you can view our current availability, site types, pricing & terms. You can also confirm your reservation and pay for your site through the link above."}
                </Typography>
                <Button variant={'contained'}
                        onClick={() => window.open('tel:+14062532867')}
                        sx={{
                            width: '20rem',
                            height: '5rem',
                            backgroundColor: secondaryColor,
                            paddingTop: '1rem',
                        }}><Typography variant={'h5'} sx={{
                    color: 'white',
                }}>Make a Reservation</Typography></Button>
            </Stack>
        </Box>
    </Box>)
}

export default Reservations
