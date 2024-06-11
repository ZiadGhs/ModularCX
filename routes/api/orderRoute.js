const router = require("express").Router();
const orderController = require('../../controllers/orderController');
const authenticateJWT = require('../../middleware/authMiddleware');

router.post('/create', orderController.createOrder);
router.get('/get-all', orderController.getOrders);
router.get('/get-by-id/:id', orderController.getOrderById);
router.put('/update-by-id/:id', orderController.updateOrder);
router.delete('/delete-by-id/:id', orderController.deleteOrder);

module.exports = router;
