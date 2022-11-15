import React from 'react';
import { Box, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import chair from '../../../assets/images/chair.png'

const Banner = () => {
    return (
        <Box sx={{ flexGrow: 1, marginTop: '3rem', marginBottom: '3rem' }}>
            <Grid container spacing={3} >
                <Grid xs={6}>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <CardContent sx={{ flex: '1 0 auto' }}>
                            <Typography component="div" variant="h1">
                                Your New Smile Starts Here
                            </Typography>
                            <Typography variant="subtitle1" color="text.secondary" component="div">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
                            </Typography>
                        </CardContent>

                    </Box>
                </Grid>
                <Grid xs={6}>
                    <CardMedia
                        component="img"
                        sx={{ width: 600 }}
                        image={chair}
                        alt="Live from space album cover"
                    />
                </Grid>
            </Grid>
        </Box>
    );
};

export default Banner;