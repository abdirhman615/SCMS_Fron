import React from 'react';
import { Box, Drawer, List, ListItem, ListItemIcon, ListItemText, Divider, Button, useMediaQuery, useTheme ,Typography} from '@mui/material';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import { Home as HomeIcon, ExitToApp as ExitToAppIcon, AddCircleOutline as AddCircleOutlineIcon } from '@mui/icons-material';
import { useUserContext } from '../ContextApi/UserContext';
import { Link } from "react-router-dom";
import ListItemButton from '@mui/material/ListItemButton';
import { useState } from "react";
import DashboardIcon from '@mui/icons-material/Dashboard';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import GroupsIcon from '@mui/icons-material/Groups';
// Import your logo image
// import LogoImage from '../../logo/logo.png';

const SidebarDrawer = styled(Drawer)(({ theme }) => ({
  width: 240,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: 240,
    backgroundColor: theme.palette.background.default,
  },
}));

const StdSidebar  = ({openDrowerstd,drowerstdClouse}) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const [selectedMenu,setMenu]=useState('')
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const {Std,LogOut,Stdname,IdStd,STDID} = useUserContext()
 console.log(STDID)
  const handleLogout = () => {
    // Handle logout logic
    navigate('/login');
  };

  return (
    <SidebarDrawer
    open={openDrowerstd}
  onClose={drowerstdClouse}
      sx={{
        '& .MuiDrawer-paper': {
          boxSizing: 'border-box',
          width: 240,
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', p: 2 }}>
        <img src={"https://firebasestorage.googleapis.com/v0/b/scms-c1999.appspot.com/o/logo.png?alt=media&token=bd3609f9-d878-4671-99f0-4ad4af6e489c"} alt="Logo" style={{ width: 100 }} />
      </Box>
      <Typography  gutterBottom sx={{ color: theme.palette.primary.dark, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 2 }}>
              
               {Stdname}
            </Typography>
            
      <Typography  gutterBottom sx={{ color: theme.palette.primary.dark, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 2 }}>
               {IdStd}
            </Typography>
     <Divider />
     <Link to={'HomePage'} style={{textDecoration:"none",color:"black"}}>
      <ListItemButton onClick={()=>setMenu('HomePage')}  sx={[ selectedMenu==='HomePage' && {bgcolor:"primary.main",color:"white",":hover":{bgcolor:"primary.dark"}}]}>
        <ListItemIcon>
          <HomeIcon sx={[ selectedMenu==='HomePage' && {color:"white"}]} />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>

      </Link>
      <Divider />
    <Link to={'ViewComplaints'} style={{textDecoration:"none",color:"black"}}>
      <ListItemButton onClick={()=>setMenu('ViewComplaints')}  sx={[ selectedMenu==='ViewComplaints' && {bgcolor:"primary.main",color:"white",":hover":{bgcolor:"primary.dark"}}]}>
        <ListItemIcon>
          <LocalLibraryIcon sx={[ selectedMenu==='ViewComplaints' && {color:"white"}]} />
        </ListItemIcon>
        <ListItemText primary="View Complaints" />
      </ListItemButton>

      </Link>
      <Divider />
    <Link to={'FAQs'} style={{textDecoration:"none",color:"black"}}>
      <ListItemButton onClick={()=>setMenu('FAQs')}  sx={[ selectedMenu==='FAQs' && {bgcolor:"primary.main",color:"white",":hover":{bgcolor:"primary.dark"}}]}>
        <ListItemIcon>
          <GroupsIcon sx={[ selectedMenu==='FAQs' && {color:"white"}]} />
        </ListItemIcon>
        <ListItemText primary="FAQs" />
      </ListItemButton>
      
      </Link>
      <Divider />
      <List>
        <ListItem button key="Logout" onClick={() => LogOut()}>
          <ListItemIcon>
            <ExitToAppIcon />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>
      </List>
    </SidebarDrawer>
  );
};

export default StdSidebar;
