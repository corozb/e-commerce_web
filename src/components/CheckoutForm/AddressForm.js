import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FormProvider, useForm } from 'react-hook-form'
import {
  Button,
  Grid,
  InputLabel,
  Menu,
  MenuItem,
  Select,
  Typography,
} from '@material-ui/core'

import FormInput from './CustomTextField'
import { commerce } from '../../lib/commerce'

export default function AddressForm({ checkoutToken, next }) {
  const methods = useForm()

  const [shippingCountries, setShippingCountries] = useState([])
  const [shippingCountry, setShippingCountry] = useState('')
  const [shippingSubdivisions, setShippingSubdivisions] = useState([])
  const [shippingSubdivision, setShippingSubdivision] = useState('')
  const [shippingOptions, setShippingOptions] = useState([])
  const [shippingOption, setShippingOption] = useState('')

  const countries = Object.entries(shippingCountries).map(([code, name]) => ({
    id: code,
    label: name,
  }))
  const subdivisions = Object.entries(shippingSubdivisions).map(
    ([code, name]) => ({
      id: code,
      label: name,
    })
  )
  const options = shippingOptions.map(({ id, description, price }) => ({
    id,
    label: `${description} - (${price.formatted_with_symbol})`,
  }))
  console.log(shippingOptions)
  console.log('options', options)

  const fecthShippingCountries = async (checkoutTokenId) => {
    const { countries } = await commerce.services.localeListShippingCountries(
      checkoutTokenId
    )
    setShippingCountries(countries)
  }

  const fetchSubdivisions = async (countryCode) => {
    const { subdivisions } = await commerce.services.localeListSubdivisions(
      countryCode
    )
    setShippingSubdivisions(subdivisions)
    setShippingSubdivision(Object.keys(subdivisions)[0])
  }

  const fetchShippingOptions = async (
    checkoutTokenId,
    country,
    region = null
  ) => {
    const options = await commerce.checkout.getShippingOptions(
      checkoutTokenId,
      {
        country,
        region,
      }
    )

    setShippingOptions(options)
    setShippingOption(options[0].id)
  }

  useEffect(() => {
    fecthShippingCountries(checkoutToken.id)
  }, [])

  useEffect(() => {
    shippingCountry && fetchSubdivisions(shippingCountry)
  }, [shippingCountry])

  useEffect(() => {
    shippingSubdivision &&
      fetchShippingOptions(
        checkoutToken.id,
        shippingCountry,
        shippingSubdivision
      )
  }, [shippingSubdivision])

  return (
    <>
      <Typography variant='h6' gutterBottom>
        Shipping Address
      </Typography>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit((data) =>
            next(...data, shippingCountry, shippingSubdivision, shippingOption)
          )}
        >
          <Grid container spacing={3}>
            <FormInput name='firstName' label='First Name' />
            <FormInput name='lastName' label='Last Name' />
            <FormInput name='address1' label='Address' />
            <FormInput name='email' label='Email' />
            <FormInput name='city' label='City' />
            <FormInput name='zip' label='ZIP / Postal Code' />
            <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Country</InputLabel>
              <Select
                value={shippingCountry}
                fullWidth
                onChange={(e) => setShippingCountry(e.target.value)}
              >
                {countries.map(({ id, label }) => (
                  <MenuItem key={id} value={id}>
                    {label}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Subdivision</InputLabel>
              <Select
                value={shippingSubdivision}
                fullWidth
                onChange={(e) => setShippingSubdivision(e.target.value)}
              >
                {subdivisions.map(({ id, label }) => (
                  <MenuItem key={id} value={id}>
                    {label}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Options</InputLabel>
              <Select
                value={shippingOption}
                fullWidth
                onChange={(e) => setShippingOption(e.target.value)}
              >
                {options.map(({ id, label }) => (
                  <MenuItem key={id} value={id}>
                    {label}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
          </Grid>
          <br />
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button component={Link} to='/cart' variant='outlined'>
              Back to Cart
            </Button>
            <Button type='submit' variant='contained' color='primary'>
              Next
            </Button>
          </div>
        </form>
      </FormProvider>
    </>
  )
}
