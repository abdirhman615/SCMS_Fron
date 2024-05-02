
import { Box ,Stack,Typography,Drawer,Avatar} from "@mui/material"
//import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
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

// import Link from '@mui/material/Link';
// // or
// import { Link } from '@mui/material';
export const Sidebar = ({openDrower,drowerClouse})=>{ 
  const [selectedMenu,setMenu]=useState('')
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

<Box >
<Avatar alt="Remy Sharp"  sx={{alignItems: "center", display: "flex", justifyContent: "space-between",  width: 70, height:70, }} src="../../logo/logo.png" />
  </Box>
  
</Stack>
</Box>
    
  {/* Menu */}
  
    <Box>
      
   <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }} component="nav" >
    
   <Link to={'Dashboard'} style={{textDecoration:"none",color:"black"}}>
      <ListItemButton onClick={()=>setMenu('Dashboard')}  sx={[ selectedMenu==='Dashboard' && {bgcolor:"primary.main",color:"white",":hover":{bgcolor:"primary.dark"}}]}>
        <ListItemIcon>
          <DashboardIcon sx={[ selectedMenu==='Dashboard' && {color:"white"}]} />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>

      </Link>
    <Link to={'Faculty'} style={{textDecoration:"none",color:"black"}}>
      <ListItemButton onClick={()=>setMenu('Faculty')}  sx={[ selectedMenu==='Faculty' && {bgcolor:"primary.main",color:"white",":hover":{bgcolor:"primary.dark"}}]}>
        <ListItemIcon>
          <LocalLibraryIcon sx={[ selectedMenu==='Faculty' && {color:"white"}]} />
        </ListItemIcon>
        <ListItemText primary="Faculty" />
      </ListItemButton>

      </Link>
    <Link to={'Department'} style={{textDecoration:"none",color:"black"}}>
      <ListItemButton onClick={()=>setMenu('Department')}  sx={[ selectedMenu==='Department' && {bgcolor:"primary.main",color:"white",":hover":{bgcolor:"primary.dark"}}]}>
        <ListItemIcon>
          <GroupsIcon sx={[ selectedMenu==='Department' && {color:"white"}]} />
        </ListItemIcon>
        <ListItemText primary="Department" />
      </ListItemButton>
      
      </Link>



      <Link to={'Class'} style={{textDecoration:"none",color:"black"}}>
      <ListItemButton
      sx={[selectedMenu ==='Class' && {bgcolor:"primary.main",color:"white",":hover":{bgcolor:"primary.dark"}}]}
      onClick={()=>setMenu('Class')} >
        <ListItemIcon>
          <ClassIcon sx={[selectedMenu === 'Class' && {color:"white"}]}/>
        </ListItemIcon>
        <ListItemText primary="Class" />
      </ListItemButton>
</Link>

<Link to={'Student'} style={{textDecoration:"none",color:"black"}}>
      <ListItemButton
      sx={[selectedMenu ==='Student' && {bgcolor:"primary.main",color:"white",":hover":{bgcolor:"primary.dark"}}]}
      onClick={()=>setMenu('Student')} >
        <ListItemIcon>
          <GroupAddIcon sx={[selectedMenu === 'Student' && {color:"white"}]}/>
        </ListItemIcon>
        <ListItemText primary="Student" />
       
      </ListItemButton>
      </Link>

      <Link to={'Complain'} style={{textDecoration:"none",color:"black"}}>
      <ListItemButton
      sx={[selectedMenu ==='Complain' && {bgcolor:"primary.main",color:"white",":hover":{bgcolor:"primary.dark"}}]}
      onClick={()=>setMenu('Complain')} >
        <ListItemIcon>
          <AssignmentIndIcon sx={[selectedMenu === 'Complain' && {color:"white"}]}/>
        </ListItemIcon>
        <ListItemText primary="Complain" />
        
      </ListItemButton>

      </Link>

      <Link to={'Reply'} style={{textDecoration:"none",color:"black"}}>
      <ListItemButton  sx={[selectedMenu ==='Reply' && {bgcolor:"primary.main",color:"white",":hover":{bgcolor:"primary.dark"}}]}
      onClick={()=>setMenu('Reply')} >
        <ListItemIcon>
          <ChatIcon sx={[selectedMenu === 'Reply' && {color:"white"}]} />
        </ListItemIcon>
        <ListItemText primary="Reply" />
      </ListItemButton>
      </Link>

      <Link to={'User'} style={{textDecoration:"none",color:"black"}}>
      <ListItemButton
      sx={[selectedMenu ==='User' && {bgcolor:"primary.main",color:"white",":hover":{bgcolor:"primary.dark"}}]}
      onClick={()=>setMenu('User')} >
        <ListItemIcon>
          <ContactsIcon sx={[selectedMenu === 'User' && {color:"white"}]}/>
        </ListItemIcon>
        <ListItemText primary="User" />
        
      </ListItemButton>
    </Link>

    </List>
    </Box> 
    </Box>
</Drawer>
{/* big screen menu */}
    <Box sx={{width:"300px",height:"100vh",display:{
        xs:"none",
       
        md:"block"
    },borderRight:1,borderColor:"#eee"}}> 
  

<Box sx={{p:4}}>


</Box>
    
    


    {/* Menu list */}
    

   
    <Box>
   <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
 
    >
      {/* <ListItemButton >
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton> */}
    
    
    <Link to={'Dashboard'} style={{textDecoration:"none",color:"black"}}>
      <ListItemButton onClick={()=>setMenu('Dashboard')}  sx={[ selectedMenu==='Dashboard' && {bgcolor:"primary.main",color:"white",":hover":{bgcolor:"primary.dark"}}]}>
        <ListItemIcon>
          <DashboardIcon sx={[ selectedMenu==='Dashboard' && {color:"white"}]} />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>

      </Link>
    <Link to={'Faculty'} style={{textDecoration:"none",color:"black"}}>
      <ListItemButton onClick={()=>setMenu('Faculty')}  sx={[ selectedMenu==='Faculty' && {bgcolor:"primary.main",color:"white",":hover":{bgcolor:"primary.dark"}}]}>
        <ListItemIcon>
          <LocalLibraryIcon sx={[ selectedMenu==='Faculty' && {color:"white"}]} />
        </ListItemIcon>
        <ListItemText primary="Faculty" />
      </ListItemButton>

      </Link>
    <Link to={'Department'} style={{textDecoration:"none",color:"black"}}>
      <ListItemButton onClick={()=>setMenu('Department')}  sx={[ selectedMenu==='Department' && {bgcolor:"primary.main",color:"white",":hover":{bgcolor:"primary.dark"}}]}>
        <ListItemIcon>
          <GroupsIcon sx={[ selectedMenu==='Department' && {color:"white"}]} />
        </ListItemIcon>
        <ListItemText primary="Department" />
      </ListItemButton>
      
      </Link>



      <Link to={'Class'} style={{textDecoration:"none",color:"black"}}>
      <ListItemButton
      sx={[selectedMenu ==='Class' && {bgcolor:"primary.main",color:"white",":hover":{bgcolor:"primary.dark"}}]}
      onClick={()=>setMenu('Class')} >
        <ListItemIcon>
          <ClassIcon sx={[selectedMenu === 'Class' && {color:"white"}]}/>
        </ListItemIcon>
        <ListItemText primary="Class" />
      </ListItemButton>
</Link>

<Link to={'Student'} style={{textDecoration:"none",color:"black"}}>
      <ListItemButton
      sx={[selectedMenu ==='Student' && {bgcolor:"primary.main",color:"white",":hover":{bgcolor:"primary.dark"}}]}
      onClick={()=>setMenu('Student')} >
        <ListItemIcon>
          <GroupAddIcon sx={[selectedMenu === 'Student' && {color:"white"}]}/>
        </ListItemIcon>
        <ListItemText primary="Student" />
       
      </ListItemButton>
      </Link>

      <Link to={'Complain'} style={{textDecoration:"none",color:"black"}}>
      <ListItemButton
      sx={[selectedMenu ==='Complain' && {bgcolor:"primary.main",color:"white",":hover":{bgcolor:"primary.dark"}}]}
      onClick={()=>setMenu('Complain')} >
        <ListItemIcon>
          <AssignmentIndIcon sx={[selectedMenu === 'Complain' && {color:"white"}]}/>
        </ListItemIcon>
        <ListItemText primary="Complain" />
        
      </ListItemButton>

      </Link>

      <Link to={'Reply'} style={{textDecoration:"none",color:"black"}}>
      <ListItemButton  sx={[selectedMenu ==='Reply' && {bgcolor:"primary.main",color:"white",":hover":{bgcolor:"primary.dark"}}]}
      onClick={()=>setMenu('Reply')} >
        <ListItemIcon>
          <ChatIcon sx={[selectedMenu === 'Reply' && {color:"white"}]} />
        </ListItemIcon>
        <ListItemText primary="Reply" />
      </ListItemButton>
      </Link>

      <Link to={'User'} style={{textDecoration:"none",color:"black"}}>
      <ListItemButton
      sx={[selectedMenu ==='User' && {bgcolor:"primary.main",color:"white",":hover":{bgcolor:"primary.dark"}}]}
      onClick={()=>setMenu('User')} >
        <ListItemIcon>
          <ContactsIcon sx={[selectedMenu === 'User' && {color:"white"}]}/>
        </ListItemIcon>
        <ListItemText primary="User" />
        
      </ListItemButton>
    </Link>
    </List>
    </Box>  
    </Box>
    </>
}

// import React, { useState } from 'react'
// import {Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, Typography} from '@mui/material'
// import { AdbSharp, Dashboard } from '@mui/icons-material'
// import { Link } from 'react-router-dom'
// export default function Sidebar({openDrower,drowerClouse}) {
//   const[selectmenu,setSelectmnu]=useState('')
//   return<>
// <Drawer 
// open={openDrower}
//  onClose={drowerClouse}>

//     <Box sx={{width: '100%', height: ''}}>
//       <Box sx={{p:4}}>
//         <Stack direction={'row'} spacing={4}>
//           <Box>
//             <AdbSharp sx={{color:"red",fontSize:"45px", height:"40"}}/>
//           </Box>
// <Typography variant='h6'>Logo name</Typography>
//         </Stack>
//       </Box>

//       {/* <smal screen></smal> */}

//       <Box>
// <Box sx={{width: '100%',maxWidth:360,bgcolor:""}}>

//   <nav aria-label='main mailbox folders'>
//     <List>

//     <ListItem disablePadding>
//       <ListItemButton>
//         <ListItemIcon>
//           <Dashboard></Dashboard>
//           <ListItemText primary="Dashbourd"/>
//         </ListItemIcon>
//       </ListItemButton>

//     </ListItem>
//     <Link to={'home'} style={{textDecoration:'none'}}>
//       <ListItemButton onClick={()=>{
//         setSelectmnu('home')
//         drowerClouse()
//       }}>

//     <ListItemIcon>
//       <AdbSharp/>
//      </ListItemIcon>

// <ListItemText primary="home"/>
//       </ListItemButton>
//     </Link>
//     </List>

//   </nav>
// </Box>
//       </Box>
//     </Box>

// {/* <-big screen-> */}

//  </Drawer>
//     <Divider/>
//     <Box>
// <Box sx={{width:'290px',height:'100vh',bgcolor:"",
// display:{
//    xs:"none",
//   md:"block"
// },borderRight:4,borderColor:"gray"}} >
// <Box sx={{width:'200',bgcolor:""}}>
// <Box sx={{p:4}}>
//         <Stack direction={'row'} spacing={2}>
//           <Box>
//             <AdbSharp sx={{color:"red",fontSize:"45px", height:"30"}}/>
//           </Box>
// <Typography variant='h6'>Logo name</Typography>
//         </Stack>
//       </Box>
//       </Box>
// <Box sx={{width: '100%',maxWidth:360,bgcolor:""}}>

// <nav aria-label='main mailbox folders'>
//   <List>

//   <ListItem disablePadding>
//     <ListItemButton>
//       <ListItemIcon>
//         <Dashboard></Dashboard>
//         <ListItemText primary="Dashbourd"/>
//       </ListItemIcon>
//     </ListItemButton>

//   </ListItem>
//   <Link to={'home'} style={{textDecoration:'none'}}>
//     <ListItemButton onClick={()=>{
//       setSelectmnu('home')
//       // drowerClouse()
//     }}>

//   <ListItemIcon>
//     <AdbSharp/>
//    </ListItemIcon>

// <ListItemText primary="home"/>
//     </ListItemButton>
//   </Link>
//   </List>

// </nav>
// <Divider/>
// </Box>


// </Box>
// </Box>
//     </>
  
// }