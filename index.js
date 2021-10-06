const express = require('express');
const app = express();
const port = 3002;
const cors = require('cors');
const connectDb = require("./connection");
app.use(cors());
app.use(express.json());
var inventory_controller = require('./controllers/inventorycontroller');
var user_controller = require('./controllers/usercontroller');
var carrule_controller = require('./controllers/carrulecontroller');
var message_controller = require('./controllers/messagecontroller');
const router = require('./routes/catalog');

app.get('/', function (req, res) {
  res.send('Hello World!  Use Azure!');
});
app.use('/getcars', inventory_controller.getcar);
app.post('/postcar', inventory_controller.postcar);
app.put('/putcar', inventory_controller.putcar);
app.get('/getusers', user_controller.getuser);
app.post('/postuser', user_controller.postuser);
app.get('/getrules', carrule_controller.getrule);
app.post('/postrule', carrule_controller.postrule);
app.delete('/deleterule', carrule_controller.deleterule);
app.get('/getmessages', message_controller.getmessages);
app.post('/postmessage', message_controller.postmessage);

app.listen(port, () => {
 connectDb().then(() => {
   console.log("MongoDb connected");
 });
});

module.exports = app;