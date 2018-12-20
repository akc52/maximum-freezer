const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
  description: { type: String, required: true },
  user: { type: Schema.Types.ObjectId, ref: 'user' }
})

module.exports = mongoose.model('Product', productSchema)
