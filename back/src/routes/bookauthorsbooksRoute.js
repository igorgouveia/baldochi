const express = require('express');
const router = express.Router();
const controller = require('../controllers/bookauthorsbooksController')

router.get('/', controller.get);
router.get('/:id', controller.getById);
router.post('/', controller.post);
router.patch('/', controller.patch);
router.delete('/', controller.delete);

module.exports = router;