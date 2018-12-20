import React from 'react'
import Product from './Product'
import Typography from '@material-ui/core/Typography'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

const ShowProducts = props => {
  const {
    products,
    removeProduct
  } = props
  return (
    <div>
      <Paper>
        <Typography component="h2" variant="h2" gutterBottom>
          Inventory List
        </Typography>
        <Table className='ShowProducts'>
          <TableHead>
            <TableRow>
              <TableCell>Category</TableCell>
              <TableCell>Brand</TableCell>
              <TableCell>Product Name</TableCell>
              <TableCell>Pack Size</TableCell>
              <TableCell>Weight</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product, i) => (
              <Product
                category={product.category}
                brand={product.brand}
                description={product.name}
                packSize={product.packSize}
                weight={product.weight}
                quantity={product.quantity}
                removeProduct={removeProduct}
                index={i}
                key={i}
              />
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  )
}

export default ShowProducts