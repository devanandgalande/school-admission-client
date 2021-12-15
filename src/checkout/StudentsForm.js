import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Button, Chip, Divider, FormControl, FormHelperText, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

export default function StudentsForm({ handleChange, values, setValidateForm }) {
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('First Name is required'),
    middleName: Yup.string().required('Middle Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    mothersName: Yup.string().required("Mother's name is required"),
    dob: Yup.string().typeError('Date of Birth is required')
                    .required('Date of Birth is required')
                    // .min(new Date("2018-10-01").toLocaleDateString(), "Date of Birth must be later than 1st Oct, 2018")
                    .test("dob","Date of Birth must be between 1st Oct, 2018 to 31st Dec, 2019",
                    (value)=> new Date(value)>=new Date("2018-10-01") && new Date(value)<=new Date("2019-12-31")),
                    // .max("31-12-2019", "Date of Birth must be earlier than 31st Dec, 2019"),
    gender: Yup.string().required('Gender is required'),
    address: Yup.string().required('Address is required'),
    city: Yup.string().required('City is required'),
    state: Yup.string().required('State is required'),
    zip: Yup.string().required('Zip is required')
                      .matches("^(\\d{6,6})$",'Invalid Pin'),
    country: Yup.string().required('Country is required'),
    caste: Yup.string().required('Caste is required'),
    standard: Yup.string().required('This field is required'),
    // consent: Yup.bool().oneOf([true], 'Please check the consent')
  })
  const { register, control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema)
  });

  const onSubmit = data => {
    // isFormValid = true;
    setValidateForm(true);
    Object.assign(values,data);
    // console.log(data);
    // console.log(JSON.stringify(data, null, 2));

  };

  return (
    <React.Fragment>
      <form id="student-form" onSubmit={handleSubmit(onSubmit)}>
        <Typography variant="h6" color="primary" gutterBottom>
          Student Details
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <TextField
              required
              id="firstName"
              name="firstName"
              label="First name"
              fullWidth
              variant="standard"
              onChange={handleChange('firstName')}
              defaultValue={values.firstName}
              {...register('firstName')}
              error={Boolean(errors.firstName)}
              helperText={errors.firstName?.message}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              required
              id="middleName"
              name="middleName"
              label="Middle name"
              fullWidth
              variant="standard"
              onChange={handleChange('middleName')}
              defaultValue={values.middleName}
              {...register('middleName')}
              error={Boolean(errors.middleName)}
              helperText={errors.middleName?.message}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              required
              id="lastName"
              name="lastName"
              label="Last name"
              fullWidth
              variant="standard"
              onChange={handleChange('lastName')}
              defaultValue={values.lastName}
              {...register('lastName')}
              error={Boolean(errors.lastName)}
              helperText={errors.lastName?.message}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              id="mothersName"
              name="mothersName"
              label="Mother's Name"
              fullWidth
              variant="standard"
              onChange={handleChange('mothersName')}
              defaultValue={values.mothersName}
              {...register('mothersName')}
              error={Boolean(errors.mothersName)}
              helperText={errors.mothersName?.message}
            />
          </Grid>
          <Grid item xs={6}>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              type="date"
              InputLabelProps={{ shrink: true }}
              id="dob"
              name="dob"
              label="Date of Birth"
              fullWidth
              variant="standard"
              onChange={handleChange('dob')}
              defaultValue={values.dob}
              {...register('dob')}
              error={Boolean(errors.dob)}
              helperText={errors.dob?.message}
            />
          </Grid>
          <Grid item xs={6}>
            <FormLabel error={Boolean(errors.gender)} component="legend">Gender</FormLabel>
            <Controller
            control={control}
            name="gender"
            defaultValue={values.gender}
            render={({field}) => (
            <RadioGroup
              row
              name="gender"
              size="small"
              // value={value}
              // onChange={onChange}
              onChange={handleChange('gender')}
              value={values.gender}
              {...field}
            >
              <FormControlLabel value="Male" control={<Radio size="small" />} label="Male" />
              <FormControlLabel value="Female" control={<Radio size="small" />} label="Female" />
            </RadioGroup>
             )} /> 
            <FormHelperText error>{errors.gender?.message}</FormHelperText>
          </Grid>
          <Grid item xs={12} sm={12} >
            <TextField
              id="address"
              name="address"
              label="Address"
              fullWidth
              variant="standard"
              onChange={handleChange('address')}
              defaultValue={values.address}
              {...register('address')}
              error={Boolean(errors.address)}
              helperText={errors.address?.message}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="city"
              name="city"
              label="City"
              fullWidth
              variant="standard"
              onChange={handleChange('city')}
              defaultValue={values.city}
              {...register('city')}
              error={Boolean(errors.city)}
              helperText={errors.city?.message}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="state"
              name="state"
              label="State"
              fullWidth
              variant="standard"
              onChange={handleChange('state')}
              defaultValue={values.state}
              {...register('state')}
              error={Boolean(errors.state)}
              helperText={errors.state?.message}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="zip"
              name="zip"
              label="Zip / Postal code"
              fullWidth
              autoComplete="shipping postal-code"
              variant="standard"
              onChange={handleChange('zip')}
              defaultValue={values.zip}
              {...register('zip')}
              error={Boolean(errors.zip)}
              helperText={errors.zip?.message}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="country"
              name="country"
              label="Country"
              fullWidth
              autoComplete="shipping country"
              variant="standard"
              onChange={handleChange('country')}
              defaultValue={values.country}
              {...register('country')}
              error={Boolean(errors.country)}
              helperText={errors.country?.message}
            />
          </Grid>
          {/* &nbsp; */}
          <Grid item xs={12}>
            <Divider variant="middle" color="grey" ><Chip/>
            </Divider>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="caste"
              name="caste"
              label="Caste"
              fullWidth
              variant="standard"
              onChange={handleChange('caste')}
              defaultValue={values.caste}
              {...register('caste')}
              error={Boolean(errors.caste)}
              helperText={errors.caste?.message}
            />
          </Grid>
          <Grid item xs={12} sm={6}>

            <FormControl fullWidth>
              <InputLabel id="categorylabel">Category</InputLabel>
              <Select
                // labelId=""
                id="category"
                value={values.category}
                label="Category"
                size="small"
                variant="standard"
                onChange={handleChange('category')}
              >
                <MenuItem value={'SC'}>SC</MenuItem>
                <MenuItem value={"ST"}>ST</MenuItem>
                <MenuItem value={"NT"}>NT</MenuItem>
                <MenuItem value={"VJ"}>VJ</MenuItem>
                <MenuItem value={"OBC"}>OBC</MenuItem>
              </Select>
              <FormHelperText>If applicable, attach copy of caste certificate</FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="standard"
              name="standard"
              label="Admission Required for Standard"
              fullWidth
              variant="standard"
              onChange={handleChange('standard')}
              defaultValue={values.standard}
              {...register('standard')}
              error={Boolean(errors.standard)}
              helperText={errors.caste?.standard}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="lastSchool"
              name="lastSchool"
              label="Last School Attended"
              fullWidth
              variant="standard"
              onChange={handleChange('lastSchool')}
              defaultValue={values.lastSchool}
            />
          </Grid>
          <Grid item xs={12} mt={2}>
            <FormControlLabel
              
              control={
                // <Controller
                //   control={control}
                //   name="consent"
                //   defaultValue={values.consent ? true : false}
                //   refs={register('consent')}
                //   render={({ field: { onChange } }) => (
                    <Checkbox
                      color="primary"
                      // onChange={e => onChange(e.target.checked)}
                      checked 
                      inputProps={{readOnly: true}}
                    />
              //     )}
              //   />
              }
              label={"If admission is granted to my child/ward, I promise to abide by all the Rules of the School."}
            />
            <FormHelperText error={Boolean(errors.consent)}>{errors.consent?.message}</FormHelperText>
          </Grid>
        </Grid>
        <Button id="sform1" type="submit" sx={{display: 'none'}} onClick={handleSubmit(onSubmit)} />
      </form>
    </React.Fragment>
  );
}