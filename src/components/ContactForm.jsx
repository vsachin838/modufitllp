import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  Container, 
  Grid, 
  TextField, 
  MenuItem, 
  Button, 
  Paper, 
  Snackbar, 
  Alert,
  useTheme 
} from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LanguageIcon from '@mui/icons-material/Language';
import MapIcon from '@mui/icons-material/Map';
import SendIcon from '@mui/icons-material/Send';
import GetAppIcon from '@mui/icons-material/GetApp';
import ReportProblemOutlinedIcon from '@mui/icons-material/ReportProblemOutlined';

const services = [
  'Modular Kitchen',
  'Wardrobe',
  'TV Unit',
  'Modular Furniture',
  'Other / Complete Setup',
];

export default function ContactForm() {
  const theme = useTheme();
  
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    service: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const webAppUrl = 'https://script.google.com/macros/s/AKfycbwndNIdMOtLe4teUgMO2hXT-Yp6IxuFgtThOYkLbInZjUjfDZ7iEDFPqnvk7k89Jqs/exec'
  // Replace this temporary URL with the final complaint Google Form link.
  const complaintFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSe3ONnvScT3YeKhTSwAp015T0JnmMkRMIkBvWkOHNg3BVgGyg/viewform?usp=publish-editor';

async function sendDataToSheets () {
  try {
    const response = await fetch(webAppUrl, {
      method: 'POST',
      mode: 'cors', // Ensures cross-origin requests work in the browser
      headers: {
        'Content-Type': 'text/plain', // Note: Apps Script sometimes prefers text/plain to avoid CORS preflight issues
      },
      body: JSON.stringify({ ...formData })
    });

    if(!response.ok){
       alert('Error Submitting the form.');
    }
    const result = await response.json();
    console.log('Success:', result);
  } catch (error) {
    console.error('Error updating sheet:', error);
  }
}



  // const sendDataToSheets = async () => {

  //   const response = await fetch(
  //     'https://script.google.com/macros/s/AKfycbzH7DcYH8wgDRfkLY7--IiPcMTNmjul0z1lbfOa_0udNok2wfZBHzIg3qC84x2b1Ozq/exec',
  //     {
  //       method: 'POST',
  //       headers: {
  //        // 'Content-Type': 'text/plain;charset=utf-8',


  //       },
  //       body: JSON.stringify({ ...formData }),
  //       redirect: 'follow',
  //     }
  //   );

  //   //if (response.ok) {
  //   //  alert(
  //   //    "Your trip with Ayodhya Darshanam is booked successfully! We'll call you shortly..."
  //   //  );
  //  // } else {
  //  //   alert('Failed to book the trip.');
  //  // }

  //    alert('Form clicked');
  //    console.log('Form Submitted successfully from api function:', formData);
  // };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear error for this field
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
  };

  const validate = () => {
    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'Name is required';
    if (!formData.phone.trim()) {
      tempErrors.phone = 'Phone number is required';
    } else if (!/^\+?[0-9\s-]{10,15}$/.test(formData.phone.trim())) {
      tempErrors.phone = 'Enter a valid phone number';
    }
    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      tempErrors.email = 'Enter a valid email address';
    }
    if (!formData.city.trim()) tempErrors.city = 'City is required';
    if (!formData.service) tempErrors.service = 'Please select a service';
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Simulate API submit
      console.log('Form Submitted successfully:', formData);
      sendDataToSheets();
      setOpenSnackbar(true);
      // Reset Form
      setFormData({
        name: '',
        phone: '',
        email: '',
        city: '',
        service: '',
        message: '',
      });
    }
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') return;
    setOpenSnackbar(false);
  };

  return (
    <Box 
      id="contact"
      sx={{
        py: { xs: 10, md: 14 },
        backgroundColor: '#FFFFFF',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '400px',
          background: 'linear-gradient(to top, rgba(35, 51, 109, 0.04) 0%, transparent 100%)',
          zIndex: 0,
        }
      }}
    >
      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={6} alignItems="stretch">
          
          {/* Left Block: Contact Info */}
          <Grid item xs={12} md={5}>
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%', textAlign: 'left' }}>
              <Typography 
                variant="h6" 
                sx={{ 
                  color: 'secondary.main', 
                  fontWeight: 800, 
                  letterSpacing: 1.5, 
                  textTransform: 'uppercase', 
                  fontFamily: 'Outfit',
                  mb: 1.5
                }}
              >
                Let's Build Together
              </Typography>
              <Typography 
                variant="h2" 
                sx={{ 
                  color: 'primary.main', 
                  fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                  lineHeight: 1.2,
                  mb: 3
                }}
              >
                Get in Touch
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.05rem', lineHeight: 1.7, mb: 5 }}>
                Ready to transform your home with precision modular installations? Contact us today to schedule your consultation and get a detailed execution estimate.
              </Typography>

              {/* Info Stack */}
              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 3,
                  mb: 6,
                  '& > div': {
                    flex: {
                      xs: '0 0 100%',
                      md: '0 0 calc(50% - 12px)',
                    },
                    minWidth: 0,
                  },
                }}
              >
                
                {/* Phone */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Box sx={{ width: 46, height: 46, flexShrink: 0, borderRadius: '50%', backgroundColor: 'rgba(35, 51, 109, 0.06)', display: 'flex', alignItems: 'center', justifySelf: 'center', justifyContent: 'center', color: 'primary.main' }}>
                    <PhoneIcon />
                  </Box>
                  <Box sx={{ minWidth: 0 }}>
                    <Typography variant="caption" color="text.light" sx={{ display: 'block', mb: 0.35, fontSize: '0.7rem', lineHeight: 1.2, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 0.5 }}>
                      Call or WhatsApp
                    </Typography>
                    <Typography
                      variant="h6"
                      component="a"
                      href="tel:+917827658674"
                      sx={{
                        color: 'primary.main',
                        fontWeight: 700,
                        display: 'block',
                        fontSize: { xs: '0.95rem', sm: '1rem' },
                        lineHeight: 1.35,
                        textDecoration: 'none',
                        '&:hover': { color: 'secondary.main' }
                      }}
                    >
                      +91 78276 58674
                    </Typography>
                  </Box>
                </Box>

                {/* Email */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Box sx={{ width: 46, height: 46, flexShrink: 0, borderRadius: '50%', backgroundColor: 'rgba(35, 51, 109, 0.06)', display: 'flex', alignItems: 'center', justifySelf: 'center', justifyContent: 'center', color: 'primary.main' }}>
                    <EmailIcon />
                  </Box>
                  <Box sx={{ minWidth: 0 }}>
                    <Typography variant="caption" color="text.light" sx={{ display: 'block', mb: 0.35, fontSize: '0.7rem', lineHeight: 1.2, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 0.5 }}>
                      Email Support
                    </Typography>
                    <Typography 
                      variant="h6" 
                      component="a" 
                      href="mailto:crm.modufit@gmail.com"
                      sx={{ 
                        color: 'primary.main', 
                        fontWeight: 700, 
                        display: 'block',
                        fontSize: { xs: '0.95rem', sm: '1rem' },
                        lineHeight: 1.35,
                        overflowWrap: 'anywhere',
                        textDecoration: 'none',
                        '&:hover': { color: 'secondary.main' }
                      }}
                    >
                      crm.modufit@gmail.com
                    </Typography>
                  </Box>
                </Box>

                {/* Website */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Box sx={{ width: 46, height: 46, flexShrink: 0, borderRadius: '50%', backgroundColor: 'rgba(35, 51, 109, 0.06)', display: 'flex', alignItems: 'center', justifySelf: 'center', justifyContent: 'center', color: 'primary.main' }}>
                    <LanguageIcon />
                  </Box>
                  <Box sx={{ minWidth: 0 }}>
                    <Typography variant="caption" color="text.light" sx={{ display: 'block', mb: 0.35, fontSize: '0.7rem', lineHeight: 1.2, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 0.5 }}>
                      Official Website
                    </Typography>
                    <Typography 
                      variant="h6" 
                      component="a" 
                      href="https://www.modufitllp.com" 
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ 
                        color: 'primary.main', 
                        fontWeight: 700, 
                        display: 'block',
                        fontSize: { xs: '0.95rem', sm: '1rem' },
                        lineHeight: 1.35,
                        textDecoration: 'none',
                        '&:hover': { color: 'secondary.main' }
                      }}
                    >
                      www.modufitllp.com
                    </Typography>
                  </Box>
                </Box>


 {/* Coverage */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Box sx={{ width: 46, height: 46, flexShrink: 0, borderRadius: '50%', backgroundColor: 'rgba(35, 51, 109, 0.06)', display: 'flex', alignItems: 'center', justifySelf: 'center', justifyContent: 'center', color: 'primary.main' }}>
                    <MapIcon />
                  </Box>
                  <Box sx={{ minWidth: 0 }}>
                    <Typography variant="caption" color="text.light" sx={{ display: 'block', mb: 0.35, fontSize: '0.7rem', lineHeight: 1.2, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 0.5 }}>
                      Service Coverage
                    </Typography>
                    <Typography
                      variant="h6"
                      component="a"
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        color: 'primary.main',
                        fontWeight: 700,
                        display: 'block',
                        fontSize: { xs: '0.95rem', sm: '1rem' },
                        lineHeight: 1.35,
                        textDecoration: 'none',
                        '&:hover': { color: 'secondary.main' }
                      }}
                    >
                      PAN-INDIA SERVICE
                    </Typography>
                  </Box>
                </Box>

                {/* Coverage */}
                {/* <Box sx={{ display: 'flex', alignItems: 'center', gap: 2.5 }}>
                  <Box sx={{ width: 52, height: 52, borderRadius: '50%', backgroundColor: 'rgba(35, 51, 109, 0.06)', display: 'flex', alignItems: 'center', justifySelf: 'center', justifyContent: 'center', color: 'primary.main' }}>
                    <MapIcon />
                  </Box>
                  <Box>
                    <Typography variant="caption" color="text.light" sx={{ fontWeight: 700, textTransform: 'uppercase', letterSpacing: 0.5 }}>
                      Service Coverage
                    </Typography>
                    <Typography variant="h6" sx={{ color: 'primary.main', fontWeight: 700 }}>
                      PAN-INDIA SERVICE
                    </Typography>
                  </Box>
                </Box> */}

              </Box>

              {/* Complaint Section */}
              <Paper
                variant="outlined"
                sx={{
                  display: 'flex',
                  alignItems: { xs: 'flex-start', sm: 'center' },
                  flexDirection: { xs: 'column', sm: 'row' },
                  gap: 2,
                  p: 2.5,
                  mb: 3,
                  borderRadius: '16px',
                  borderColor: 'rgba(35, 51, 109, 0.16)',
                  boxShadow: 'none',
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, flex: 1 }}>
                  <ReportProblemOutlinedIcon color="secondary" />
                  <Box>
                    <Typography sx={{ color: 'primary.main', fontWeight: 700, lineHeight: 1.3 }}>
                      Have a Complaint?
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Share your concern through our complaint form.
                    </Typography>
                  </Box>
                </Box>
                <Button
                  component="a"
                  href={complaintFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="contained"
                  color="secondary"
                  sx={{ flexShrink: 0, fontWeight: 700 }}
                >
                  Submit Complaint
                </Button>
              </Paper>

              <Button
                variant="outlined"
                color="primary"
                startIcon={<GetAppIcon />}
                component="a"
                href={`${import.meta.env.BASE_URL}ModuFit_Modular_Installation_Brochure.pdf`}
                download="ModuFit_Modular_Installation_Brochure.pdf"
                target="_blank"
                sx={{ 
                  alignSelf: 'flex-start',
                  px: 4, 
                  py: 1.5,
                  fontWeight: 700,
                }}
              >
                Download Brochure PDF
              </Button>
            </Box>
          </Grid>

          {/* Right Block: Form Paper */}
          <Grid item xs={12} md={7}>
            <Paper 
              elevation={8}
              sx={{
                p: { xs: 4, sm: 6 },
                borderRadius: '24px',
                border: '1px solid rgba(0, 0, 0, 0.04)',
                boxShadow: '0 16px 40px rgba(0,0,0,0.06)',
                backgroundColor: '#FFFFFF',
              }}
            >
              <Typography variant="h4" sx={{ mb: 1, fontWeight: 800, color: 'primary.main', textAlign: 'left', fontFamily: 'Outfit' }}>
                Request a Free Quote
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 4, textAlign: 'left' }}>
                Fill out the form below and our project coordination manager will call you within 24 hours.
              </Typography>

              <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  gap: 3,
                  width: '100%',
                  '& .MuiInputBase-root:not(.MuiInputBase-multiline)': {
                    height: 56,
                  },
                  '& .MuiFormHelperText-root': {
                    minHeight: 20,
                    mt: 0.5,
                  },
                }}
              >
                  {/* Name */}
                  <Box sx={{ flex: { xs: '0 0 100%', sm: '0 0 calc((100% - 48px) / 3)' }, minWidth: 0 }}>
                    <TextField
                      required
                      fullWidth
                      name="name"
                      label="Name"
                      value={formData.name}
                      onChange={handleChange}
                      error={!!errors.name}
                      helperText={errors.name || ' '}
                      variant="outlined"
                      InputProps={{ sx: { borderRadius: '12px' } }}
                    />
                  </Box>

                  {/* Phone */}
                  <Box sx={{ flex: { xs: '0 0 100%', sm: '0 0 calc((100% - 48px) / 3)' }, minWidth: 0 }}>
                    <TextField
                      required
                      fullWidth
                      name="phone"
                      label="Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                      error={!!errors.phone}
                      helperText={errors.phone || ' '}
                      variant="outlined"
                      InputProps={{ sx: { borderRadius: '12px' } }}
                    />
                  </Box>

                  {/* Email */}
                  <Box sx={{ flex: { xs: '0 0 100%', sm: '0 0 calc((100% - 48px) / 3)' }, minWidth: 0 }}>
                    <TextField
                      fullWidth
                      name="email"
                      label="Email Address (Optional)"
                      value={formData.email}
                      onChange={handleChange}
                      error={!!errors.email}
                      helperText={errors.email || ' '}
                      variant="outlined"
                      InputProps={{ sx: { borderRadius: '12px' } }}
                    />
                  </Box>

                  {/* City */}
                  <Box sx={{ flex: { xs: '0 0 100%', sm: '0 0 calc((100% - 48px) / 3)' }, minWidth: 0 }}>
                    <TextField
                      required
                      fullWidth
                      name="city"
                      label="City"
                      value={formData.city}
                      onChange={handleChange}
                      error={!!errors.city}
                      helperText={errors.city || ' '}
                      variant="outlined"
                      InputProps={{ sx: { borderRadius: '12px' } }}
                    />
                  </Box>

                  {/* Service Dropdown */}
                  <Box sx={{ flex: { xs: '0 0 100%', sm: '0 0 calc((100% - 48px) / 3)' }, minWidth: 0 }}>
                    <TextField
                      select
                      required
                      fullWidth
                      name="service"
                      label="Required Installation Service"
                      value={formData.service}
                      onChange={handleChange}
                      error={!!errors.service}
                      helperText={errors.service || ' '}
                      variant="outlined"
                      InputProps={{ sx: { borderRadius: '12px' } }}
                    >
                      {services.map((option) => (
                        <MenuItem key={option} value={option}>
                          {option}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Box>

                  {/* Message */}
                  <Box sx={{ width: '100%' }}>
                    <TextField
                      fullWidth
                      name="message"
                      label="Describe your requirements (e.g. Dimensions, Brand name, Timeline)"
                      multiline
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      variant="outlined"
                      InputProps={{ sx: { borderRadius: '12px' } }}
                    />
                  </Box>

                  {/* Submit Button */}
                  <Box sx={{ flex: { xs: '0 0 100%', sm: '0 0 calc((100% - 48px) / 3)' }, minWidth: 0 }}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      size="large"
                      fullWidth
                      endIcon={<SendIcon />}
                      sx={{ 
                        py: 2, 
                        borderRadius: '12px',
                        fontWeight: 700,
                        fontSize: '1rem',
                        boxShadow: '0 4px 18px rgba(35, 51, 109, 0.25)',
                        '&:hover': {
                          boxShadow: '0 6px 22px rgba(35, 51, 109, 0.35)',
                        }
                      }}
                    >
                      Send Message
                    </Button>
                  </Box>
              </Box>
            </Paper>
          </Grid>
          
        </Grid>
      </Container>

      {/* Success Snackbar */}
      <Snackbar 
        open={openSnackbar} 
        autoHideDuration={6000} 
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%', borderRadius: '12px', fontWeight: 600 }}>
          Thank you! Your quote request has been submitted. Our manager will connect with you shortly.
        </Alert>
      </Snackbar>
    </Box>
  );
}
