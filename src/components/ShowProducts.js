import React from 'react'
import Product from './Product'

const ShowProducts = props => {
  const { products, removeProduct } = props
  return (
    <>
      <h2>Products</h2>
      <table className='ShowProducts'>
        <thead>
          <tr>
            <th>Category</th>
            <th>Product Name</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, i) => (
            <Product
              removeProduct={removeProduct}
              description={product.name}
              category={product.category}
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