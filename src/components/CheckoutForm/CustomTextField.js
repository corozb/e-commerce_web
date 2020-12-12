import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { Grid, TextField } from '@material-ui/core'

export default function CustomTextField({ name, label }) {
  const { control } = useFormContext()

  return (
    <Grid item xs={12} sm={6}>
      <Controller
        as={TextField}
        defaultValue=''
        control={control}
        fullWidth
        name={name}
        label={label}
        required
      />
    </Grid>
  )
}
