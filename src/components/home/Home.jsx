import background from "../../photos/MArtinCityPark.jpg";
import Box from "@mui/material/Box";
import {Button, Stack, Typography} from "@mui/material";
import {centerVertHoriz} from "../../global-parameters/Styles";
import {secondaryColor} from "../../global-parameters/Parameters";

function Home() {
    return (
        <>
            <Box
                sx={{
                    backgroundImage: `url(${background})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: '50% 60%',
                    backgroundSize: 'cover',
                    width: '100vw',
                    height: '80vh',
                    position: 'relative',
                    ...centerVertHoriz
                }}
            >
                <Stack sx={{...centerVertHoriz, margin: '4rem 4rem', textAlign: 'center'}}>
                    <Typography variant={'h3'} sx={{color: 'white', paddingBottom: '4rem'}}>Martin City Campground in
                        Martin City Montana
                    </Typography>
                    <Button variant={'contained'}
                            onClick={() => window.open('https://www.campspot.com/book/martin-city-park-cfmt')}
                            sx={{width: '20rem', height: '5rem', backgroundColor: secondaryColor}}>
                        <Typography variant={'h5'} sx={{
                            color: 'white',
                        }}>Make a Reservation
                        </Typography>
                    </Button>
                </Stack>
            </Box>
        </>
    )
}

export default Home
