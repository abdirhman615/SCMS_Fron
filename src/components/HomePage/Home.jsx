import { Box,Stack,IconButton,Typography,Alert,TextField,Button, Divider,ListItemIcon, Breadcrumbs} from "@mui/material"
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import ListItemButton from '@mui/material/ListItemButton';
import { useNavigate } from "react-router-dom";
import AddHomeWorkIcon from '@mui/icons-material/AddHomeWork';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CircularProgress from '@mui/material/CircularProgress';
import { useEffect, useState } from "react";
// import ComplainList from "./ComplainList";
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios"
import { styled } from '@mui/system';
import {  Container, Grid, Paper } from '@mui/material';
import { ReportProblemOutlined as ReportProblemIcon, VisibilityOutlined as VisibilityIcon, HelpOutlineOutlined as FAQIcon, Input } from '@mui/icons-material';
import { useUserContext } from '../../ContextApi/UserContext';
// import SweetAlert from 'react-bootstrap-sweetalert';
// import { MDBDataTable } from "mdbreact"
import { AddCircleOutlineSharp ,ErrorOutlineOutlined} from "@mui/icons-material";
import { Link } from "react-router-dom";
// import {
//   useMutation,
//     useQuery,
//     useQueryClient
//   } from '@tanstack/react-query'
import ConfirmDelete from "../../../CustomHooks/deleteComponent/ConfirmDelete";
import {  useDeleteHook } from "../../../CustomHooks/deleteComponent/deleteHooks";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {GetQuery,PostQuery,UpdateQuery,DeleteQuery} from '../../../Shared/ReactQuery'
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip'
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
export const HomePage = ()=>{
  const StyledPaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(4),
    textAlign: 'center',
    color: theme.palette.text.primary,
    borderRadius: theme.spacing(2),
    boxShadow: theme.shadows[5],
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
      transform: 'scale(1.03)',
    },
  }));
  
  // Custom styled button for consistency
  const StyledButton = styled(Button)(({ theme }) => ({
    marginTop: theme.spacing(2),
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
  }));



    const YupValidate = yup.object({
        // Student_id: yup.string().required('Enter The Student Id'),
        // department_id: yup.string().required("Enter The department Name"),
        // Class_id: yup.string().required('Enter The Class Name'),
        Description: yup.string().required("Enter The Description"),
        Complain_date: yup.string().required('Enter The Complain Data'),
        // Status: yup.string().required("Enter The Status"),
      });
    
      const {
        register,
        handleSubmit,
        reset,
        setValue,
        formState: { errors },
      } = useForm({ resolver: yupResolver(YupValidate) })


      const navigate = useNavigate();
    const [dailogOpen,setDailog]=useState(false)
    const [selectedMenu,setMenu]=useState('')
    // const queryclient = useQueryClient();
    const [Complaindeleteid,setComplaindeleteid]=useState('')
    const [ComplainId,setComplainId]=useState('')
    const [showAlert, setshowAlert] = useState(false)
    const [apiData, setapiData] = useState("")  
    const[subcatClass,setsubcatClass]= useState([])
    const[subcatDep,setsubcatDep]= useState([])
    const[subcatSTD,setsubcatSTD]= useState([])
    const [Depval,setDepval]=useState('')
    const [Classval,setClassval]=useState('')
    const [STDval,setSTDval]=useState('')
    const {Std,LogOut,STD_id,STDID} = useUserContext()
    const ToggleDailog = ()=>{
        setDailog(!dailogOpen)
    }

    const baseURL =import.meta.env.VITE_APP_API_URL
    useEffect(() =>{
        const subget= async()=>{
    //         const deplist=await axios.get(`${baseURL}department`)
            
    //         const Depval=await deplist.data.Alldepartment
            
    //         setsubcatDep(Depval)
    // console.log(Depval)
    
    
    // const Classlist=await axios.get(`${baseURL}Class`)
    //             const Classval=await Classlist.data.AllClass
    //             setsubcatClass(Classval)
    //              console.log("Classval",Classval)
                 
    const STDlist=await axios.get(`${baseURL}Student`)
                const STDval=await STDlist.data.AllStudent
                setsubcatSTD(STDval)
                 console.log("STDval",STDval)
    
        }
        subget()
    
    }, [])
 
const {data:Complain,isLoading,isError}= GetQuery('/Complain','Complain')

const {mutate,isLoading:mutateLoading} = PostQuery('/complain','complain')

const {mutate:updateMutate,isLoading:updateLoading} = UpdateQuery(`/Complain/${ComplainId}`,'Complain')
 
const {mutate:deleteMutate} = DeleteQuery(`/Complain/${Complaindeleteid}`,'Complain')


const AddNewComplain = async (data)=>{

 
    if(ComplainId !==''){

 try{
//   await UpdateClient(ComplainId,subdata)
// console.log("Data has been Updated")
 toast.success("Data has been Updated")
 ToggleDailog()
 updateMutate(data)
reset()
    } catch( err){
        console.log("error ayaa jira ",err)
        toast.error(err.message)
    }
    }
    else {
        try{
        //     await AddClient(subdata)
        //   console.log("Data has been saved")
          
        mutate(data)
        // toast.success("Xogta waa la Xareye")
          ToggleDailog()
          reset()
              } catch( err){
          console.log("error jiro ",err)
          toast.error(err.message)
              }

    }
    
     
   
}

const UpdateComplainInfo = async (data)=>{
// console.log("xogta la rabbo in la update gareeyo",data)
    setValue("Complainname",data.Complainname)
    setValue("Creationdate",data.Creationdate)
    setComplainId(data._id)
    ToggleDailog()

}


const deletehook = useDeleteHook()

const deleteCheck = ()=>{
    deleteMutate(Complaindeleteid)
    deletehook.Toggle()
   
}

const deleteComplainInfo = async (data)=>{
   deletehook.setMessage(data.Complainname)
    deletehook.Toggle()
    setComplaindeleteid(data._id)
}



    return <>
   <Box p={4}>

   <ConfirmDelete open={deletehook.open} toggle={deletehook.Toggle} message={deletehook.message} confirm={deleteCheck} />



    {/* <Box sx={{display:"flex",justifyContent:"space-between"}} my={2}>
        <Typography variant="h6">List Complain</Typography>
        <IconButton   onClick={ToggleDailog}>
<AddCircleOutlineSharp />
        </IconButton>
    </Box> */}
    <Dialog sx={{
        backdropFilter: "blur(5px) sepia(5%)",
      }} PaperProps={{ sx: { borderRadius: "20px" } }} open={dailogOpen} onClose={ToggleDailog}>
        <DialogTitle sx={{ bgcolor: "primary.dark", color: "white" }}>New Complain</DialogTitle>
        <Box component={"form"} onSubmit={handleSubmit(AddNewComplain)}>
        <DialogContent>
        <Box sx={{width:"400px"}} mt={2}>



<Stack  spacing={2} direction={'column'}>

<TextField label='Student ID' multiline value={STDID}   maxRows={4} variant="outlined" {...register("Student_id")}  size="small"  fullWidth />




<TextField label="Description" multiline maxRows={4} variant="outlined" {...register("Description")}  size="small" fullWidth/>
{errors.Description ? (
                  <Typography sx={{ color: "error.main" }}>
                    {errors.Description.message}
                  </Typography>
                ) : null}
<TextField type="date" variant="outlined" {...register("Complain_date")} size="small" fullWidth/>
{errors.Complain_date ? (
                  <Typography sx={{ color: "error.main" }}>
                    {errors.Complain_date.message}
                  </Typography>
                ) : null}
{/* <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-controlled-open-select-label">Status</InputLabel>
        <Select label="Department id" variant="outlined" {...register("Status")} size="small" fullWidth
        >
          <MenuItem value="">
            <em>Status</em>
          </MenuItem>
          <MenuItem value={"New"}>New</MenuItem>
          <MenuItem value={"Open"}>Open</MenuItem>
          
        </Select>
      </FormControl> */}
    </Stack>

    </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={ToggleDailog}>Cancel</Button>
          <Button variant="contained" disabled={mutateLoading} sx={{bgcolor:"primary"}} type="submit"  size="small">

      {ComplainId !=='' ? "Update" : "Submit"}
          </Button>
 
        </DialogActions>

        </Box>
      </Dialog>



<Divider/>
 {/* {Complain ? <ComplainList deleteComplain={deleteComplainInfo} ComplainData={Complain} update={UpdateComplainInfo} /> : null }
     */}

 
{/* 
 {isError ? (<Box sx={{ display:'flex',justifyContent:'center',textAlign:'center',alignItems:"center",p:10}}>

 <Box>

 <ErrorOutlineOutlined sx={{fontSize:"58px" }} />
 <Typography >Data noy found!</Typography>
     </Box>

 </Box>): isLoading ? (<Box sx={{ display:'flex',justifyContent:'center',textAlign:'center',alignItems:"center",p:10}}>

 <Box>

 <CircularProgress sx={{fontSize:"58px" }} />
 <Typography >Loading...</Typography>
     </Box>

 </Box>) :  <ComplainList DeleteComplain={deleteComplainInfo} ComplainData={Complain?.data.AllComplain} update={UpdateComplainInfo} />  }
  */}

<Container maxWidth="lg">
        <Typography variant="h3" align="center" gutterBottom>
          Student Complaint Management System
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <StyledPaper elevation={5}>
              <ReportProblemIcon fontSize="large" color="primary" sx={{ marginBottom: 2 }} />
              <Typography variant="h5" gutterBottom>
              Gudbi cabasho
              </Typography>
              <Typography variant="body1" paragraph>
              Ka warbixi wixii dhibaato ama dhibaato ah ee aad la kulanto.
              </Typography>
              <StyledButton variant="contained" onClick={ToggleDailog}>Gudbi</StyledButton>
             
            </StyledPaper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <StyledPaper elevation={5}>
              <VisibilityIcon fontSize="large" color="primary" sx={{ marginBottom: 2 }} />
              <Typography variant="h5" gutterBottom>
              Daawo Cabashooyinka
              </Typography>
              <Typography variant="body1" paragraph>
              Hubi heerka cabashadaada ama arag kuwa kale.
              </Typography>
              <Link to={'/Dashboard/ViewComplaints'} style={{textDecoration:"none",color:"black"}}>
      <ListItemButton onClick={()=>
        setMenu('/ViewComplaints')
       
      }  sx={[ selectedMenu==='ViewComplaints' && {bgcolor:"primary.main",color:"white",":hover":{bgcolor:"primary.dark"}}]}>
      
        <ListItemIcon>
          {/* <LocalLibraryIcon sx={[ selectedMenu==='ViewComplaints' && {color:"white"}]} /> */} 
          <Button variant="outlined">Daawo Cabashada</Button>
        </ListItemIcon>
       
        {/* <ListItemText primary="ViewComplaints" /> */}
      </ListItemButton>

      </Link>
             
            </StyledPaper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <StyledPaper elevation={5}>
              <FAQIcon fontSize="large" color="primary" sx={{ marginBottom: 2 }} />
              <Typography variant="h5" gutterBottom>
              Baadh su'aalaha inta badan la is weydiiyo
              </Typography>
              <Typography variant="body1" paragraph>
              U hel jawaabo degdeg ah su'aalaha caadiga ah.
              </Typography>
              <Link to={'/Dashboard/FAQs'} style={{textDecoration:"none",color:"black"}}>
      <ListItemButton onClick={()=>
        setMenu('/FAQs')
       
      }  sx={[ selectedMenu==='FAQs' && {bgcolor:"primary.main",color:"white",":hover":{bgcolor:"primary.dark"}}]}>
      
        <ListItemIcon>
          <Button variant="outlined">Daawo su'aalaha </Button>
        </ListItemIcon>
             </ListItemButton>

      </Link>
            </StyledPaper>
          </Grid>
        </Grid>
      </Container>
   
     </Box>       
    </>
}