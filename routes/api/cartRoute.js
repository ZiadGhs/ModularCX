const router = require("express").Router();
const cartController = require('../../controllers/cartController');
const authenticateJWT = require('../../middleware/authMiddleware'); 

router.post('/create', cartController.createCart);
router.get('/get-all', cartController.getCarts);
router.get('/get-by-id/:id', cartController.getCartById);
router.put('/update-by-id/:id', cartController.updateCart);
router.delete('/delete-by-id/:id', cartController.deleteCart);
router.get('/get-by-user/:userId', cartController.getCartsByUser);
module.exports = router;
