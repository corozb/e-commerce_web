import React from 'react'
import { Grid } from '@material-ui/core'

import Product from './Product/Product'
import useStyles from './styles'

const products = [
  {
    id: 1,
    name: 'Shoes',
    description: 'Running shoes',
    price: 50,
    image:
      'https://imgaz2.staticbg.com/thumb/large/upload/2014/08/SKU144134/SKU144134G%20(1).jpg',
  },
  {
    id: 2,
    name: 'Macbook',
    description: 'Apple macbook',
    price: 800,
    image: 'https://cdn.mos.cms.futurecdn.net/v5s9y4v4hM9P8tA6tdF3N4.jpg',
  },
]

export default function Products() {
  const classes = useStyles()

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify='center' spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  )
}
