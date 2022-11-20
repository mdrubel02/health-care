import { Avatar, Button, Checkbox, FormControlLabel, Grid, Link, Paper, styled, TextField, Typography } from '@mui/material';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import React from 'react';



const LoginPaper = styled(Paper)(({ theme }) => ({
    padding: '20px',
    height: '70vh',
    width: '280px',
    margin: '20px auto',
    [theme.breakpoints.down("md")]: {
        height: '40vh',
        marginTop: '0.5rem'
    },
}));
const Login = () => {

    // const paperStyle={padding :20,height:'70vh',width:280, margin:"20px auto"}
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const btnstyle = { margin: '8px 0' }
    return (
        <Grid>
            <LoginPaper elevation={10}
                sx={{ height: '70vh', width: '280px', margin: '20px auto' }}
            >
                <Grid align='center'>
                    <Avatar style={avatarStyle}><PersonOutlineIcon /></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <form>
                    <TextField pb={5}
                    sx={{paddingBottom:'1rem'}}
                    label='Username' placeholder='Enter username' fullWidth required />
                    <TextField label='Password' placeholder='Enter password' type='password' fullWidth required />
                    <FormControlLabel
                        control={
                            <Checkbox
                                name="checkedB"
                                color="secondary"
                            />
                        }
                        label="Remember me"
                    />
                    <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>
                </form>
                <Typography color={'secondary'}>
                    <Link href="#" color={'secondary'} >
                        Forgot password ?
                    </Link>
                </Typography>
                <Typography > Do you have an account ?
                    <Link href="#" color={'secondary'}>
                        Sign Up
                    </Link>
                </Typography>
            </LoginPaper>
        </Grid>
    );
};

export default Login;