import { Box, Typography, useTheme } from '@mui/material';
import React from 'react';
import { tokens } from '../../Theme/Theme';

const Appointment = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <Box
        sx={{ backgroundColor: `${colors.grey[500]} !important`, height: '200px'}}
        >
            <Typography sx={{color: `${colors.greenAccent[500]} !important`}}>this is appointment page</Typography>
        </Box>
    );
};

export default Appointment;