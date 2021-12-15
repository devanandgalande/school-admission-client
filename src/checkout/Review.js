import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import FormControlLabel from '@mui/material/FormControlLabel';
import StudentsForm from './StudentsForm';
import ParentsForm from './ParentsForm';
import { Divider, FormLabel, Input,} from '@mui/material';

export default function ReviewForm({ handleChange, values }) {
  return (
    <React.Fragment>
      {/* <Typography variant="h6" gutterBottom>
        Review Details
      </Typography> */}
      <Grid item xs={12} sm={6} mb={1}>
        <FormControlLabel
        label={<Typography fontWeight="600">Registration No.</Typography>}
        labelPlacement="start"        
        color="primary"
        control={
          <Input dir="rtl" margin="dense" size="small" sx={{fontSize:"18px", fontWeight:"600",maxWidth:"7rem"}} 
          value={values.regNo}  />
        }
        />
          </Grid>
      <StudentsForm
        handleChange={handleChange}
        values={values}
      />
      &nbsp;
      &nbsp;
      <Divider color="grey" />
      <Typography variant="h6" fontSize="medium" mt={1}
      fontWeight="600" align="center" gutterBottom>
        FOR OFFICE USE ONLY
        </Typography>
        <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Input
            id="admittedstd"
            name="admittedstd"
            value="Admitted to Standard : "
            fullWidth
            variant="standard"
            // disabled
            />
        </Grid>
        <Grid item xs={12} sm={3}>
          <Input
            // disabled
            id="division"
            name="division"
            value="Division : "
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <Input
            // disabled
            id="admittedon"
            name="admittedon"
            value="On : "
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={4} mt={2}>
          <Input
            disabled
            id="sign"
            name="sign"
            fullWidth
            variant="standard"
          />
          <FormLabel sx={{ml:"20%"}}>Signature of Principal</FormLabel>
        </Grid>
      </Grid>
      &nbsp;
      <Divider variant="fullWidth" color="grey" sx={{my:2}} />
      {/* <Divider variant="fullWidth" color="grey" sx={{mt:1,mb:3}} /> */}
      {/* <Divider color="grey" /> */}
      &nbsp;
      <ParentsForm
        handleChange={handleChange}
        values={values}
      />
      &nbsp;
      <Divider />
      {/* <Divider /> */}
      <Grid container spacing={0.5} sx={{fontWeight:"300",fontSize:"small"}}>
      <ul type="disk">
        <li>
        This form is valid only for the child whose name is entered by the school office.
        Incomplete forms will not be accepted.
        </li>
        <li>This school is recognised unaided English Medium School. There are no fee concessions. 
        Fees are subject to rise.
        </li>
        <li>Parents can come only upto the school gate to leave child to the school.
          </li>
          <li>No Refund of the fees, once paid, will be done.
            </li>
      </ul>
      </Grid>
      {/* <Grid item xs={12}>
        <FormControlLabel
          control={<Checkbox color="secondary" name="saveCard" value="yes" />}
          label="Remember credit card details for next time"
        />
      </Grid> */}
    </React.Fragment>
  );
}