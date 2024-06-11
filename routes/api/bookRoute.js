const router = require('express').Router();
const bookController = require('../../controllers/bookController'); 

router.post('/create', bookController.createBook);
router.get('/get-all', bookController.getBooks);
router.get('/get-by-id/:id', bookController.getBookById);
router.put('/update-by-id/:id', bookController.updateBook);
router.delete('/delete-by-id/:id', bookController.deleteBook);

module.exports = router;
