import React from 'react';
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import {Grid} from "@mui/material";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import CircleIcon from '@mui/icons-material/Circle';
import {secondaryColor} from "../../global-parameters/Parameters";
import {centerVertHoriz} from "../../global-parameters/Styles";

function Rules() {
    const rules = [
        "Check-in is 3pm, check-out is 10am.",
        "Please NO FIRES at any time.",
        "Please be respectful of your neighbors.",
        "Quiet hours begin at 10:00pm.",
        "Max Vehicle length is 20ft.",
        "No parking on or down Martin Drive, this is a private drive, please park additional vehicles on the paved shoulder off the main road.",
        "Wednesday is the portapotty servicing day. Please be aware if you stay past the check-out time they may ask you to move your vehicle."
    ];

    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static" sx={{backgroundColor: secondaryColor}}>
                <Grid container spacing={2} sx={{padding: 2}}>
                    <Grid item xs={12}>
                        <Typography variant="h3" gutterBottom
                                    sx={{...centerVertHoriz, marginBottom: '2rem'}}>
                            Camp Rules
                        </Typography>
                        <List>
                            {rules.map((rule, index) => (
                                <ListItem key={index}>
                                    <ListItemIcon>
                                        <CircleIcon sx={{fontSize: 8}}/>
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={<Typography variant="h6">{rule}</Typography>}
                                    />
                                </ListItem>
                            ))}
                        </List>
                    </Grid>
                </Grid>
            </AppBar>
        </Box>
    );
}

export default Rules;
