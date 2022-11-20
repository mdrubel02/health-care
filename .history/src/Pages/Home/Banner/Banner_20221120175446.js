import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import chair from '../../../assets/images/chair.png'

const Banner = () => {
    return (
        <Box mb={8}>
            <Typography align="center" variant="h3" sx={{ fontWeight: 900 }}>
                Doctors<b style={{ color: "red" }}>Portal</b>
            </Typography>
            <Typography align="center" variant="body2" sx={{ fontWeight: 100 }}>
                We Make you look the better of you!
            </Typography>
            <Box
                sx={{
                    backgroundImage: `url(${chair})`,
                    backgroundRepeat: "no-repeat",
                    backgroundColor: "black",
                    backgroundAttachment: {md:'fixed', xs: 'static'},
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    height: 600,
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <Box
                    sx={{
                        width: { xs: "100%", sm: "50%", md: "40%" },
                        padding: { xs: 3, sm: 2, md: 20, lg: 20 },
                        marginTop: {xs: 15, md:0, lg: 0, }
                    }}
                >
                    <Box sx={{ background: "white", opacity: "0.8", }}>
                        <Typography variant={"h6"} color="tomato" align="center" pt={8}>
                            Trending Styles
                        </Typography>
                        <Typography variant="h4" align="center">
                            Your New Smile Starts Here
                        </Typography>
                        <Typography variant="body1" pl={3} pr={3} pb={2}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
                        </Typography>
                        <Typography align="center" pb={8}>
                            <Button
                                sx={{
                                    background:
                                        'linear-gradient(to bottom, #04C8A4 , ' +
                                        '#00A187, #05806D 100%)',
                                    color: 'white',
                                }}
                                variant='outlined'>GET STARTED</Button>
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
       
    );
};

export default Banner;