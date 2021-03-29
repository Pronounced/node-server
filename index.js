const express = require('express');
const app = express();
const port = 3001;
const cors = require('cors');
const connectDb = require("./connection");
var catalogRouter = require('./routes/catalog');
app.use(cors());
app.use(express.json());

app.use('/getcars', catalogRouter);
app.use('/postcar', catalogRouter);
app.use('/putcar', catalogRouter);
app.use('/getusers', catalogRouter);
app.use('/getrules', catalogRouter);
app.use('/postrule', catalogRouter);
app.use('/deleterule', catalogRouter);
app.use('/getmessages', catalogRouter);
app.use('/postmessages', catalogRouter);

app.listen(port, () => {
 connectDb().then(() => {
   console.log("MongoDb connected");
 });
});

module.exports = app;