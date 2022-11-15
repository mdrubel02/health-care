import { Box, useTheme } from '@mui/material';
import React from 'react';
import { tokens } from '../../Theme/Theme';

const Appointment = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <Box
        sx={{backgroundColor: 'red', height: '200px'}}
        >
            <h1>this is appointment page</h1>
        </Box>
    );
};

export default Appointment;