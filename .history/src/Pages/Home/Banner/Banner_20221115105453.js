import React from 'react';
import { Box, Button, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import chair from '../../../assets/images/chair.png'

const Banner = () => {
    return (
        <Box sx={{  marginTop: '8rem', marginBottom: '3rem' }}>
            <Grid sx={{ flexGrow: 2}} container spacing={4}  >
                <Grid xs={12} md={12} lg={6}>
                    <Box sx={{ padding: '.5rem' }}>
                        <CardContent sx={{ flex: '1 0 auto' }}>
                            <Typography component="div" variant="h1" marginBottom='1.5rem'>
                                Your New Smile Starts Here
                            </Typography>
                            <Typography variant="subtitle1" color="text.secondary" component="p" sx={{marginBottom: '1rem'}}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
                            </Typography>
                            <Button 
                            sx={{
                                background:
                                  'linear-gradient(to bottom, #b7ebde , ' +
                                  '#00A187, #05806D 100%)',
                                  color:'white',
                              }}
                              
                            variant='content'>GET STARTED</Button>
                        </CardContent>

                    </Box>
                </Grid>
                <Grid xs={6} md={12} lg={6}>
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