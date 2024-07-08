import React, { useState, useEffect } from 'react';
import { Container, Typography, Grid, Paper, Button, styled } from '@mui/material';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import PeopleIcon from '@mui/icons-material/People';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import SchoolIcon from '@mui/icons-material/School';
import { Link } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import axios from "axios"
const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  textAlign: 'center',
  borderRadius: '12px',
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'scale(1.03)',
    boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.1)',
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  textTransform: 'none',
  boxShadow: 'none',
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
}));

const AdminDashboard = () => {
  // State to hold the number of users (simulated here with useState)
  const [DashboardSummary, setDashboardSummary] = useState(0);
  const baseURL =import.meta.env.VITE_APP_API_URL
  // Simulating fetching number of users from an API
  useEffect(() => {
    async function onload () {
      try {
      
       const { data } = await axios.get( ("http://localhost:5000/summary"))
        setDashboardSummary(data)
      
       console.log("DashboardSummary",DashboardSummary)
      } catch (error) {
       console.log(error.message)
      }
     }
     onload()
   }, [])


  return (
    <Container maxWidth="lg">
      <CssBaseline /> 
      <Typography variant="h3" align="center" gutterBottom>
        Student Complaint Management System
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        
        <Grid item xs={12} sm={6} md={3}>
          <StyledPaper>
            <PeopleIcon fontSize="large" color="primary" />
            <Typography variant="h5" gutterBottom>
              View Users 
            </Typography>
            <Typography variant="body1" paragraph>
              View and manage user information.
            </Typography>
            <Link to={'/Dashboard/User'} style={{ textDecoration: 'none' }}>
              <StyledButton variant="contained" color="primary">
                View Users
                {DashboardSummary.NumberOfUsers}
              </StyledButton>
            </Link>
          </StyledPaper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StyledPaper>
            <ReportProblemIcon fontSize="large" color="primary" />
            <Typography variant="h5" gutterBottom>
              View Complaints
            </Typography>
            <Typography variant="body1" paragraph>
              Check the status of complaints.
            </Typography>
            <Link to={'/ViewComplaints'} style={{ textDecoration: 'none' }}>
              <StyledButton variant="contained" color="primary">
                View Complaints
                {DashboardSummary.NumberOfComplain}
              </StyledButton>
            </Link>
          </StyledPaper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StyledPaper>
            <AdminPanelSettingsIcon fontSize="large" color="primary" />
            <Typography variant="h5" gutterBottom>
              View Reply
            </Typography>
            <Typography variant="body1" paragraph>
              Manage and view admin details.
            </Typography>
            <Link to={'/ViewAdmin'} style={{ textDecoration: 'none' }}>
              <StyledButton variant="contained" color="primary">
                View Reply
                {DashboardSummary. NumberOfReply}
              </StyledButton>
            </Link>
          </StyledPaper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StyledPaper>
            <SchoolIcon fontSize="large" color="primary" />
            <Typography variant="h5" gutterBottom>
              See Students
            </Typography>
            <Typography variant="body1" paragraph>
              See all student details.
            </Typography>
            <Link to={'/ViewAllStudents'} style={{ textDecoration: 'none' }}>
              <StyledButton variant="contained" color="primary">
                View All Students
                {DashboardSummary. NumberOfStudent}
              </StyledButton>
            </Link>
          </StyledPaper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AdminDashboard;
