import { Box, useTheme } from '@mui/material';
import React from 'react';
import { tokens } from '../../Theme/Theme';

const Appointment = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <Box
        sx={{ backgroundColor: `${colors.grey[500]} !important`, height: '200px'}}
        >
            <h1 sx={{textColor: `${colors.greenAccent[500]} !important`}}>this is appointment page</h1>
        </Box>
    );
};

export default Appointment;