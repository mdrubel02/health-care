import { Box, Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';


const Information = () => {
    const items = [
        { id: '01', img: clock, title: 'Opening Hours', description: 'Lorem Ipsum is simply dummy text of the pri' },
        { id: '01', img: marker, title: 'Visit our location', description: 'Brooklyn, NY 10036, United States' },
        { id: '01', img: phone, title: 'Contact us now', description: '+000 123 456789' },
    ]
    return (
        <Container>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{lg:3, xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {items.map((item) => (
                        <Grid spacing={{lg:4}} xs={2} sm={4} md={4} key={item.id}>
                            <Card sx={{ display: 'flex' ,backgroundColor: 'red'  }}>
                                <CardMedia
                                    component="img"
                                    sx={{ width: 151 }}
                                    image={item.img}
                                    alt="Live from space album cover"
                                />
                                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                    <CardContent sx={{ flex: '1 0 auto' }}>
                                        <Typography component="div" variant="h5">
                                            {item.title}
                                        </Typography>
                                        <Typography variant="subtitle1" color="text.secondary" component="div">
                                            {item.description}
                                        </Typography>
                                    </CardContent>
                                </Box>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Container>
    );
};

export default Information;