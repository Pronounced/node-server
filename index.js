const express = require('express');
const app = express();
const port = 3001;
const cors = require('cors');
const connectDb = require("./connection");
var catalogRouter = require('./routes/catalog');
app.use(cors());
app.use(express.json());
app.use('/', catalogRouter)

app.listen(port, () => {
 connectDb().then(() => {
   console.log("MongoDb connected");
 });
});

module.exports = app;