import { Container } from '@mui/material';
import React from 'react';
import Banner from './Banner/Banner';
import Information from './Information/Information';
import Services from './Services/Services';



const Home = () => {
    return (
        <Container>
            <Banner />
            <Information />
            <Services />
           
        </Container>
    );
};

export default Home;