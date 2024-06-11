const router = require("express").Router();
const userController = require('../../controllers/userController');

router.get('/get-all', userController.getUsers);
router.get('/get-by-id/:id', userController.getUserById);

module.exports = router;
