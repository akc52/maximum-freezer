import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import DeleteIcon from '@material-ui/icons/Delete'

const Product = props => {
  const {
    category,
    brand,
    description,
    packSize,
    weight,
    quantity,
    index,
    removeProduct
  } = props

  return (
    <TableRow key={description}>
      <TableCell>
        {category}
      </TableCell>
      <TableCell>
        {brand}
      </TableCell>
      <TableCell>
        {description}
      </TableCell>
      <TableCell>
        {packSize}
      </TableCell>
      <TableCell>
        {weight}
      </TableCell>
      <TableCell>
        {quantity}
      </TableCell>
      <TableCell>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => removeProduct(index)}>
        <DeleteIcon />
      </Button>
      </TableCell>
    </TableRow>
  )
}

Product.propTypes = {
  description: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  quantity: PropTypes.string.isRequired // number
}

export default Product