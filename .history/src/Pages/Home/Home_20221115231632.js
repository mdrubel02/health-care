import { Container } from '@mui/material';
import React from 'react';
import Banner from './Banner/Banner';
import Information from './Information/Information';



const Home = () => {
    return (
        <Container>
            <Banner />
            <Information />

        </Container>
    );
};

export default Home;