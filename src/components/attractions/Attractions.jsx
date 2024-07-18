import React from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {grey} from '@mui/material/colors';
import {Stack} from "@mui/material";
import {centerVertHoriz} from "../../global-parameters/Styles";
import DirectionsIcon from "@mui/icons-material/Directions";

function Attractions() {
    return (
        <Box sx={{
            flexGrow: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: '3rem',
            paddingBottom: '3rem',
            backgroundColor: '#EFDECD '
        }}>
            <Stack>
                <Typography variant="h3" gutterBottom
                            sx={{
                                ...centerVertHoriz,
                                fontWeight: 'bold',
                                color: grey[800],
                                marginBottom: '2rem',
                                paddingLeft: '2rem'
                            }}>
                    Local Attractions
                </Typography>
                <Typography variant="h5" paragraph sx={{marginBottom: 2, color: grey[700], paddingLeft: '2rem'}}>
                    Visit the SouthFork and Deerlick Saloons just a 2-minute walk into Martin City!
                </Typography>
                <Typography variant="h5" paragraph sx={{marginBottom: 2, color: grey[700], paddingLeft: '2rem'}}>
                    Groceries and gas can be found 2 minutes drive south on Highway 2 into Hungry Horse.
                    <DirectionsIcon
                        onClick={() => window.open("https://www.google.com/maps/place/Canyon+Foods+Supermarket/@48.3858664,-114.0601993,19z/data=!4m6!3m5!1s0x53663f195d9cbbd3:0xe603a69a985a4b94!8m2!3d48.3858838!4d-114.0598815!16s%2Fg%2F1tcw7vts?entry=ttu")}
                        sx={{paddingRight: '.5rem', cursor: 'pointer'}}/>
                </Typography>
            </Stack>
        </Box>
    );
}

export default Attractions;
