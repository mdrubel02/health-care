import React, { useEffect, useState } from 'react';
import { Grid, useMediaQuery, useTheme, Container } from '@mui/material';
import SingleProduct from './SingleProduct';
import SingleProductDesktop from './SingleProductDesktop';



const Shop = () => {
    const [products, setProducts] = useState([])
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("md"));


    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const renderProducts = products.map((product) => (
        <Grid item key={product.id} xs={2} sm={4} md={4} display="flex" flexDirection={'column'} alignItems="center">
            {matches ? (
                <SingleProduct product={product} matches={matches} />
            ) : (
                <SingleProductDesktop product={product} matches={matches} />
            )}
        </Grid>
    ));
    return (
        <Container>
            <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                justifyContent="center"
                sx={{ margin: `20px 4px 10px 4px` }}
                columns={{ xs: 4, sm: 8, md: 12 }}
            >
                {renderProducts}
            </Grid>
        </Container>
    );
};

export default Shop;