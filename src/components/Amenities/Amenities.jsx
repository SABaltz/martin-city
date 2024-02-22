import {Link, Stack, Typography} from "@mui/material";

function Amenities() {
    return (
        <Stack sx={{margin: '4rem 4rem'}}>
            <Typography sx={{color: 'black'}}>Amenities</Typography>
            <Typography sx={{color: 'black'}}>
                Please visit our <Link>online reservation system</Link> where you can view our current availability,
                site types, pricing & terms. You can also confirm your reservation and pay for your site through the
                link below.</Typography>
        </Stack>)

}

export default Amenities
