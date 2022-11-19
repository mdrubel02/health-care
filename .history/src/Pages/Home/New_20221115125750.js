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

// import React from 'react';
// import Box from '@material-ui/core/Box';
// import { useFloatShadowStyles } from '@mui-treasury/styles/shadow/float';

// const FloatShadow = () => {
//   const styles = useFloatShadowStyles();
//   return <Box width={'80%'} borderRadius={24} height={160} classes={styles} />;
// };

// export default FloatShadow;