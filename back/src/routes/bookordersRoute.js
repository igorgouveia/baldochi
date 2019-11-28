const express = require('express');
const router = express.Router();
const controller = require('../controllers/bookordersController')

router.get('/', controller.get);
router.get('/:id', controller.getById);
router.post('/', controller.post);
router.patch('/:id', controller.patch);
router.delete('/:id', controller.delete);

module.exports = router;