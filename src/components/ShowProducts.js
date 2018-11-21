import React from 'react'
import Product from './Product'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'

const ShowProducts = props => {
  const {
    products,
    removeProduct
  } = props
  return (
    <>
      <h2>Inventory List</h2>
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
    </>
  )
}

export default ShowProducts