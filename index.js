const express = require('express');
const app = express();
const port = 3001;
const carquery = require('./inventorymethods');
const userquery = require('./usermethods');
const rulequery = require('./carrulesmethods');
const messagequery = require('./messagesmethods');
const cors = require('cors');
const connectDb = require("./connection");

app.use(cors());
app.use(express.json());

app.get('/', async (req, res) => {
  if(res.statusCode === 200) {
    res.send( await carquery.getData());
  } else {
    console.log(res.statusCode);
  }
});


app.post('/postcar', (req, res) => {
  if(res.statusCode === 200){
    res.send(carquery.postData(req.body));
  } else {
    console.log(res.statusCode);
  }
});

app.put('/putcar', async (req, res) => {
  if(res.statusCode === 200){
    res.send(await carquery.putData(req.body));
  } else {
    console.log(res.statusCode);
  }
});

app.delete('/deletecar', (req, res) => {
  if(res.statusCode === 200){
    res.send(carquery.deleteData(req.body));
  } else {
    console.log(res.statusCode);
  }
})

app.get('/getusers', async (req, res) => {
  if(res.statusCode === 200){
    res.send(await userquery.getData());
  } else {
    console.log(res.statusCode);
  }
});

app.get('/getrules', async (req, res) => {
  if(res.statusCode === 200){
    res.send(await rulequery.getData());
  } else {
    console.log(res.statusCode);
  }
});


app.post('/postrule', (req, res) => {
  if(res.statusCode === 200){
    res.send(rulequery.postData(req.body));
  } else {
      console.log(res.statusCode);
  }
});

app.delete('/deleterule', async (req, res) => {
  if(res.statusCode === 200){
    res.send(await rulequery.deleteData(req.body));
  } else {
    console.log(res.statusCode);
  }
})

app.get('/getmessages', async (req, res) => {
  if(res.statusCode === 200){
    res.send(await messagequery.getData());
  } else {
    console.log(res.statusCode);
  }
})

app.post('/postmessage', (req, res) => {
  if(res.statusCode === 200){
    res.send(messagequery.postData(req.body));
  } else {
      console.log(res.statusCode);
  }
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
 // connectDb().then(() => {
  //  console.log("MongoDb connected");
 // });
});


app.get("/test", async (req, res) => {
  if (res.statusCode === 200) {
     res.json({ message: "pass!" });
  } else {
    console.log(res.statusCode);
  }
});
module.exports = app;