import React from 'react'
import foodList from './constants'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'

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
      value={item.name}
      key={i}>
        {item.name}
    </option>
  );

  return (
    <div className='AddProduct'>
      <h2>Add New Item</h2>

      <select
        value={category}
        onChange={handleChangeCategory}>
        {listItems}
      </select>

      <TextField
        required
        value={brand}
        onChange={handleChangeBrand}
        id="brand"
        name="brand"
        label="Brand"
        margin="normal"
        variant="outlined" />

      <TextField
        required
        value={product}
        onChange={handleChangeProduct}
        id="product"
        name="product"
        label="Product"
        margin="normal"
        variant="outlined" />

      <br />

      <TextField
        required
        value={packSize}
        onChange={handleChangePackSize}
        id="packSize"
        name="packSize"
        label="Pack Size"
        margin="normal"
        variant="outlined" />

      <TextField
        required
        value={weight}
        onChange={handleChangeWeight}
        id="weight"
        name="weight"
        label="Weight"
        margin="normal"
        variant="outlined" />

      <TextField
        required
        value={quantity}
        onChange={handleChangeQuantity}
        id="quantity"
        name="quantity"
        label="Quantity"
        margin="normal"
        variant="outlined" />

      <br/>

      <Button
        variant="fab"
        color="primary"
        aria-label="Add"
        onClick={addProduct}>
        <AddIcon />
      </Button>

    </div>
  )
}

export default AddProduct