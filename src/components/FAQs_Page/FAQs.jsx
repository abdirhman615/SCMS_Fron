import React from 'react';
import { Box, Typography, Paper, Accordion, AccordionSummary, AccordionDetails, Container, Divider } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/system';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  margin: theme.spacing(2),
  borderRadius: theme.spacing(1),
  boxShadow: theme.shadows[3],
}));

const FAQs = () => {
  const faqData = [
    {
      question: "Sidee baan u gudbiyaa cabasho?",
      answer: "Si aad cabasho u gudbiso, u gudub qaybta 'Gudbi Cabasho' oo buuxi foomka oo dhan."
    },
    {
      question: "Ma arki karaa heerka cabashadayda?",
      answer: "Haa, waxaad arki kartaa heerka cabashadayda adigoo u gudbaya qaybta 'Eeg Cabashooyinka'."
    },
    {
      question: "Waa maxay macluumaadka loo baahan yahay si loo gudbiyo cabasho?",
      answer: "Waxaad u baahan doontaa inaad bixiso aqoonsigaaga ardayga, waaxda, fasalka, sharaxaadda cabashada, iyo taariikhda cabashada."
    },
    {
      question: "Intee in le'eg ayay qaadanaysaa in la xalliyo cabasho?",
      answer: "Waqtiga xallinta wuu kala duwanaan karaa iyadoo ku xiran nooca cabashada. Waxaa lagu soo wargelin doonaa marka la cusboonaysiiyo cabashadaada."
    },
    {
      question: "Yaa aan kala xiriiri karaa caawimo dheeri ah?",
      answer: "Wixii caawimo dheeri ah, waxaad la xiriiri kartaa kooxda taageerada adiga oo isticmaalaya macluumaadka xiriirka ee ku yaal bogga internetka."
    }
  ];

  return (
    <Container maxWidth="md">
      <Box mt={4}>
        <Typography variant="h3" align="center" gutterBottom>Su'aalaha Badan La Is Weydiiyo</Typography>
        <Divider sx={{ mb: 3 }} />
        {faqData.map((faq, index) => (
          <StyledPaper key={index}>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={`panel${index}a-content`} id={`panel${index}a-header`}>
                <Typography variant="h6">{faq.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          </StyledPaper>
        ))}
      </Box>
    </Container>
  );
};

export default FAQs;
