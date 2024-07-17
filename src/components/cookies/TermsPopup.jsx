import React from 'react';
import {Box, Button, Grid, Link, Modal, Typography} from '@mui/material';
import {centerVertHoriz} from "../../global-parameters/Styles";

const TermsPopup = ({open, handleClose}) => {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,

    };

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="terms-title"
            aria-describedby="terms-description"
        >
            <Box sx={style}>
                <Typography id="terms-title" variant="h6" component="h2" sx={{
                    paddingLeft: 8,
                    paddingRight: 8,
                }}>
                    Terms of Service
                </Typography>
                <Typography id="terms-description" sx={{
                    paddingLeft: 8,
                    paddingRight: 8,
                    mt: 2,
                }}>
                    Please read and accept our Terms of Service to continue using the website.
                    <br/><br/>
                    <strong>Terms and Conditions:</strong>
                    <br/>
                    By using this site, you agree to the following
                    <Link href={'/terms'}> terms...</Link>

                </Typography>
                <Grid container sx={{
                    ...centerVertHoriz, paddingLeft: 8,
                    paddingRight: 8
                }}>
                    <Grid item xs={6}>
                        <Button
                            onClick={() => window.location.href = 'https://www.google.com'}
                            variant="outlined"
                            sx={{mt: 2}}
                        >
                            Decline
                        </Button>
                    </Grid>
                    <Grid item xs={6}>
                        <Button onClick={handleClose} variant="contained" sx={{mt: 2}}>
                            Accept
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </Modal>
    );
};

export default TermsPopup;
