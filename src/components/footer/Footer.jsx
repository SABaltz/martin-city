import {centerVertHoriz} from "../../global-parameters/Styles";
import {Link, Stack, Typography} from "@mui/material";
import Box from "@mui/material/Box";

function Footer() {
    return (<Box
        sx={{
            width: '100vw',
            ...centerVertHoriz,
            backgroundColor: 'grey'
        }}
    >
        <Stack sx={{margin: '4rem 4rem'}}>
            <Typography sx={{}}>Oceanside RV Park | PO Box 1028 | Haines AK 99827 | 907-766-3730</Typography>
        </Stack>
    </Box>)
}

export default Footer
