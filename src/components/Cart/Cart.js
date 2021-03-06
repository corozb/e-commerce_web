import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Container, Grid, Typography } from '@material-ui/core'

import CartItem from './CartItem/CartItem'
import useStyles from './styles'

export default function Cart({
  cart,
  handleUpdateQuantity,
  handleRemoveItems,
  handleEmptyCart,
}) {
  const classes = useStyles()

  const EmptyCart = () => (
    <Typography variant='subtitle1'>
      You have no items in your shopping cart,
      <Link to='/' className={classes.link}>
        start adding some!
      </Link>
    </Typography>
  )

  const FilledCart = () => (
    <>
      <Grid container spacing={3}>
        {cart.line_items.map((item) => (
          <Grid item xs={12} sm={4} key={item.id}>
            <CartItem
              item={item}
              onUpdateItem={handleUpdateQuantity}
              onRemoveItem={handleRemoveItems}
            />
          </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetails}>
        <Typography variant='h4' gutterBottom>
          Subtotal: {cart.subtotal.formatted_with_symbol}
        </Typography>
        <div>
          <Button
            className={classes.emptyButton}
            size='large'
            type='button'
            variant='contained'
            color='secondary'
            onClick={handleEmptyCart}
          >
            Empty Cart
          </Button>
          <Button
            className={classes.checkoutButton}
            component={Link}
            to='/checkout'
            size='large'
            type='button'
            variant='contained'
            color='primary'
          >
            Checkout
          </Button>
        </div>
      </div>
    </>
  )

  if (!cart.line_items) return 'Loading...'

  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography variant='h3' className={classes.title}>
        Your Shopping Cart
      </Typography>
      {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
    </Container>
  )
}
