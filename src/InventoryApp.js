import React, { Component } from 'react'
import ShowProducts from './components/ShowProducts'
import AddProduct from './components/AddProduct'
import axios from 'axios'
import Divider from '@material-ui/core/Divider'
import EmptyProducts from './components/EmptyProducts';

class InventoryApp extends Component {
  state = {
    product: '',
    brand: '',
    // category: '',
    packSize: '',
    weight: '',
    quantity: '',
    products: []
  }

  componentDidMount() {
    this.refresh()
  }

  clearInput = () => {
    this.setState({
      product: '',
      brand: '',
      // category: '',
      packSize: '',
      weight: '',
      quantity: ''
    })
  }

  refresh = async () => {
    try {
      // get /products to get all products
      const response = await axios.get('/products')
      const products = response.data.data
      // TEMP put in state
      this.setState({ products })
    } catch(e) {
      console.log(e)
    }
  }

  addProduct = async () => {
    try {
      // const nextProducts = Array.from(this.state.products)
      // nextProducts.push(this.state.product)
      // this.setState({ products: nextProducts })
      await axios.post('/products', {
        product: {
          name: this.state.product,
          category: this.state.category,
          quantity: this.state.quantity,
          brand: this.state.brand,
          weight: this.state.weight,
          packSize: this.state.packSize
        }
      })
      this.refresh()
    } catch (e) {
      console.log(e)
    }
    this.clearInput()
  }

  removeProduct = async index => {
    // const nextProducts = Array.from(this.state.products)
    // nextProducts.splice(index, 1)
    // this.setState({ products: nextProducts })
    try {
      await axios.delete(`/products/${index}`)
      console.log(this.state.products.length > 1)
      console.log(this.state.products.length )
      this.refresh()
    } catch(e) {
      console.log(e)
    }
  }

  // TO DO refactor handles

  // TO DO set initial value for category
  handleChangeCategory = e => {
    this.setState({
      category: e.target.value
    })
  }

  handleChangeBrand = e => {
    this.setState({
      brand: e.target.value
    })
  }

  handleChangeProduct = e => {
    this.setState({
      product: e.target.value
    })
  }

  handleChangePackSize = e => {
    this.setState({
      packSize: e.target.value
    })
  }

  handleChangeWeight = e => {
    this.setState({
      weight: e.target.value
    })
  }

  handleChangeQuantity = e => {
    this.setState({
      quantity: e.target.value
    })
  }
  //

  render() {
    const hasInventory = this.state.products.length > 0;

    return (
      <div>
        <AddProduct
          product={this.state.product}
          quantity={this.state.quantity}
          brand={this.state.brand}
          weight={this.state.weight}
          packSize={this.state.packSize}
          addProduct={this.addProduct}
          handleChangeCategory={this.handleChangeCategory}
          handleChangeBrand={this.handleChangeBrand}
          handleChangeProduct={this.handleChangeProduct}
          handleChangePackSize={this.handleChangePackSize}
          handleChangeWeight={this.handleChangeWeight}
          handleChangeQuantity={this.handleChangeQuantity}
        />
        <Divider />
        {hasInventory ? (
          <ShowProducts
          products={this.state.products}
          removeProduct={this.removeProduct}
        />
        ) : (
          <EmptyProducts />
        )}
      </div>
    )
  }
}

export default InventoryApp