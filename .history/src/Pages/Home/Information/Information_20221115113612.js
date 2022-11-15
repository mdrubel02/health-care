import { Box, Card, CardContent, CardMedia, Container, Grid, Paper, styled, Typography } from '@mui/material';
import React from 'react';
import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';


const Information = () => {
    const menus = [
        { id: '01', img: clock, title: 'Opening Hours', description: 'Lorem Ipsum is simply dummy text of the pri' },
        { id: '01', img: marker, title: 'Visit our location', description: 'Brooklyn, NY 10036, United States' },
        { id: '01', img: phone, title: 'Contact us now', description: '+000 123 456789' },
    ]
    const Item = styled(Paper)(({ theme }) => ({

        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(0),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));
    return (
        <Container>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{lg:3, xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {menus.map((menu,index) => (
                        <Grid spacing={{lg:4}} item xs={2} sm={4} md={4} key={index}>
                           <Item> <Card sx={{ display: 'flex' ,backgroundColor: 'red'  }}>
                                <CardMedia
                                    component="img"
                                    sx={{ width: 151, height: 100}}
                                    image={menu.img}
                                    alt="Live from space album cover"
                                />
                                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                    <CardContent sx={{ flex: '1 0 auto' }}>
                                        <Typography component="div" variant="h5">
                                            {menu.title}
                                        </Typography>
                                        <Typography variant="subtitle1" color="text.secondary" component="div">
                                            {menu.description}
                                        </Typography>
                                    </CardContent>
                                </Box>
                            </Card>
                            </Item>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Container>
    );
};

export default Information;