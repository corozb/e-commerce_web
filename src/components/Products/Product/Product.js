import React from 'react'
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from '@material-ui/core'
import { AddShoppingCart } from '@material-ui/icons'

import useStyles from './styles'

export default function Product({ product, onAddToCart }) {
  const classes = useStyles()
  // const handleAddToCart = () => onAddToCart(product.id, 1)

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        title={product.name}
        image={product.media.source}
      />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography variant='h5' gutterBottom component='h2'>
            {product.name}
          </Typography>
          <Typography variant='h5' gutterBottom>
            {product.price.formatted_with_symbol}
          </Typography>
        </div>
        <Typography
          dangerouslySetInnerHTML={{ __html: product.description }}
          variant='body2'
          color='textSecondary'
          component='p'
        />
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton
          aria-label='Add to Cart'
          onClick={() => onAddToCart(product.id, 1)}
        >
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  )
}
