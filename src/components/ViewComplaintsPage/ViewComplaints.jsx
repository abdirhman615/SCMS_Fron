import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, Typography, Divider, Breadcrumbs, CircularProgress } from "@mui/material";
import { useUserContext } from '../../ContextApi/UserContext';

export const StudentComplaints = ({ studentId }) => {
  const [complaints, setComplaints] = useState([]);
  const[subcatComp,setsubcatComp]= useState([]);
  const [loading, setLoading] = useState(true);
  const {Std,STD_id} = useUserContext();

  useEffect(() => {
    const fetchComplaints = async () => {
      try {
        const response = await axios.get(`${baseURL}/complaints?studentId=${studentId}`);
        setComplaints(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching complaints:", error);
        setLoading(false); // Set loading to false even if there's an error
      }
    };

    fetchComplaints();
  }, [studentId]);

  useEffect(() =>{
    const subget= async()=>{
        const Complist=await axios.get(`${baseURL}Complain`);
        const Compval=await Complist.data.AllComplain;
        setsubcatComp(Compval);
        console.log(Compval);
    }
    subget();
  }, []);

  return (
    <Box p={4}>
      <Breadcrumbs aria-label="breadcrumb">
        <Typography color="text.primary">Dashboard</Typography>
        <Typography color="text.primary">Student Complaints</Typography>
      </Breadcrumbs>
      <Divider sx={{ height: 10 }} />
      <Typography variant="h4" sx={{ mt: 2 }}>Your Complaints</Typography>
      {loading ? (
        <CircularProgress />
      ) : (
        <Box>
          {subcatComp.length === 0 ? (
            <Typography>No complaints found.</Typography>
          ) : (
            subcatComp.map(complaint => (
              <Box key={complaint._id} mt={2}>
                <Typography variant="h6">{complaint.title}</Typography>
                <Typography variant="h6">{complaint.title}</Typography>
                <Typography>{complaint.Description}</Typography>
              </Box>
            ))
          )}
        </Box>
      )}
    </Box>
  );
};

// Assuming baseURL is defined elsewhere
const baseURL = import.meta.env.VITE_APP_API_URL;

export default StudentComplaints;
