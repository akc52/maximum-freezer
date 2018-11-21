import React from 'react'
import Product from './Product'

const ShowProducts = props => {
  const {
    products,
    removeProduct
  } = props
  return (
    <>
      <h2>Products</h2>
      <table className='ShowProducts'>
        <thead>
          <tr>
            <th>Category</th>
            <th>Brand</th>
            <th>Product Name</th>
            <th>Pack Size</th>
            <th>Weight</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
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
        </tbody>
      </table>
    </>
  )
}

export default ShowProducts