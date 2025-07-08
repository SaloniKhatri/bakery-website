const express = require('express');
const router = express.Router();
const { createOrder } = require('../controllers/Order');

router.post('/', createOrder);
module.exports = router;