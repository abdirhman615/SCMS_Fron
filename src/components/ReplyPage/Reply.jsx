import { Box,Stack,IconButton,Typography,Alert,TextField,Button, Divider, Breadcrumbs} from "@mui/material"
import AddHomeWorkIcon from '@mui/icons-material/AddHomeWork';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CircularProgress from '@mui/material/CircularProgress';
import { useEffect, useState } from "react";
import ReplyList from "./ReplyList";
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

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

export const Reply = ()=>{
    const YupValidate = yup.object({
        // Reply_ID: yup.string().required('Enter The Reply ID'),
        Complain_id: yup.string().required('Enter The Complain '),
        Message: yup.string().required("Enter The Massage"),
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
    const [Replydeleteid,setReplydeleteid]=useState('')
    const [ReplyId,setReplyId]=useState('')
    const [showAlert, setshowAlert] = useState(false)
    const [apiData, setapiData] = useState("")   
    const[subcat,setsubcat]= useState([])   
    const ToggleDailog = ()=>{
        setDailog(!dailogOpen)
    }

// const {register,handleSubmit,reset,setValue,formState:{errors}} = useForm()

   
const baseURL =import.meta.env.VITE_APP_API_URL
useEffect(() =>{
    const subget= async()=>{
        const Complist=await axios.get(`${baseURL}Complain`)
        
        const CompVal=await Complist.data.AllComplain
        
        setsubcat(CompVal)
console.log(CompVal)


const Classlist=await axios.get(`${baseURL}Class`)
            const Classval=await Classlist.data.AllClass
            setsubcatClass(Classval)
             console.log("Classval",Classval)
             
const STDlist=await axios.get(`${baseURL}Student`)
            const STDval=await STDlist.data.AllStudent
            setsubcatSTD(STDval)
             console.log("STDval",STDval)


    }
    subget()

}, [])

const {data:Reply,isLoading,isError}= GetQuery('/Reply','Reply')

const {mutate,isLoading:mutateLoading} = PostQuery('/Reply','Reply')

const {mutate:updateMutate,isLoading:updateLoading} = UpdateQuery(`/Reply/${ReplyId}`,'Reply')
 
const {mutate:deleteMutate} = DeleteQuery(`/Reply/${Replydeleteid}`,'Reply')


const AddNewReply = async (data)=>{

    if(ReplyId !==''){

 try{
//   await UpdateClient(ReplyId,subdata)
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
           toast.success("Data has been saved")
        mutate(data)
          ToggleDailog()
          reset()
              } catch( err){
          console.log("error jiro ",err)
          toast.error(err.message)
              }

    }
    

   
}

const UpdateReplyInfo = async (data)=>{
// console.log("xogta la rabbo in la update gareeyo",data)
    // setValue("Reply_ID",data.Reply_ID)
    setValue("Complain_id",data.Complain_id)
    setValue("Message",data.Message)
    setReplyId(data._id)
    ToggleDailog()

}


// const deleteReplyInfo = async (subdata)=>{
//     setshowAlert(true)       
// }


const deletehook = useDeleteHook()

const deleteCheck = ()=>{
    deleteMutate(Replydeleteid)
    deletehook.Toggle()
   
}

const deleteReplyInfo = async (data)=>{
   deletehook.setMessage(data.Message)
    deletehook.Toggle()
    setReplydeleteid(data._id)
}


    return <>
   <Box p={4}>
   <CssBaseline />
   <ConfirmDelete open={deletehook.open} toggle={deletehook.Toggle} message={deletehook.message} confirm={deleteCheck} />
 <Breadcrumbs aria-label="breadcrumb">
  <Link to={'/Dashboard/AdminDashboard'} underline="hover" color="inherit" href="#">
    Dashboard
  </Link>
  <Typography color="text.primary">Jawaab</Typography>
</Breadcrumbs>
 <Divider sx={{height:10}}/>
    <Alert severity="info">Jawaabteena</Alert>
    <Box sx={{display:"flex",justifyContent:"space-between"}} my={2}>
        <Typography variant="h6">Jawaabta Liiska</Typography>
        <IconButton   onClick={ToggleDailog}>
<AddCircleOutlineSharp />
        </IconButton>
    </Box>
    <Dialog sx={{
        backdropFilter: "blur(5px) sepia(5%)",
      }} PaperProps={{ sx: { borderRadius: "20px" } }} open={dailogOpen} onClose={ToggleDailog}>
        <DialogTitle sx={{ bgcolor: "primary.dark", color: "white" }}>Jawaab Cusub</DialogTitle>
        <Box component={"form"} onSubmit={handleSubmit(AddNewReply)}>
        <DialogContent>
        <Box sx={{width:"400px"}} mt={2}>



<Stack  spacing={2} direction={'column'}>






<FormControl >
<InputLabel id="demo-multiple-name-label">Complain Name</InputLabel>
  <Select label="Complain id" variant="outlined" {...register("Complain_id")} size="small" fullWidth>
    
  {subcat.map((CompVal) => (
    <MenuItem key={CompVal._id} value={CompVal._id}>
      {CompVal.Description}
    </MenuItem>
  ))}
</Select>
{errors.Complain_id ? (
                  <Typography sx={{ color: "error.main" }}>
                    {errors.Complain_id.message}
                  </Typography>
                ) : null}
</FormControl>

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
          <Button variant="contained" disabled={mutateLoading} sx={{bgcolor:"primary"}} type="submit"  size="small">

      {ReplyId !=='' ? "Update" : "Submit"}
          </Button>
 
        </DialogActions>

        </Box>
      </Dialog>



<Divider/>
 {/* {Reply ? <ReplyList deleteReply={deleteReplyInfo} ReplyData={Reply} update={UpdateReplyInfo} /> : null }
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

 </Box>) :  <ReplyList DeleteReply={deleteReplyInfo} ReplyData={Reply?.data.AllReply} update={UpdateReplyInfo} />  }
 

   </Box>
   
                   
    </>
}


