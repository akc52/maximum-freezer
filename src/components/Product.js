import React from 'react'
import PropTypes from 'prop-types'

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
    <tr key={description}>
      <td>
        {category}
      </td>
      <td>
        {brand}
      </td>
      <td>
        {description}
      </td>
      <td>
        {packSize}
      </td>
      <td>
        {weight}
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
  quantity: PropTypes.string.isRequired // number
}

export default Product