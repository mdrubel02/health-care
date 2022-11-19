import { Box, Card, CardContent, CardMedia, Grid, Paper, styled, Typography } from '@mui/material';
import React from 'react';
import cavity from '../../../assets/images/cavity.png';
import fluoride from '../../../assets/images/fluoride.png';
import whitening from '../../../assets/images/whitening.png';
const Services = () => {
    const services = [
        { id: '01', img: fluoride, title: 'Fluoride Treatment', description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the' },
        { id: '02', img: cavity, title: 'Cavity Filling', description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the, United States' },
        { id: '03', img: whitening, title: 'Teeth Whitening', description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the, United States' },
    ]
    const Item = styled(Paper)(({ theme }) => ({

        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(0),
        textAlign: 'center',
        color: theme.palette.text.secondary,
       
    }));
   
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ lg: 3, xs: 2, md: 3 }} >
                {services.map((service, index) => (
                    <Grid item xs={12} sm={12} md={6} lg={4} key={index}>
                        <Item> <Card sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#19D3AE', padding: '10px' }}>
                            <CardMedia
                                component="img"
                                sx={{ width: 50, height: 50, }}
                                image={service.img}
                                alt="Live from space album cover"
                            />
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <CardContent sx={{ flex: '1 0 auto' }}>
                                    <Typography component="div" variant="h5">
                                        {service.title}
                                    </Typography>
                                    <Typography variant="subtitle1" color="text.secondary" component="div">
                                        {service.description}
                                    </Typography>
                                </CardContent>
                            </Box>
                        </Card>
                        </Item>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Services;