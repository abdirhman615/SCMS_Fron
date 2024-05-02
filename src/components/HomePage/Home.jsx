import React from 'react';
import { Box, Typography, Container, Grid, Paper, Button } from '@mui/material';
import { styled } from '@mui/system';
import { ReportProblemOutlined as ReportProblemIcon, VisibilityOutlined as VisibilityIcon, HelpOutlineOutlined as FAQIcon } from '@mui/icons-material';

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

const StudentComplaintPage = () => {
  return (
    <Box sx={{ flexGrow: 1, bgcolor: '#f5f5f5', py: 8 }}>
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
              <StyledButton variant="contained">Submit</StyledButton>
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
