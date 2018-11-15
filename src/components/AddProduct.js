import React from 'react'
import foodList from './constants';

const AddProduct = props => {
  const { handleChange, handleChangeCategory, addProduct, product, pCategory } = props
  return (
    <div className='AddProduct'>
      <select value={pCategory} onChange={handleChangeCategory}>
        <option value='meat'>Meat</option>
        <option value='fish'>Fish</option>
        <option value='veg-protein'>Veg Protein</option>
        <option value='bread'>Bread</option>
        <option value='fruit'>Fruit</option>
        <option value='vegetable'>Vegetable</option>
        <option value='pastry'>Pastry</option>
        <option value='pasta'>Pasta</option>
        <option value='misc'>Misc</option>
      </select>
      <input onChange={handleChange} value={product} />
      <button onClick={addProduct}>Add Product</button>
    </div>
  )
}

export default AddProduct