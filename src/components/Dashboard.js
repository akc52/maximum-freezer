import React from "react"
import axios from "axios"
import { getToken } from "../services/tokenService"
import Logout from './Logout'
import ShowProducts from './ShowProducts'
import EmptyProducts from './EmptyProducts'
import AddProduct from "./AddProduct"

import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import Paper from '@material-ui/core/Paper'


class Dashboard extends React.Component {
  state = {
    product: "",
    products: []
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  getProducts = async () => {
    // 1. When the dashboard loads, get the user's token
    const token = getToken()
    // 2. Send a GET request to /product and pass the token to grab a list of ONLY this user's products
    try {
      const res = await axios.get('/product', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      const products = res.data.payload
      console.log(products)
      this.setState({ products })
    } catch(e) {
      console.error(e)
    }
  }
    
  componentDidMount() {
      this.getProducts();
  }

  handleSubmit = async e => {
    e.preventDefault();
    const { product } = this.state;

    // 1. Get the user's token
    const token = getToken()
    // 2. Send a POST to /product with
    try {
      //  a - the body containing the PRODUCT we wish to post
      const res = await axios.post('/product', { description: product }, {
        headers: {
          //  b - the Authorization Header Bearer <token>
          Authorization: `Bearer ${token}`
        }
      })
      console.log(res)
      this.getProducts()
    } catch(e) {
      console.error(e)
    }
  }

  removeProduct = async index => {

    try {
      // await axios.delete(`/product/${index}`)
      // console.log(this.state.products.length > 1)
      // console.log(this.state.products.length )
      // this.refresh()
    } catch(e) {
      console.log(e)
    }
  }

  render() {
    const hasInventory = this.state.products.length > 0
    console.log(hasInventory, this.state.products.length)
    return (
      <div>
        <Typography component="h2" variant="h2" gutterBottom>
          Dashboard
        </Typography>
        <Paper>
          <form onSubmit={this.handleSubmit}>
            <input name="product" type="text" onChange={this.handleChange} />
            {/*
              <AddProduct 
                addProduct={this.handleSubmit}
              />
            */}
            <button>Add Product</button>
          </form>
        </Paper>

        <Divider />

        {hasInventory ? (
          /*
            <ul>
              {this.state.products.map(product => {
                return <li>{JSON.stringify(product, null, 3)}</li>
              })}
            </ul>
          */
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

export default Dashboard;
