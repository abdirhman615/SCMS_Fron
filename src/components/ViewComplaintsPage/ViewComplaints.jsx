import React, { useState, useEffect } from "react";
import axios from "axios";
// import { Box, Typography, Divider, Breadcrumbs, CircularProgress ,Grid ,Paper } from "@mui/material";
import { Box, Typography, Divider, Breadcrumbs, CircularProgress, Grid, Paper, Container } from "@mui/material";
import { useUserContext } from '../../ContextApi/UserContext';

export const StudentComplaints = ({ studentId }) => {
  const [complaints, setComplaints] = useState([]);
  const [Replys, setReplys] = useState([]);
  const [loading, setLoading] = useState(true);
  const { STD_id, STDID } = useUserContext();

  useEffect(() => {
    const fetchComplaintsAndReplies = async () => {
      try {
        // Fetch complaints
        const response = await axios.get(`${baseURL}complain/${STDID}`);
        const fetchedComplaints = response.data.complaints;
        
        console.log("fetchedComplaints", fetchedComplaints);

        // Fetch replies for each complaint
        const complaintsWithReplies = await Promise.all(
          fetchedComplaints.map(async (complaint) => {
            const repResponse = await axios.get(`${baseURL}Reply/${complaint._id}`);
            const fetchedReply = repResponse.data.Reply;
            console.log("fetchedReply", fetchedReply);
            setComplaints(response.data.complaints)
            setReplys(fetchedReply)
            return { ...complaint, Reply: fetchedReply };
          })
        );

        // setComplaints(complaintsWithReplies);
       
        // Extract all replies to a single array
        const allReplies = complaintsWithReplies.reduce((acc, complaint) => {
          return acc.concat(complaint.Reply);
        }, []);
        
        setReplys(allReplies);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching complaints and replies:", error);
        setLoading(false);
      }
    };

    fetchComplaintsAndReplies();
  }, [STD_id, STDID]);
  console.log("complaints",complaints)
  console.log("Reply",Replys)
  console.log("Com",(Replys.Complain_id == complaints._id))
  return (<>
    {/* <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Box p={4} sx={{ backgroundColor: '#f5f5f5', borderRadius: 2, boxShadow: 3 }}>
        <Breadcrumbs aria-label="breadcrumb">
          <Typography color="text.primary">Dashboard</Typography>
          <Typography color="text.primary">Student Complaints</Typography>
        </Breadcrumbs>
        <Divider sx={{ height: 10, my: 2 }} />
        <Typography variant="h4" sx={{ mt: 2, mb: 3, color: 'primary.main' }}>Your Complaints</Typography>
        {loading ? (
          <Box display="flex" justifyContent="center" alignItems="center" height="50vh">
            <CircularProgress />
          </Box>
        ) : (
          <Box>
            {complaints.length === 0 ? (
              <Typography>No complaints found.</Typography>
            ) : (
              <Grid container spacing={3}>
                {complaints.map((complaint) => (
                  <Grid item xs={12} key={complaint._id}>
                    <Paper elevation={3} sx={{ p: 3, backgroundColor: '#ffffff', borderRadius: 2, boxShadow: 2 }}>
                      <Typography variant="h6" sx={{ mb: 1, color: 'secondary.main' }}>{complaint.Description}</Typography>
                      <Typography variant="body2" color="text.secondary">{new Date(complaint.Complain_date).toLocaleDateString()}</Typography>
                      <Divider sx={{ my: 2 }} />
                      {Replys.filter(reply => reply.Complain_id === complaint._id).length > 0 ? (
                        Replys.filter(reply => reply.Complain_id === complaint._id).map(reply => (
                          <Box key={reply._id} sx={{ mt: 2, p: 2, backgroundColor: '#f0f0f0', borderRadius: 1 }}>
                            <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>{reply.Message}</Typography>
                            <Typography variant="body2" color="text.secondary">{new Date(reply.createdAt).toLocaleString()}</Typography>
                          </Box>
                        ))
                      ) : (
                        <Typography variant="body2" color="text.secondary">No replies yet.</Typography>
                      )}
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            )}
          </Box>
        )}
      </Box>
    </Container> */}



<Container maxWidth="lg" sx={{ mt: 4 }}>
      <Box p={4} sx={{ background: 'f9f9f9', borderRadius: 8, boxShadow: 4 }}>
        <Breadcrumbs aria-label="breadcrumb">
          <Typography color="inherit">Dashboard</Typography>
          <Typography color="inherit">Student Complaints</Typography>
        </Breadcrumbs>
        <Divider sx={{ height: 10, my: 2 }} />
        <Typography variant="h4" sx={{ mt: 2, mb: 3, color: 'inherit' }}>Your Complaints</Typography>
        {loading ? (
          <Box display="flex" justifyContent="center" alignItems="center" height="50vh">
            <CircularProgress color="inherit" />
          </Box>
        ) : (
          <Box>
            {complaints.length === 0 ? (
              <Typography>No complaints found.</Typography>
            ) : (
              <Grid container spacing={3}>
                {complaints.map((complaint) => (
                  <Grid item xs={12} key={complaint._id}>
                    <Paper elevation={4} sx={{ p: 3, backgroundColor: '#ffffff', borderRadius: 8, boxShadow: 4, color: '#333333' }}>
                      <Typography variant="h6" sx={{ mb: 1, color: 'primary.main' }}>{complaint.Description}</Typography>
                      <Typography variant="body2" color="text.secondary">{new Date(complaint.Complain_date).toLocaleDateString()}</Typography>
                      <Divider sx={{ my: 2 }} />
                      {Replys.filter(reply => reply.Complain_id === complaint._id).length > 0 ? (
                        Replys.filter(reply => reply.Complain_id === complaint._id).map(reply => (
                          <Box key={reply._id} sx={{ mt: 2, p: 2, backgroundColor: '#f9f9f9', borderRadius: 4, boxShadow: 2 }}>
                            <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>{reply.Message}</Typography>
                            <Typography variant="body2" color="text.secondary">{new Date(reply.createdAt).toLocaleString()}</Typography>
                          </Box>
                        ))
                      ) : (
                        <Typography variant="body2" color="text.secondary">No replies yet.</Typography>
                      )}
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            )}
          </Box>
        )}
      </Box>
    </Container>





    </>
  );
};

// Assuming baseURL is defined elsewhere
const baseURL = import.meta.env.VITE_APP_API_URL;

export default StudentComplaints;
