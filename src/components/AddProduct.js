import React from 'react'
import PropTypes from 'prop-types'
import foodList from './constants'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import Paper from '@material-ui/core/Paper'

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
});

const AddProduct = props => {
  const {
    classes, 
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
    <Paper>
      <form className={classes.container} noValidate autoComplete="off">
      <div className='AddProduct'>
      <Typography component="h2" variant="h2" gutterBottom>
        Add New Item
      </Typography>
      <select
        value={category}
        onChange={handleChangeCategory}>
        {listItems}
      </select>
        
      <TextField
        required
        value={brand}
        onChange={handleChangeBrand}
        className={classes.textField}
        id="brand"
        name="brand"
        label="Brand"
        margin="normal"
        variant="outlined" />

      <TextField
        required
        value={product}
        onChange={handleChangeProduct}
        className={classes.textField}
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
        className={classes.textField}
        id="packSize"
        name="packSize"
        label="Pack Size"
        margin="normal"
        variant="outlined" />

      <TextField
        required
        value={weight}
        onChange={handleChangeWeight}
        className={classes.textField}
        id="weight"
        name="weight"
        label="Weight"
        margin="normal"
        variant="outlined" />

      <TextField
        required
        value={quantity}
        onChange={handleChangeQuantity}
        className={classes.textField}
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
    </form>
    </Paper>
  )
}

AddProduct.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddProduct);