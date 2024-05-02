import React, { useState } from 'react';
import { Box, Button, Container, CssBaseline, TextField, Typography, Paper, Avatar, Link, Grid,Alert } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { styled } from '@mui/system';
import { createTheme, ThemeProvider } from '@mui/material/styles'; // Add import for ThemeProvider and createTheme
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useMutation } from 'react-query';
import axios from 'axios';
import jscookie from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../ContextApi/UserContext';

// Define the StyledPaper component with the background URL
const StyledPaper = styled(Paper)(({ theme }) => ({
  marginTop: theme.spacing(8),
  padding: theme.spacing(4),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
  borderRadius: theme.spacing(2),
  backgroundColor: theme.palette.background.paper,
  backgroundSize: 'cover',
}));

export const LoginPage = () => {
 
  const YupValidate = yup.object({
    Email: yup.string().required('Please enter your username address'),
    STD_Pass: yup.string().required("Please enter your Password"),

  });

const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({ resolver: yupResolver(YupValidate) })



  const usenav = useNavigate()
  const {setIsLogin}= useUserContext();
  const {mutateAsync,isLoading,isError,error,data:response}= useMutation({
      mutationFn: async (data) => {
          return await axios.post ('http://localhost:5000/STDlogin',data)
         //return await axios.post ('https://backend-scms.vercel.app/login',data)
          //  return await axios.post (`${baseURL}/login`,data)
  
      },
      onError:(err)=>{
          console.log('Error',err)
      }
  })
  
  const handleLogin = (data) => {
   
    // console.log("xogta",data);
    mutateAsync(data).then((res) => {
        // console.log("Login  Accepted",res.data.AccessToken);
        jscookie.set('token',res.data.token);
        if(res.status === 200){
            setIsLogin(true);
            usenav('/Dashboard')
        }
    })
  };

  

  return (
    <Box
    sx={{
        backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
        backgroundSize: 'cover',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <StyledPaper elevation={6}>
          <Avatar alt="Remy Sharp"  sx={{  width: 70, height:70 }} src="../../logo/logo.png" />
          <Typography component="h1" variant="h5" gutterBottom color="primary">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit(handleLogin)} noValidate sx={{ width: '100%' }}>
          {isError && <Alert severity="error">Incorrect username or Password</Alert>}
            <TextField
              margin="normal"
              required
              fullWidth
              id="Email"
              label="Email Address"
              name="Email"
              autoComplete="Email"
              autoFocus
              {...register("Email")}
            
              variant="outlined"
            />
             {errors.Email ? (
                  <Typography sx={{ color: "error.main" }}>
                    {errors.Email.message}
                  </Typography>
                ) : null}
            <TextField
              margin="normal"
              required
              fullWidth
              name="STD_Pass"
              label="Password"
              type="STD_Pass"
              id="STD_Pass"
              autoComplete="current-STD_Pass"
              {...register("STD_Pass")}
            />
            {errors.STD_Pass ? (
                  <Typography sx={{ color: "error.main" }}>
                    {errors.STD_Pass.message}
                  </Typography>
                ) : null}
             <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                disabled={isLoading}
              >
                Login
              </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2" color="primary">
                  Forgot password?
                </Link>
              </Grid>
            </Grid>
          </Box>
        </StyledPaper>
      </Container>
    </Box>
  );
};

