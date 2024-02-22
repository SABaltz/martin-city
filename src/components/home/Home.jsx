import background from "../../photos/hungry-horse-99.jpg";
import Box from "@mui/material/Box";
import {Button, Stack, Typography} from "@mui/material";
import {centerVertHoriz} from "../../global-parameters/Styles";

function Home() {
    return (
        <>
            <Box
                sx={{
                    backgroundImage: `url(${background})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    width: '100vw',
                    height: '60vh',
                    position: 'relative',
                    ...centerVertHoriz
                }}
            >
                <Stack sx={{...centerVertHoriz, margin: '4rem 4rem', textAlign: 'center'}}>
                    <Typography variant={'h3'} sx={{color: 'white'}}>Martin City Campground in Martin City
                        Montana</Typography>
                    <Button variant={'contained'} sx={{marginTop: '1rem', width: '15rem'}}>Make a Reservation</Button>
                </Stack>
            </Box>


        </>
    )
}

export default Home
