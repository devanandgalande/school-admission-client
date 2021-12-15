import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ParentsForm from './ParentsForm';
import StudentsForm from './StudentsForm';
import Review from './Review';
import studentdataService from '../services/studentdata.service';
import { FormHelperText } from '@mui/material';

function Copyright() {
  return (
    <Typography variant="body2" color="whitesmoke" align="center">
      {'Copyright © '}
      <Link color="inherit" href="#">
        Alphonsa Pre-Primary School,Pune
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const steps = ['Student Details', 'Parents Details', 'Review Details'];

const data = {
  regNo: '',
  firstName: '',
  middleName: '',
  lastName: '',
  mothersName: '',
  dob: '',
  gender: '',
  address: '',
  city: '',
  state: '',
  zip: '',
  country: '',
  caste: '',
  category: '',
  standard: '',
  lastSchool: '',
  // page 2
  fatherName: '',
  fatherAge: 0,
  fatherProfession: '',
  fatherLang: '',
  fatherEducation: '',
  fatherContact: '',

  motherName: '',
  motherAge: 0,
  motherProfession: '',
  motherLang: '',
  motherEducation: '',
  motherContact: '',

  mentorName: '',
  mentorRelation: '',
  mentorAge: 0,
  mentorProfession: '',
  mentorLang: '',
  mentorEducation: '',
  mentorContact: '',

  monthlyIncome: 0

}

const theme = createTheme({
  palette: {
    text: {
      secondary: "rgb(0 0 0 / 80%);",
    }
  }

});

export default function Checkout() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [inputs, setInputs] = React.useState(data);
  const [errmsg, seterrmsg] = React.useState('');
  const [validateForm, setValidateForm] = React.useState(false);
  const [parentFormValid, setParentFormValid] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const values = inputs

  React.useEffect(() => {
    if (validateForm) {
      setActiveStep(activeStep + 1);
      setValidateForm(false);
    }
    if (parentFormValid) {
      handleFormSubmit();
      setParentFormValid(false);
    }
    return () => setValidateForm(false);
  }, [validateForm, parentFormValid]);

  const handleChange = input => e => {
    setInputs({
      ...inputs,
      [input]: e.target.value
    })
  }

  const handleNext = () => {
    document.getElementById("sform1").click();
  };

  const handleBack = () => {
    seterrmsg('');
    setActiveStep(activeStep - 1);
  };

  
  const handleFormSubmit = () => {
    seterrmsg('');
    setLoading(true);
    studentdataService.create(inputs)
      .then((response) => {
        // console.log(response);
        setInputs(response.data);
        // handleNext()
        setLoading(false);
        setActiveStep(activeStep + 1)
      })
      .catch(err => {
        // console.log(err);
        seterrmsg(err.message)
        setLoading(false);
      })
  }

  function getStepContent(step) {
    switch (step) {
      case 0:
        return <StudentsForm
          handleChange={handleChange}
          values={values}
          // setInputs={setInputs}
          setValidateForm={setValidateForm}
        />;
      case 1:
        return <ParentsForm
          handleChange={handleChange}
          values={values}
          setParentFormValid={setParentFormValid}
        />;
      case 2:
        return (<div className="printable">
          <Review
            handleChange={handleChange}
            values={values}
          />
        </div>);
      default:
        throw new Error('Unknown step');
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: 'relative',
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        <Typography component="h4" variant="h4"
          color="inherit"
          align="center"
          fontFamily="fantasy"
          mt={2}
        >
          ALPHONSA PRE-PRIMARY SCHOOL
        </Typography>
      </AppBar>
      <Container component="main" maxWidth="md" sx={{ mb: 3 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 3 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h2" variant="h5" align="center">
            Admission Application
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length - 1 ? (
              <React.Fragment>
                <div className="no-print">
                  <Typography variant="h5" gutterBottom>
                    Thank you for registration.
                  </Typography>
                  <Typography variant="subtitle1">
                    Your Registration number is <strong>{inputs.regNo}</strong>. Please take the printout of your
                    application form from below.
                  </Typography>
                  <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    {<Button
                      variant="contained"
                      onClick={() => window.print()}
                      sx={{ mt: 3, ml: 1 }}
                    > Print Application </Button>
                    }
                  </Box>
                </div>
                {getStepContent(2)}
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                      Back
                    </Button>
                  )}
                  {activeStep === steps.length - 2 ?
                    <Button
                      variant="contained"
                      onClick={()=>{document.getElementById("parentformbtn").click();}}
                      sx={{ mt: 3, ml: 1 }}
                      disabled={loading}
                    >{loading && (
                      <i
                        className="fa fa-refresh fa-spin"
                        style={{ marginRight: "5px" }}
                      />
                    )}
                      Submit</Button>
                    : 
                    <Button
                      inputMode=""
                      variant="contained"
                      type="submit"
                      onClick={handleNext}
                      sx={{ mt: 3, ml: 1 }}
                    > Next </Button>
                  }

                </Box>
                {errmsg ? <FormHelperText error>{errmsg}</FormHelperText> : ''}
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
        <Copyright />
      </Container>
    </ThemeProvider>
  );
}