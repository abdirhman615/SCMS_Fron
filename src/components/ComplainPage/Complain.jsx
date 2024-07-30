import { Box,Stack,IconButton,Typography,Alert,TextField,Button, Divider, Breadcrumbs} from "@mui/material"
import AddHomeWorkIcon from '@mui/icons-material/AddHomeWork';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CircularProgress from '@mui/material/CircularProgress';
import { useEffect, useState } from "react";
import ComplainList from "./ComplainList";
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios"
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
import CssBaseline from '@mui/material/CssBaseline';

import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip'
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
export const Complain = ()=>{
    const YupValidate = yup.object({
        // Student_id: yup.string().required('Enter The Student Id'),
        // department_id: yup.string().required("Enter The department Name"),
        // Class_id: yup.string().required('Enter The Class Name'),
        // Description: yup.string().required("Enter The Description"),
        // Complain_date: yup.string().required('Enter The Complain Data'),
       
        //   Reply_ID: yup.string().required('Enter The Reply ID'),
        //   Complain_id: yup.string().required('Enter The Complain '),
          Message: yup.string().required("Enter The Massage"),
      
        // Status: yup.string().required("Enter The Status"),
      });
    
      const {
        register,
        handleSubmit,
        reset,
        setValue,
        formState: { errors },
      } = useForm({ resolver: yupResolver(YupValidate) })



    const [dailogOpen,setDailog]=useState(false)
    // const queryclient = useQueryClient();
    const [Complaindeleteid,setComplaindeleteid]=useState('')
    const [ComplainId,setComplainId]=useState('')
    const [ReplyId,setReplyId]=useState('')
    const [dis,setdis]=useState('')
    const [showAlert, setshowAlert] = useState(false)
    const [apiData, setapiData] = useState("")  
    const[subcatClass,setsubcatClass]= useState([])
    const[subcatDep,setsubcatDep]= useState([])
    const[subcatSTD,setsubcatSTD]= useState([])
    const [Depval,setDepval]=useState('')
    const [Classval,setClassval]=useState('')
    const [STDval,setSTDval]=useState('')
    const[subcat,setsubcat]= useState([]) 
    const ToggleDailog = ()=>{
        setDailog(!dailogOpen)
    }

    const baseURL =import.meta.env.VITE_APP_API_URL
    useEffect(() =>{
      
        const subget= async()=>{
            const deplist=await axios.get(`${baseURL}department`)
            
            const Depval=await deplist.data.Alldepartment
            
            setsubcatDep(Depval)
    console.log(Depval)
    
    
    const Classlist=await axios.get(`${baseURL}Class`)
                const Classval=await Classlist.data.AllClass
                setsubcatClass(Classval)
                 console.log("Classval",Classval)
                 
    const STDlist=await axios.get(`${baseURL}Student`)
                const STDval=await STDlist.data.AllStudent
                setsubcatSTD(STDval)
                 console.log("STDval",STDval)
    
    
       


        
          const Complist=await axios.get(`${baseURL}Complain`)
          
          const CompVal=await Complist.data.AllComplain
          
          setsubcat(CompVal)
  console.log(CompVal)
        subget()
      }
    }, [])

const {data:Complain,isLoading,isError}= GetQuery('/Complain','Complain')

// const {mutate,isLoading:mutateLoading} = PostQuery('/Reply','Reply')


// const {mutate:updateMutate,isLoading:updateLoading} = UpdateQuery(`/Complain/${ComplainId}`,'Complain')
 
const {mutate:deleteMutate} = DeleteQuery(`/Complain/${Complaindeleteid}`,'Complain')


// const {data:Reply,isLoading,isError}= GetQuery('/Reply','Reply')

const {mutate:postMutate,isLoading:mutateLoading} = PostQuery('/Reply','Reply')

// const {mutate:updateMutate,isLoading:updateLoading} = UpdateQuery(`/Reply/${ReplyId}`,'Reply')
 
// const {mutate:deleteMutate} = DeleteQuery(`/Reply/${Replydeleteid}`,'Reply')


const AddNewReply = async (data)=>{
  setReplyId(data._id)
  setdis (data.Description)

    if(ReplyId ==''){

 try{
//   await UpdateClient(ReplyId,subdata)
// console.log("Data has been Updated")
//  toast.success("Data has been Updated")
 ToggleDailog()
 postMutate(data)
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
          //  toast.success("Data has been saved")
           postMutate(data)
          ToggleDailog()
          reset()
              } catch( err){
          console.log("error jiro ",err)
          toast.error(err.message)
              }

    }
    

   
}


const AddNewComplain = async (data)=>{

    //  setReplyId(data.Description)
     console.log("data",data.Description)
   

   
}
const SubmittData=(data)=>{
  data.Complain_id=ReplyId
  // console.log("data",data)
  postMutate(data)
  ToggleDailog()
}
const ReplyDataCmp = async (data)=>{
  
 console.log('submitted',data)

  setReplyId(data._id)
  setdis (data.Description)
  // setValue("Message",data.Message)
  try {
    //  postMutate(data)
     
    ToggleDailog()
  } catch (err) {
    toast.error(err.message)
  }
 
     reset()
       }
       
            //  console.log("dis",dis)
    // ToggleDailog()

          



const deletehook = useDeleteHook()

const deleteCheck = ()=>{
    deleteMutate(Complaindeleteid)
    deletehook.Toggle()
   
}

const deleteComplainInfo = async (data)=>{
   deletehook.setMessage(data.Description)
    deletehook.Toggle()
    setComplaindeleteid(data._id)
}


    return <>
   <Box p={4}>
   <CssBaseline />
   <ConfirmDelete open={deletehook.open} toggle={deletehook.Toggle} message={deletehook.message} confirm={deleteCheck} />
 <Breadcrumbs aria-label="breadcrumb">
  <Link to={'/Dashboard/AdminDashboard'} underline="hover" color="inherit">
    Dashboard
  </Link>
  <Typography color="text.primary">Cabasho</Typography>
</Breadcrumbs>

 <Divider sx={{height:10}}/>
    <Alert severity="info">Cabashadayada</Alert>
    <Box sx={{display:"flex",justifyContent:"space-between"}} my={2}>
        <Typography variant="h6">Liiska Cabashada</Typography>
        {/* <IconButton   onClick={ToggleDailog}>
<AddCircleOutlineSharp />
        </IconButton> */}
    </Box>
    <Dialog sx={{
        backdropFilter: "blur(5px) sepia(5%)",
      }} PaperProps={{ sx: { borderRadius: "20px" } }} open={dailogOpen} onClose={ToggleDailog}>
        <DialogTitle sx={{ bgcolor: "primary.dark", color: "white" }}>Cabasho Cusub</DialogTitle>
        <Box component={"form"} onSubmit={handleSubmit(SubmittData)}>
        <DialogContent>
        <Box sx={{width:"400px"}} mt={2}>


        <Stack  spacing={2} direction={'column'}>
     
        <TextField label="Complain id" disabled  value={ReplyId} variant="outlined" {...register("Complain_id")} size="small" fullWidth/>
        <TextField label="Complain Name" disabled  value={dis} variant="outlined"  size="small" fullWidth/>






<TextField label="Message" variant="outlined" {...register("Message")} size="small" fullWidth/>
    {errors.Message ? (
                  <Typography sx={{ color: "error.main" }}>
                    {errors.Message.message}
                  </Typography>
                ) : null}
    
    </Stack>


    </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={ToggleDailog}>Cancel</Button>
          <Button variant="contained" sx={{bgcolor:"primary"}} type="submit"  size="small">
          Submit
      {/* {ReplyId =='' ? "update" : "Submit"} */}
          </Button>
 
        </DialogActions>

        </Box>
      </Dialog>



<Divider/>
 {/* {Complain ? <ComplainList deleteComplain={deleteComplainInfo} ComplainData={Complain} update={UpdateComplainInfo} /> : null }
     */}

 

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

 </Box>) :  <ComplainList DeleteComplain={deleteComplainInfo} ComplainData={Complain?.data.AllComplain}  ReplyData={ReplyDataCmp} />  }
 

   
    
     </Box>       
    </>
}