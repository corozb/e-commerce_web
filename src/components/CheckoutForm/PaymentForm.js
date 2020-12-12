import React from 'react'
import { Button, Divider, Typography } from '@material-ui/core'
// import {
//   CardElement,
//   Elements,
//   ElementsConsumer,
// } from '@stripe/react-stripe-js'

import Review from './Review'
// import { loadStripe } from '@stripe/stripe-js'

// const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY)

export default function PaymentForm({
  checkoutToken,
  shippingData,
  backStep,
  onCaptureCheckout,
  nextStep,
}) {
  // const handleSubmit = async (e, elements, stripe) => {
  //   e.preventDefault()

  //   if (!stripe || !elements) return

  //   const { error, paymentMethod } = await stripe.createPaymentMethod({
  //     type: 'card',
  //     card: CardElement,
  //   })

  //   if (error) {
  //     console.log(error)
  //   } else {
  //     const orderData = {
  //       line_items: checkoutToken.live.line_items,
  //       customer: {
  //         firstName: shippingData.firstName,
  //         lastName: shippingData.lastName,
  //         email: shippingData.email,
  //       },
  //       shipping: {
  //         name: 'Primary',
  //         street: shippingData.address1,
  //         town_city: shippingData.city,
  //         country_state: shippingData.shippingSubdivision,
  //         postal_zip: shippingData.zip,
  //         country: shippingData.shippingCountry,
  //       },
  //       fulfilment: { shipping_method: shippingData.shippingOption },
  //       payment: {
  //         gateway: 'stripe',
  //         stripe: {
  //           payment_metho_id: paymentMethod.id,
  //         },
  //       },
  //     }
  //     onCaptureCheckout(checkoutToken.id, orderData)
  //     nextStep()
  //   }
  // }

  return (
    <div>
      <Review checkoutToken={checkoutToken} />
      <Divider />
      <Typography variant='h6' gutterBottom style={{ margin: '20px 0' }}>
        Payment method
      </Typography>
      <form onSubmit={nextStep}>
        <br />
        <br />
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button variant='outlined' onClick={backStep}>
            Back
          </Button>
          <Button type='submit' variant='contained' color='primary'>
            Pay {checkoutToken.live.subtotal.formatted_with_symbol}
          </Button>
        </div>
      </form>
      {/* <Elements stripe={stripePromise}>
        <ElementsConsumer>
          {({ elements, stripe }) => (
            <form onSubmit={(e) => handleSubmit(e, elements, stripe)}>
              <CardElement />
              <br />
              <br />
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Button variant='outlined' onClick={backStep}>
                  Back
                </Button>
                <Button
                  type='submit'
                  variant='contained'
                  disabled={!stripe}
                  color='primary'
                >
                  Pay {checkoutToken.live.subtotal.formatted_with_symbol}
                </Button>
              </div>
            </form>
          )}
        </ElementsConsumer>
      </Elements> */}
    </div>
  )
}
