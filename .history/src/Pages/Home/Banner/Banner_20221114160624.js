import React from 'react';
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import chair from '../../../assets/images/chair.png'

const Banner = () => {
    return (
        <Box sx={{}}>
            <Card sx={{ display: 'flex', justifyContent: 'center'  }}>
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
                    sx={{ width: 500 }}
                    image={chair}
                    alt="Live from space album cover"
                />
            </Card>
        </Box>
    );
};

export default Banner;