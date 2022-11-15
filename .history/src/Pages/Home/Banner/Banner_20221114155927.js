import React from 'react';
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import chair from '../../../assets/images/chair.png'

const Banner = () => {
    return (
        <section sx={{height: '840px' , backgroundColor: 'red'}}>
            <Card sx={{ display: 'flex' }}>
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
                <CardMedia
                    component="img"
                    sx={{ width: 151 }}
                    image={chair}
                    alt="Live from space album cover"
                />
            </Card>
        </section>
    );
};

export default Banner;