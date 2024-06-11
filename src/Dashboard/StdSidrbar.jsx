
import {  Stack,Avatar} from "@mui/material"
//import ListSubheader from '@mui/material/ListSubheader';

import { Box, Drawer, List, ListItem, ListItemIcon, ListItemText, Divider, Button, useMediaQuery, useTheme ,Typography} from '@mui/material';
import { Home as HomeIcon, ExitToApp as ExitToAppIcon, AddCircleOutline as AddCircleOutlineIcon } from '@mui/icons-material';

import ListItemButton from '@mui/material/ListItemButton';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupsIcon from '@mui/icons-material/Groups';
import ClassIcon from '@mui/icons-material/Class';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import ChatIcon from '@mui/icons-material/Chat';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import ContactsIcon from '@mui/icons-material/Contacts';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
//import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
// import ExpandLess from '@mui/icons-material/ExpandLess';
// import ExpandMore from '@mui/icons-material/ExpandMore';
import AddHomeWorkIcon from '@mui/icons-material/AddHomeWork';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
//import { useState } from "react";

// import StarBorder from '@mui/icons-material/StarBorder';
 import { Link } from "react-router-dom";
import { useState } from "react";
import { useUserContext } from '../ContextApi/UserContext';


// import Link from '@mui/material/Link';
// // or
// import { Link } from '@mui/material';
export const StdSidebar = ({openDrower,drowerClouse})=>{ 
  const [selectedMenu,setMenu]=useState('')
  const theme = useTheme();
  const {Std,LogOut,Stdname,IdStd,STDID} = useUserContext()
    return<>
<Drawer
open={openDrower}
  onClose={drowerClouse}
>
<Box sx={{width:"300px"}}> 
<Box sx={{p:2}}>

<Stack direction={'row'} spacing={1}>
<Box>

</Box>
<Avatar alt="Remy Sharp"  sx={{display: "flex",alignItems: "center",  justifyContent: "center",  width: 70, height:70, }} src="https://firebasestorage.googleapis.com/v0/b/scms-c1999.appspot.com/o/logo.png?alt=media&token=bd3609f9-d878-4671-99f0-4ad4af6e489c" />

<Box >

  </Box>
  
</Stack>

</Box>
    
  {/* Menu */}
  
    <Box>
    <Typography  gutterBottom sx={{ color: theme.palette.primary.dark, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              
              {Stdname}   
              
           </Typography>     
     <Typography  gutterBottom sx={{ color: theme.palette.primary.dark, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
               {IdStd}
           </Typography>
   <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }} component="nav" >
   <Divider />
   <Link to={'HomePage'} style={{textDecoration:"none",color:"black"}}>
      <ListItemButton onClick={()=>setMenu('HomePage')}  sx={[ selectedMenu==='HomePage' && {bgcolor:"primary.main",color:"white",":hover":{bgcolor:"primary.dark"}}]}>
        <ListItemIcon>
          <DashboardIcon sx={[ selectedMenu==='HomePage' && {color:"white"}]} />
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
        <ListItemText primary="ViewComplaints" />
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

    </List>
    </Box> 
    </Box>
</Drawer>
{/* big screen menu */}
    <Box sx={{width:"300px",height:"100vh",display:{
        xs:"none",
       
        md:"block"
    },borderRight:1,borderColor:"#eee"}}> 
  


    
    


    {/* Menu list */}
    

    <Box >
  </Box>
    <Box>
   <List sx={{ width: '100%',height:'1000px', maxWidth: 460, bgcolor: 'background.paper' }}
      component="nav"
 
    >
      {/* <ListItemButton >
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton> */}
    <Avatar alt="Remy Sharp"  sx={{alignItems: "center",marginLeft:9 , display: "flex", justifyContent: "space-between",  width: 70, height:70, }} src="https://firebasestorage.googleapis.com/v0/b/scms-c1999.appspot.com/o/logo.png?alt=media&token=bd3609f9-d878-4671-99f0-4ad4af6e489c" />

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
          <DashboardIcon sx={[ selectedMenu==='HomePage' && {color:"white"}]} />
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
        <ListItemText primary="ViewComplaints" />
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
    </List>
    </Box>  
    </Box>
    </>
}

