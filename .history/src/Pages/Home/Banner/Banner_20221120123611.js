import React from 'react';
import { Box, Button, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import chair from '../../../assets/images/chair.png'

const Banner = () => {
    return (
        <Box>
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
                    // backgroundAttachment: "fixed",
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
                    }}
                >
                    <Box sx={{ background: "white", opacity: "0.8", }}>
                        <Typography variant={"h6"} color="tomato" align="center" pt={8}>
                            Trending Styles
                        </Typography>
                        <Typography variant="h4" align="center">
                            Your New Smile Starts Here
                        </Typography>
                        <Typography variant="body1" pl={3} pr={3} pb={8}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
        //old
        // <Box sx={{  marginTop: '8rem', marginBottom: '3rem' }}>
        //     <Grid sx={{ flexGrow: 2}} container spacing={4}  >
        //         <Grid xs={12} md={12} lg={6}>
        //             <Box sx={{ padding: '.5rem' }}>
        //                 <CardContent sx={{ flex: '1 0 auto' }}>
        //                     <Typography component="div" variant="h1" marginBottom='1.5rem'>
        //                         Your New Smile Starts Here
        //                     </Typography>
        //                     <Typography variant="subtitle1" color="text.secondary" component="p" sx={{marginBottom: '1rem'}}>
        //                         Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
        //                     </Typography>
        //                     <Button 
        //                     sx={{
        //                         background:
        //                           'linear-gradient(to bottom, #04C8A4 , ' +
        //                           '#00A187, #05806D 100%)',
        //                           color:'white',
        //                       }}

        //                     variant='content'>GET STARTED</Button>
        //                 </CardContent>

        //             </Box>
        //         </Grid>
        //         <Grid xs={6} md={12} lg={6}>
        //             <CardMedia
        //                 component="img"
        //                 sx={{ width: 500 }}
        //                 image={chair}
        //                 alt="Live from space album cover"
        //             />
        //         </Grid>
        //     </Grid>
        // </Box>
    );
};

export default Banner;