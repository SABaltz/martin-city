import background from "../../photos/hungry-horse-99.jpg";
import {Stack, Typography} from "@mui/material";
import Box from "@mui/material/Box";

function Location() {
    return (
        <Box
            sx={{
                backgroundImage: `url(${background})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                width: '100vw',
                height: '60vh',
                position: 'relative',
            }}
        >
            <Stack sx={{margin: '4rem 4rem'}}>
                <Typography variant={'h3'} sx={{color: 'white'}}>Location</Typography>
            </Stack>
        </Box>
    )

}

export default Location
