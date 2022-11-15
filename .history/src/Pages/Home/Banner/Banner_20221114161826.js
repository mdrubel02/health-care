import React from 'react';
import { Box, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import chair from '../../../assets/images/chair.png'

const Banner = () => {
    return (
        <Box sx={{ marginTop: '3rem', marginBottom: '3rem' }}>
            <Grid container spacing={3} >
                <Grid>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <CardContent sx={{ flex: '1 0 auto' }}>
                            <Typography component="div" variant="h5">
                                Live From Space
                            </Typography>
                            <Typography variant="subtitle1" color="text.secondary" component="div">
                                Mac Miller
                            </Typography>
                        </CardContent>

                    </Box>
                </Grid>
                <Grid>
                    <CardMedia
                        component="img"
                        sx={{ width: 500 }}
                        image={chair}
                        alt="Live from space album cover"
                    />
                </Grid>
            </Grid>
        </Box>
    );
};

export default Banner;