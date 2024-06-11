const calculateTotalPrice = function(next) {
    this.totalPrice = this.items.reduce((total, item) => total + item.price * item.quantity, 0);
    next();
  };
  
  module.exports = { calculateTotalPrice };


  
