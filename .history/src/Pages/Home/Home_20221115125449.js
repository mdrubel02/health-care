import { Container } from '@mui/material';
import React from 'react';
import Banner from './Banner/Banner';
import Information from './Information/Information';
import New from './New';


const Home = () => {
    return (
        <Container>
           <Banner />
           <Information/>
          <New/>
        </Container>
    );
};

export default Home;