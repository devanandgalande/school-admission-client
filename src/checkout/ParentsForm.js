import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Button, } from '@mui/material';
import {Controller, FormProvider, useForm} from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';


export default function ParentsForm({ handleChange, values,  setParentFormValid}) {

  const validSchema = Yup.object().shape({
    fatherName: Yup.string().required('Father name is required'),
    fatherAge: Yup.number()
                          .typeError('Age is required')
                          .required('Age is required')
                          .min(10,'Age must be greater than or equal to 10')
                          .max(150,'Age must be less than or equal to 150'),
    fatherProfession: Yup.string().required('Profession is required'),
    fatherContact: Yup.string().required('Contact is required')
                                .matches("^([0-9]{10})$", 'Contact no. must contain 10 digits'),
    motherName: Yup.string().required('Mother name is required'),
    motherAge: Yup.number()
                          .typeError('Age is required')
                          .required('Age is required')
                          .min(10,'Age must be greater than or equal to 10')
                          .max(150,'Age must be less than or equal to 150'),
    motherProfession: Yup.string().required('Profession is required'),
    motherContact: Yup.string().required('Contact is required')
                                .matches("^([0-9]{10})$", 'Contact no. must contain 10 digits'),
    monthlyIncome: Yup.number()
                                .typeError('Income details is required')
                                .required('Income details is required')
                                .positive().integer()
  });

  const {register, control, handleSubmit, formState: {errors}} = useForm({
    resolver: yupResolver(validSchema),
  });

  const onSubmit = data => {
    setParentFormValid(true);
    Object.assign(values,data);
    console.log(data);
  }  

  return (
    <React.Fragment>
      <FormProvider {...register}>
      <form id="parent-form" onSubmit={handleSubmit(onSubmit)}>
      <Typography variant="h6" color="primary" gutterBottom>
        Child's Father's Details
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="fatherName"
            name="fatherName"
            label="Name"
            fullWidth
            variant="standard"
            onChange={handleChange('fatherName')}
            defaultValue={values.fatherName}
            autoFocus
            {...register('fatherName')}
            error={Boolean(errors.fatherName)}
            helperText={errors.fatherName?.message}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <Controller 
          name="fatherAge"
          control={control}
          defaultValue={values.fatherAge}
          render={({field}) => (
          <TextField
            required
            type="number"
            id="fatherAge"
            name="fatherAge"
            label="Age"
            fullWidth 
            variant="standard"
            onChange={handleChange('fatherAge')}
            inputMode="numeric"
            value={values.fatherAge}
            // {...register('fatherAge')}
            {...field}
            error={Boolean(errors.fatherAge)}
            helperText={errors.fatherAge?.message}
          />
          )} />
        </Grid>
        <Grid item xs={12} sm={6}>
        <Controller 
          name="fatherProfession"
          control={control}
          defaultValue={values.fatherProfession}
          render={({field}) => (
          <TextField
            required
            id="fatherProfession"
            name="fatherProfession"
            label="Profession"
            fullWidth 
            variant="standard"
            onChange={handleChange('fatherProfession')}
            value={values.fatherProfession}
            // refs={register()}
            {...field}
            error={Boolean(errors.fatherProfession)}
            helperText={errors.fatherProfession?.message}
          />
          )} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="fatherLang"
            name="fatherLang"
            label="Mother Tongue"
            fullWidth 
            variant="standard"
            onChange={handleChange('fatherLang')}
            defaultValue={values.fatherLang}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="fatherEducation"
            name="fatherEducation"
            label="Educational Qualification"
            fullWidth 
            variant="standard"
            onChange={handleChange('fatherEducation')}
            defaultValue={values.fatherEducation}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="fatherContact"
            name="fatherContact"
            label="Contact No."
            fullWidth 
            variant="standard"
            onChange={handleChange('fatherContact')}
            defaultValue={values.fatherContact}
            {...register('fatherContact')}
            error={Boolean(errors.fatherContact)}
            helperText={errors.fatherContact?.message}
          />
        </Grid>
      </Grid>

      <Typography variant="h6" mt={2} color="primary" gutterBottom>
        Child's Mother's Details
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            required
            id="motherName"
            name="motherName"
            label="Name"
            fullWidth
            variant="standard"
            onChange={handleChange('motherName')}
            defaultValue={values.motherName}
            {...register('motherName')}
            error={Boolean(errors.motherName)}
            helperText={errors.motherName?.message}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
          name="motherAge"
          control={control}
          defaultValue={values.motherAge}
          render={({field})=> (
          <TextField
            required
            type="number"
            id="motherAge"
            name="motherAge"
            label="Age"
            fullWidth
            variant="standard"
            onChange={handleChange('motherAge')}
            inputMode="numeric"
            value={values.motherAge === 0 ? '' : values.motherAge}
            // {...register('motherAge')}
            {...field}
            error={Boolean(errors.motherAge)}
            helperText={errors.motherAge?.message}
          />
          )} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="motherProfession"
            name="motherProfession"
            label="Profession"
            fullWidth
            variant="standard"
            onChange={handleChange('motherProfession')}
            defaultValue={values.motherProfession}
            {...register('motherProfession')}
            error={Boolean(errors.motherProfession)}
            helperText={errors.motherProfession?.message}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="motherLang"
            name="motherLang"
            label="Mother Tongue"
            fullWidth
            variant="standard"
            onChange={handleChange('motherLang')}
            defaultValue={values.motherLang}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="motherEducation"
            name="motherEducation"
            label="Educational Qualification"
            fullWidth
            variant="standard"
            onChange={handleChange('motherEducation')}
            defaultValue={values.motherEducation}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="motherContact"
            name="motherContact"
            label="Contact No."
            fullWidth
            variant="standard"
            onChange={handleChange('motherContact')}
            defaultValue={values.motherContact}
            {...register('motherContact')}
            error={Boolean(errors.motherContact)}
            helperText={errors.motherContact?.message}
          />
        </Grid>

      </Grid>

      <Typography variant="h6" mt={2} color="primary" gutterBottom>
        Family Mentor Details (who can attend to child's studies)
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            
            id="mentorName"
            name="mentorName"
            label="Name"
            fullWidth
            variant="standard"
            onChange={handleChange('mentorName')}
            defaultValue={values.mentorName}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            
            id="mentorRelation"
            name="mentorRelation"
            label="Relation"
            fullWidth
            variant="standard"
            onChange={handleChange('mentorRelation')}
            defaultValue={values.mentorRelation}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            
            type="number"
            id="mentorAge"
            name="mentorAge"
            label="Age"
            fullWidth
            variant="standard"
            inputMode="numeric"
            onChange={handleChange('mentorAge')}
            value={values.mentorAge === 0 ? '' : values.mentorAge}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            
            id="mentorProfession"
            name="mentorProfession"
            label="Profession"
            fullWidth
            variant="standard"
            onChange={handleChange('mentorProfession')}
            defaultValue={values.mentorProfession}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            
            id="mentorLang"
            name="mentorLang"
            label="Mother Tongue"
            fullWidth
            variant="standard"
            onChange={handleChange('mentorLang')}
            defaultValue={values.mentorLang}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            
            id="mentorEducation"
            name="mentorEducation"
            label="Educational Qualification"
            fullWidth
            variant="standard"
            onChange={handleChange('mentorEducation')}
            defaultValue={values.mentorEducation}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            
            id="mentorContact"
            name="mentorContact"
            label="Contact No."
            fullWidth
            variant="standard"
            onChange={handleChange('mentorContact')}
            defaultValue={values.mentorContact}
          />
        </Grid>
      </Grid>

      <Typography variant="h6" mt={2} color="primary" gutterBottom>
        Income Details
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Controller
          name="monthlyIncome"
          control={control}
          defaultValue={values.monthlyIncome}
          render={({field}) => (
          <TextField
            required
            type="number"
            id="monthlyIncome"
            name="monthlyIncome"
            label="Monthly Income"
            fullWidth
            variant="standard"
            onChange={handleChange('monthlyIncome')}
            inputMode="numeric"
            value={values.monthlyIncome}
            {...field}
            error={Boolean(errors.monthlyIncome)}
            helperText={errors.monthlyIncome?.message}
          />
          )} />
        </Grid>
        {/* <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="If admission is granted to my child/ward, I promise to abide by all the Rules of the School."
          />
        </Grid> */}
      </Grid>
      <Button type="submit" id="parentformbtn" sx={{display: 'none'}} onClick={handleSubmit(onSubmit)}>cLik</Button>
      </form>
      </FormProvider>
    </React.Fragment>
  );
}