import * as React from 'react';
import {useState, useEffect} from 'react'

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';

import { NavLink as RouterLink } from 'react-router-dom';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { fromUnixTime } from 'date-fns';


function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function Signup() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone1, setPhone1] = useState("");
  const [phone2, setPhone2] = useState("");


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
            <p style={{marginLeft:'auto',marginRight:'auto'}}>Already having an account? Login right now!</p>
            <Button
                type="submit"
                disableRipple
                component={RouterLink}
                to="/login"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                style = {{backgroundColor:"#FFBBBB", marginTop:'0'}}
            >Login</Button>
          </Box>
        </Grid>
        <Grid item xs={12} sm={8} md={6} alignItems='center' style={{textAlign:'center'}} justifyContent="center">
          <Box
            sx={{
              my: 10,
              mx: 20,
              borderRadius: '3%',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: 12,
            }}
            style={{width:'30vw', height:'78vh', paddingRight:'30px', paddingLeft:'30px'}}
          >
            <br/><br/>
            {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar> */}
            <Typography component="h1" variant="h5" style={{textAlign:'left'}}>
              <b>Sign Up</b>
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <p style={{textAlign:'left', marginBottom:'0'}}>Logo</p>
              <div style={{width:'4vw', height:'6vh', backgroundColor:'#777777'}}/>
              <p style={{textAlign:'left', marginBottom:'0'}}>Business Name</p>
              <TextField
                size="small"
                required
                fullWidth
                id="name"
                name="name"
                type="input"
                autoFocus
                style={{marginTop:'0', marginBottom:'0'}}
                onChange={(e)=>{console.log(e.target.value)}}
              />
              <p style={{textAlign:'left', marginBottom:'0'}}>Business Email</p>
              <TextField
                size="small"
                required
                fullWidth
                id="email"
                name="email"
                type="email"
                autoFocus
                style={{marginTop:'0', marginBottom:'0'}}
              />
              <p style={{textAlign:'left', marginBottom:'0'}}>Customer service phone number</p>
              <TextField
                size="small"
                required
                fullWidth
                name="phone1"
                id="phone1"
                type="input"
                style={{marginTop:'0', marginBottom:'0', width:'27%'}}
              /> &nbsp;&nbsp;
              <TextField
                size="small"
                required
                fullWidth
                name="phone2"
                id="phone2"
                type="input"
                style={{marginTop:'0', marginBottom:'0', width:'70%'}}
              />
              <p style={{textAlign:'left', marginBottom:'0'}}>Business Address</p>
              <TextField
                size="small"
                required
                fullWidth
                name="address1"
                id="address1"
                type="input"
                style={{marginTop:'0', marginBottom:'0', width:'27%'}}
              /> &nbsp;&nbsp;
              <TextField
                size="small"
                required
                fullWidth
                name="address2"
                id="address2"
                type="input"
                style={{marginTop:'0', marginBottom:'0', width:'70%'}}
              />
              <p style={{textAlign:'left', marginBottom:'0'}}>Password</p>
              <TextField
                size="small"
                required
                fullWidth
                id="password"
                name="password"
                type="password"
                autoFocus
                style={{marginBottom:'0', marginTop:'0'}}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                style = {{backgroundColor:"#FFBBBB"}}
              >
                Sign Up
              </Button>
              {/* <Copyright sx={{ mt: 5 }} /> */}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}