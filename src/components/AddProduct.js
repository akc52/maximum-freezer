import React from 'react'
import foodList from './constants';

const AddProduct = props => {
  const {
    category,
    brand,
    product,
    packSize,
    weight,
    quantity,
    addProduct,
    handleChangeProduct,
    handleChangeCategory,
    handleChangeQuantity,
    handleChangePackSize,
    handleChangeBrand,
    handleChangeWeight
  } = props

  const listItems = foodList.map( (item, i) =>
    <option
      value={item.value}
      key={i}>
        {item.name}
    </option>
  );
  return (
    <div className='AddProduct'>
      <select
        value={category}
        onChange={handleChangeCategory}>
        {listItems}
      </select>

      <label>Brand:
        <input
          value={brand}
          onChange={handleChangeBrand} />
      </label>

      <label>Product:
        <input
          value={product}
          onChange={handleChangeProduct} />
      </label>

      <br/>

      <label>Pack Size:
        <input
          value={packSize}
          onChange={handleChangePackSize} />
      </label>

      <label>Weight:
        <input
          value={weight}
          onChange={handleChangeWeight} />
      </label>

      <label>Quantity:
        <input
          value={quantity}
          onChange={handleChangeQuantity} />
      </label>

      <br/>

      <button onClick={addProduct}>Add Product</button>
    </div>
  )
}

export default AddProduct