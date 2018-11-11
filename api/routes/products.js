const products = []

const express = require('express')
const router = express.Router()

router.route('/')
  .get((req, res) => {
    // 1. Respond with the array of products
    res.status(200).send({
      data: products
    })
  })

router.route('/')
  .post((req, res) => {
    // 1. Grab the new product from the request body
    const product = req.body.product
    
    // 2. Push it into our product array
    products.push(product)

    // 3. Respond with the updated products array
    res.status(201).send({
      data: [product]
    })
    // 201 - created
  })

  // delete /products/2
  router.route('/:index')
  .delete((req, res) => {
    // 1. Grab the product index from the query params.
    // const index = req.params.index
    const { index } = req.params

    // 2. Splice the old product out of the products array
    const removedProduct = products.splice(index, 1)

    // 3. Respond with the updated list of products
    res.status(202).send({
      data: removedProduct
    })
    // 201 - deleted
  })

exports.router = router