import React, { useState } from 'react';
import { Box, AppBar, Toolbar, Typography, Button, Container, CssBaseline, Paper, IconButton, useMediaQuery, useTheme } from '@mui/material';
import { styled } from '@mui/system';
import { useUserContext } from '../ContextApi/UserContext';
import { useNavigate } from 'react-router-dom';
import {StdSidebar} from './StdSidrbar';
// import LogoImage from '../../logo/logo.png'; // Import your logo image
import { Menu as MenuIcon } from '@mui/icons-material'; // Import the MenuIcon for the IconButton
import { Outlet } from "react-router-dom";
// import HomePage from "../components/HomePage/Home";

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  borderRadius: theme.spacing(2),
  boxShadow: theme.shadows[3],
  backgroundColor: theme.palette.background.paper,
}));

const Navbar = styled(AppBar)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'none', // Hide Navbar on desktop screens
  },
}));

function Body(props) {
    return (
        <>
        {/* <Faculty/>
        <Divider />
        <Guryaha/>
        <Divider />
        <Images/>
        <Divider />
        <Services/>
        <Divider />
        <Contacts/> */}
        
        <Outlet/> 
       
        </>
    );
  }
const DashboardPage = () => {
  const { setIsLogin } = useUserContext();
  const navigate = useNavigate();
  const theme = useTheme(); // Access the theme

  const isMobile = useMediaQuery(theme.breakpoints.down('md')); // Check if the screen size is mobile

  const [isSidebarOpen, setIsSidebarOpen] = useState(!isMobile); // Initially open sidebar on desktop
  const [opeTogle,setOpenTogler]=useState(false)
  const {Std,LogOut} = useUserContext()
  const handleTogler=()=>{
    setOpenTogler(!opeTogle)
    console.log("Open",opeTogle)
  }
  const handleLogout = () => {
    setIsLogin(false);
    navigate('/Stdlogin');
  };

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
    console.log('handleSidebarToggle',isSidebarOpen);
    // Toggle the sidebar state
  };

  return (
    <Box sx={{ display: 'flex', backgroundColor: '#f0f2f5', minHeight: '100vh' }}>
      <CssBaseline />
      <Navbar position="fixed">
        <Toolbar>
          <IconButton
            sx={{ p: 0 }}
            onClick={handleTogler}
          >
            <MenuIcon sx={{ color: 'white' }} />
          </IconButton>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
           
            <img src={"https://firebasestorage.googleapis.com/v0/b/scms-c1999.appspot.com/o/logo.png?alt=media&token=bd3609f9-d878-4671-99f0-4ad4af6e489c"} alt="Logo" style={{ width: 40, marginLeft: isMobile ? 0 : 10 }} />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, ml: isMobile ? 1 : 2 }}>
              Dashboard
            </Typography>
          </Box>
          
        </Toolbar>
      </Navbar>
      <StdSidebar openDrower={opeTogle} drowerClouse={handleTogler}/>
      {/* {!isMobile && <StdSidebar openDrowerstd={opeTogle} drowerstdClouse={handleTogler} />} Render the sidebar only if not on mobile */}
      <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[400],
            flexGrow: 3,
            height: '200vh',
            overflow: 'auto',
          }}
        >
          
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          
            <Body sx={{ pt: 2 }} />
            
          </Container>
        </Box>
    </Box>
  );
};

export default DashboardPage;
