const Cart = require('../models/cartModel');

// Create a new cart
exports.createCart = async (req, res) => {
  try {
    const cart = new Cart(req.body);
    await cart.save();
    res.status(201).json(cart);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all carts
exports.getCarts = async (req, res) => {
  try {
    const carts = await Cart.find().populate('userId').populate('items.bookId');
    res.status(200).json(carts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single cart by ID
exports.getCartById = async (req, res) => {
  try {
    const cart = await Cart.findById(req.params.id).populate('userId').populate('items.bookId');
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a cart by ID
exports.updateCart = async (req, res) => {
  try {
    const cart = await Cart.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }
    res.status(200).json(cart);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a cart by ID
exports.deleteCart = async (req, res) => {
  try {
    const cart = await Cart.findByIdAndDelete(req.params.id);
    if (!cart) {
      console.log('Cart not found with ID:', req.params.id);
      return res.status(404).json({ message: 'Cart not found' });
    }
    console.log('Cart deleted successfully:', req.params.id);
    res.status(200).json({ message: 'Cart deleted successfully' });
  } catch (error) {
    console.error('Error deleting cart:', error);
    res.status(500).json({ error: error.message });
  }
};


// Get all carts by user ID
exports.getCartsByUser = async (req, res) => {
  try {
    const userId = req.params.userId;
    const carts = await Cart.find({ userId: userId }).populate('items.bookId');
    res.status(200).json(carts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};