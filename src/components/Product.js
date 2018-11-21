import React from 'react'
import PropTypes from 'prop-types'

const Product = props => {
  const {
    description,
    category,
    index,
    removeProduct,
    quantity
  } = props

  return (
    <tr key={description}>
      <td>
        {category}
      </td>
      <td>
        {description}
      </td>
      <td>
        {quantity}
      </td>
      <td>
        <button onClick={() => removeProduct(index)}>Remove Product</button>
      </td>
    </tr>
  )
}

Product.propTypes = {
  description: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired
}

export default Product