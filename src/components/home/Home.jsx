import background from "../../photos/hungry-horse-99.jpg";
import Box from "@mui/material/Box";
import {Button, Link, Stack, Typography} from "@mui/material";
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
                <Stack sx={{...centerVertHoriz}}>
                    <Typography variant={'h3'} sx={{color: 'white'}}>Martin City Campground in Martin City
                        Montana</Typography>
                    <Button variant={'contained'} sx={{marginTop: '1rem', width: '15rem'}}>Make a Reservation</Button>
                </Stack>
            </Box>
            <Box sx={{
                width: '100vw',
                height: '30vh',
                ...centerVertHoriz
            }}>
                <Typography sx={{padding: '1rem 4rem'}}>Oceanside RV Park is located in Haines, Alaska right on the shores of the Lynn Canal, North
                    America’s longest fjord. Breathtaking ocean and mountain views surround the park, which is
                    conveniently
                    located adjacent to Main Street, the Haines Harbor, and the downtown business district.
                    As a waterfront campground in Alaska, our guests are constantly spoiled with the incredible views of
                    Alaska’s mountainous terrain and glacial waters. Haines, Alaska is widely known as the adventure
                    capital of
                    Alaska, and Oceanside RV Park provides the perfect location for taking advantage of all our region
                    has to
                    offer.

                    Our RV Sites have individual full hook ups (30 & 50 amp electrical, water, sewer), grass pads,
                    picnic
                    tables, and many amenities to make your stay comfortable.</Typography>
            </Box>
            <Box
                sx={{
                    backgroundImage: `url(${background})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    width: '100vw',
                    height: '30vh',
                    position: 'relative',
                    ...centerVertHoriz
                }}
            >
                <Stack >
                    <Typography sx={{color: 'white'}}>Reservations</Typography>
                    <Typography sx={{color: 'white'}}>
                        Please visit our <Link>online reservation system</Link> where you can view our current availability, site types, pricing & terms. You can also confirm your reservation and pay for your site through the link below.</Typography>
                </Stack>
            </Box>
        </>
    )
}

export default Home
