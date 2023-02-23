import * as React from 'react';
import {useState} from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
import { Navigate, useNavigate } from 'react-router-dom';
import {  Route } from "react-router";

import { useAuth } from 'src/hooks/useAuth';
import {login_api} from 'src/api/auth'

import {Avatar, Button, TextField, FormControlLabel, Checkbox, Link, Paper, Box, Grid, Typography} from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

export default function Login() {

  const {login} = useAuth();

  const [state, setState] = useState({
    email: "",
    password: ""
  });

  let navigate = useNavigate();

  const handleInputchange = (e) => {

    const {id, value} = e.target
    setState(prevState => ({
        ...prevState,
        [id]: value
    }))
  }

  const handleSubmit = async () => {
    console.log("click!!!");
    let data = {
      'email': state.email,
      'password': state.password
    }

    let res = await login_api(data);
    console.log("return_val", res);
    let user_data = {
      email: data.email,
      authToken: res.data.accessToken,
    }
    if(res.status = 'success'){

      console.log("context:::", user_data);
      await login(user_data);
      navigate("/overview");

    }
    console.log(state.email, state.password);
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={12}
          sm={4}
          md={6}
          style={{backgroundColor:'#ffffff'}}
        >
          <Box
            sx={{
              my: 10,
              mx: 28,
              display: 'flex',
              flexDirection: 'column',
            }}
            style={{width:'30vw', height:'80vh', paddingRight:'30px', paddingLeft:'30px'}}
          >
            <div style={{width:'8vw', height:'6vh', backgroundColor:'#777777', marginTop:'40%', textAlign:'center'}} />
            <h1 style={{marginTop:'0', marginBottom:'0'}}>Welcome to xxxx</h1>
            <p><b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore mag</b></p>
            <p style={{marginLeft:'auto',marginRight:'auto'}}>Don’t have an account? Sign up right now!</p>

            <Button
                type="submit"
                fullWidth
                disableRipple
                component={RouterLink}
                to="/signup"
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                style = {{backgroundColor:"#FFBBBB", marginTop:'0'}}
            >Sign Up</Button>

          </Box>
        </Grid>
        <Grid item xs={12} sm={8} md={6} alignItems='center' style={{textAlign:'center'}} justifyContent="center">
          <Box
            sx={{
              my: 20,
              mx: 20,
              borderRadius: '3%',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: 12,
            }}
            style={{width:'30vw', height:'60vh', paddingRight:'30px', paddingLeft:'30px'}}
          >
            <br/><br/>
            <Typography component="h1" variant="h5" style={{textAlign:'left'}}>
              <b>Login</b>
            </Typography>
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <p style={{textAlign:'left', marginBottom:'0', marginTop:'20%'}}>Email/Account number</p>
              <TextField
                size="small"
                required
                fullWidth
                id="email"
                name="email"
                type="email"
                value={state.email}
                autoFocus
                style={{marginTop:'0', marginBottom:'5%'}}
                onChange = {handleInputchange}
              />
              <p style={{textAlign:'left', marginBottom:'0'}}>Password</p>
              <TextField
                margin="normal"
                size="small"
                required
                fullWidth
                id="password"
                name="password"
                type="password"
                value={state.password}
                autoFocus
                style={{marginTop:'0', marginBottom:'5%'}}
                onChange = {handleInputchange}
              />
              <Button
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                style = {{backgroundColor:"#FFBBBB"}}
                onClick={handleSubmit}
              >
                Login
              </Button>

              <Link href="#" variant="body2">
                Forgot password?
              </Link>

              {/* <Copyright sx={{ mt: 5 }} /> */}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}