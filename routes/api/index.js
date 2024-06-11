const router = require('express').Router();
const authenticateJWT = require('../../middleware/authMiddleware'); 

router.use("/auth",require("./authRoute"))
router.use('/user', require('./userRoute'));
router.use('/books',authenticateJWT, require('./bookRoute'));
router.use('/orders',authenticateJWT, require('./orderRoute'));
router.use('/carts',authenticateJWT, require('./cartRoute'));
module.exports = router;
