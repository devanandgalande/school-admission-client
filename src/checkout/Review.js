import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import FormControlLabel from '@mui/material/FormControlLabel';
import StudentsForm from './StudentsForm';
import ParentsForm from './ParentsForm';
import Divider from '@mui/material/Divider';
import Input from '@mui/material/Input';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/material';
import heading from '../heading.svg';

export default function ReviewForm({ handleChange, values }) {
  return (
    <React.Fragment>
      <Box textAlign="center" id="heading"><img src={heading} alt="logo" className="svg-heading" /></Box>
      <div id="firstpage">
        <Divider color="grey" sx={{ mb: 2 }} />
        <Grid item xs={12} sm={6} mb={1}>
          <FormControlLabel
            label={<Typography fontWeight="600">Registration No.</Typography>}
            labelPlacement="start"
            color="primary"
            control={
              <Input dir="rtl" size="small" sx={{ fontSize: "18px", fontWeight: "600", maxWidth: "7rem" }}
                value={values.regNo} />
            }
          />
        </Grid>
        <StudentsForm
          handleChange={handleChange}
          values={values}
        />
        &nbsp;
        <Divider color="grey" sx={{ mb: 2 }} />
        <Grid container columnSpacing={4}>
          <Grid item xs={12} sm={3} alignSelf="center">
            <Typography variant="h6" textAlign="end">Father's Signature</Typography>
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              id="fathersign"
              name="fathersign"
              value=""
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={3} alignSelf="center">
            <Typography variant="h6" textAlign="end">Mother's Signature</Typography>
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              id="mothersign"
              name="mothersign"
              value=""
              fullWidth
              variant="outlined"
            />
          </Grid>
        </Grid>
        <Divider variant="fullWidth" color="grey" sx={{ my: 1 }} />
      </div>
      <div id='secondpage'>
        <ParentsForm
          handleChange={handleChange}
          values={values}
        />
      </div>

    </React.Fragment>
  );
}