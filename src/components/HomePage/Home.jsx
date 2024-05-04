import React from 'react';
import { Box,Stack,IconButton,Typography,Alert,TextField,Button, Divider, Breadcrumbs} from "@mui/material"
import { AddCircleOutlineSharp ,ErrorOutlineOutlined} from "@mui/icons-material";

import {  Container, Grid, Paper } from '@mui/material';
import { styled } from '@mui/system';
import { ReportProblemOutlined as ReportProblemIcon, VisibilityOutlined as VisibilityIcon, HelpOutlineOutlined as FAQIcon } from '@mui/icons-material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import {GetQuery,PostQuery,UpdateQuery,DeleteQuery} from '../../../Shared/ReactQuery'
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip'
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
// Styled Paper component with custom styling
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
      //   toast.success("Data has been saved")
      mutate(data)
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
const StudentComplaintPage = () => {
  const YupValidate = yup.object({
    Student_id: yup.string().required('Enter The Student Id'),
    department_id: yup.string().required("Enter The department Name"),
    Class_id: yup.string().required('Enter The Class Name'),
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


  const[subcatClass,setsubcatClass]= useState([])
  const[subcatDep,setsubcatDep]= useState([])
  const[subcatSTD,setsubcatSTD]= useState([])
const [dailogOpen,setDailog]=useState(false)
const [ComplainId,setComplainId]=useState('')


const ToggleDailog = ()=>{
  setDailog(!dailogOpen)
  const baseURL =import.meta.env.VITE_APP_API_URL
  
  useEffect(() =>{
    const subget= async()=>{
        const deplist=await axios.get(`${baseURL}/department`)
        
        const Depval=await deplist.data.Alldepartment
        
        setsubcatDep(Depval)
console.log(Depval)


const Classlist=await axios.get(`${baseURL}/Class`)
            const Classval=await Classlist.data.AllClass
            setsubcatClass(Classval)
             console.log("Classval",Classval)
             
const STDlist=await axios.get('http://localhost:5000/Student/')
            const STDval=await STDlist.data.AllStudent
            setsubcatSTD(STDval)
             console.log("STDval",STDval)


    }
    subget()

}, [])

const {data:Complain,isLoading,isError}= GetQuery('/Complain','Complain')

const {mutate,isLoading:mutateLoading} = PostQuery('/Complain','Complain')

const {mutate:updateMutate,isLoading:updateLoading} = UpdateQuery(`/Complain/${ComplainId}`,'Complain')

const {mutate:deleteMutate} = DeleteQuery(`/Complain/${Complaindeleteid}`,'Complain')






}
  return (
    
    <Box sx={{ flexGrow: 1, bgcolor: '#f5f5f5', py: 8 }}>
       <DialogActions>
          <Button onClick={ToggleDailog}>Cancel</Button>
          <Button variant="contained"  sx={{bgcolor:"primary"}} type="submit"  size="small">

      {ComplainId !=='' ? "Update" : "Submit"}
          </Button>
 
        </DialogActions>
        <Dialog sx={{
        backdropFilter: "blur(5px) sepia(5%)",
      }} PaperProps={{ sx: { borderRadius: "20px" } }} open={dailogOpen} onClose={ToggleDailog}>
        <DialogTitle sx={{ bgcolor: "primary.dark", color: "white" }}>New Complain</DialogTitle>
        <Box component={"form"} onSubmit={handleSubmit(AddNewComplain)}>
        <DialogContent>
        <Box sx={{width:"400px"}} mt={2}>



<Stack  spacing={2} direction={'column'}>

<FormControl >
<InputLabel id="demo-multiple-name-label">Student Name</InputLabel>
  <Select label="Student id" variant="outlined" {...register("Student_id")} size="small" fullWidth>
    
  {subcatSTD.map((STDval) => (
    <MenuItem key={STDval._id} value={STDval._id}>
      {STDval.Stdname}
    </MenuItem>
  ))}
</Select>
{errors.Student_id ? (
                  <Typography sx={{ color: "error.main" }}>
                    {errors.Student_id.message}
                  </Typography>
                ) : null}
</FormControl>

<FormControl >
<InputLabel id="demo-multiple-name-label">Departments</InputLabel>
  <Select label="Department id" variant="outlined" {...register("department_id")} size="small" fullWidth>
    
  {subcatDep.map((Depval) => (
    <MenuItem key={Depval._id} value={Depval._id}>
      {Depval.departmentname}
    </MenuItem>
  ))}
</Select>
{errors.department_id ? (
                  <Typography sx={{ color: "error.main" }}>
                    {errors.department_id.message}
                  </Typography>
                ) : null}
</FormControl>

<FormControl >
<InputLabel id="demo-multiple-name-label">Class Name</InputLabel>
  <Select label="Class id" variant="outlined" {...register("Class_id")} size="small" fullWidth>
    
  {subcatClass.map((Classval) => (
    <MenuItem key={Classval._id} value={Classval._id}>
      {Classval.Classname}
    </MenuItem>
  ))}
</Select>
{errors.Class_id ? (
                  <Typography sx={{ color: "error.main" }}>
                    {errors.Class_id.message}
                  </Typography>
                ) : null}
</FormControl>


{/* <TextField label="Description" {...register("Description")} variant="outlined" size="small" fullWidth/> */}

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
          <Button variant="contained"  sx={{bgcolor:"primary"}} type="submit"  size="small">

      {ComplainId !=='' ? "Update" : "Submit"}
          </Button>
 
        </DialogActions>

        </Box>
      </Dialog>
      <Container maxWidth="lg">
        <Typography variant="h3" align="center" gutterBottom>
          Student Complaint Management System
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <StyledPaper elevation={5}>
              <ReportProblemIcon fontSize="large" color="primary" sx={{ marginBottom: 2 }} />
              <Typography variant="h5" gutterBottom>
                Submit a Complaint
              </Typography>
              <Typography variant="body1" paragraph>
                Report any issues or problems you encounter.
              </Typography>
              <StyledButton variant="contained" onClick={ToggleDailog}>Submit</StyledButton>
              <IconButton   onClick={ToggleDailog}>
<AddCircleOutlineSharp />
        </IconButton>
            </StyledPaper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <StyledPaper elevation={5}>
              <VisibilityIcon fontSize="large" color="primary" sx={{ marginBottom: 2 }} />
              <Typography variant="h5" gutterBottom>
                View Complaints
              </Typography>
              <Typography variant="body1" paragraph>
                Check the status of your complaints or view others'.
              </Typography>
              <Button variant="outlined">View</Button>
            </StyledPaper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <StyledPaper elevation={5}>
              <FAQIcon fontSize="large" color="primary" sx={{ marginBottom: 2 }} />
              <Typography variant="h5" gutterBottom>
                FAQs
              </Typography>
              <Typography variant="body1" paragraph>
                Find quick answers to common questions.
              </Typography>
              <Button variant="outlined">Explore FAQs</Button>
            </StyledPaper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default StudentComplaintPage;
