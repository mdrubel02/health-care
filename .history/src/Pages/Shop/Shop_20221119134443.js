import { useMediaQuery, useTheme } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Shop = () => {
    const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
    return (
        <div>
            {
                matches ? <Box sx={{backgroundColor: 'red'}}><h1>hello</h1></Box>
                : <Box sx={{backgroundColor: 'yellow'}}> <h1>hello yellow</h1></Box>
            }
        </div>
    );
};

export default Shop;