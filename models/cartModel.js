const mongoose = require('mongoose');
const { calculateTotalPrice } = require('./hooks/cartHook');
const orderItemSchema = require("./types/cartItem")

const cartSchema =  new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  items: [orderItemSchema],
        
  totalPrice: {
    type: Number,
    required: true,
    min: 0
  },
},{timestamp:true});


const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;
