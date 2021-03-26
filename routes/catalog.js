var express = require('express');
var router = express.Router();

var inventory_controller = require('../controllers/inventorycontroller');
var user_controller = require('../controllers/usercontroller');
var carrule_controller = require('../controllers/carrulecontroller');
var message_controller = require('../controllers/messagecontroller');

router.get('/', inventory_controller.getcar);
router.post('/postcar', inventory_controller.postcar);
router.put('/putcar', inventory_controller.putcar);
router.get('/getusers', user_controller.getuser);
router.get('/getrules', carrule_controller.getrule);
router.post('/postrule', carrule_controller.postrule);
router.delete('/deleterule', carrule_controller.deleterule);
router.get('/getmessages', message_controller.getmessages);
router.get('/postmessage', message_controller.postmessage);

module.exports = router;