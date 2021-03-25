var express = require('express');
var router = express.Router();

var inventory_controller = require('../controllers/inventorycontroller');

router.get('/', inventory_controller.carget);
router.post('/postcar', inventory_controller.carpost);

module.exports = router;