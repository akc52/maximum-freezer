import React from 'react'
import PropTypes from 'prop-types'

const Product = props => {
  const { description, index, removeProduct } = props
  return (
    <tr key={description}>
      <td>
        {description}
      </td>
      <td>
        <button onClick={() => removeProduct(index)}>Remove Product</button>
      </td>
    </tr>
  )
}

Product.propTypes = {
  description: PropTypes.string.isRequired
}

export default Product