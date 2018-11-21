import React from 'react'
import foodList from './constants';

const AddProduct = props => {
  const {
    handleChange,
    handleChangeCategory,
    handleChangeQuantity,
    addProduct,
    productQuantity,
    product,
    pCategory
  } = props

  const listItems = foodList.map( (item) =>
    <option value={item.value}>{item.name}</option>
  );
  return (
    <div className='AddProduct'>
      <select
        value={pCategory}
        onChange={handleChangeCategory}>
        {listItems}
      </select>

      <input
        onChange={handleChange}
        value={product} />

      <input
        type="number"
        onChange={handleChangeQuantity}
        value={productQuantity} />

      <button onClick={addProduct}>Add Product</button>
    </div>
  )
}

export default AddProduct