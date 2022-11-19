import { Box, Typography } from '@mui/material';
import React from 'react';


const New = () => {


    return (
        <>
            <Box
                p={5}
                backgroundColor='#B3D2E6'
                width={'100%'}
                height={'100%'}
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                flex={1}
            >
                <Box borderRadius={16} width={240} height={160} />
                <Box width={'100%'}>

                    <Typography>hello</Typography>
                </Box>
            </Box>

        </>
    );
};

export default New;