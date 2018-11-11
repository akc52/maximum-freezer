import React, { Component } from 'react'
import ShowProducts from './components/ShowProducts'
import AddProduct from './components/AddProduct'
import axios from 'axios'

class InventoryApp extends Component {
  state = {
    product: '',
    products: []
  }

  componentDidMount() {
    this.refresh();
  }

  clearInput = () => {
    this.setState({ product: '' })
  }

  refresh = async () => {
    try {
      // get /products to get all products
      const response = await axios.get('/products')
      const products = response.data.data
      console.log(products)
      // put in state
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
        product: this.state.product
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
      this.refresh()
    } catch(e) {
      console.log(e)
    }
  }

  handleChange = e => {
    this.setState({
      product: e.target.value
    })
  }

  render() {
    return (
      <div>
        <AddProduct
          handleChange={this.handleChange}
          addProduct={this.addProduct}
          product={this.state.product}
        />
        <ShowProducts products={this.state.products} removeProduct={this.removeProduct} />
      </div>
    )
  }
}

export default InventoryApp