import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { Grid, TextField } from '@material-ui/core'

export default function CustomTextField({ name, label, required }) {
  const { control } = useFormContext()

  return (
    <Grid item xs={12} sm={6}>
      <Controller
        as={TextField}
        control={control}
        fullWidth
        name={name}
        label={label}
        required
      />
    </Grid>
  )
}
