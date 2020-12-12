import React from 'react'
import Review from './Review'

export default function PaymentForm({ checkoutToken }) {
  return (
    <div>
      <Review checkoutToken={checkoutToken} />
    </div>
  )
}
