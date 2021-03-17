const express = require('express');
const app = express();
const port = 3001;
const carquery = require('./inventorymethods');
const userquery = require('./usermethods');
const rulequery = require('./carrulesmethods');
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send(carquery.getData());
});


app.post('/postcar', (req, res) => {
  if(res.statusCode === 200){
    res.send(carquery.postData(req.body));
  } else {
      console.log(res.statusCode);
  }
});

app.put('/putcar', (req, res) => {
  if(res.statusCode === 200){
    res.send(carquery.putData(req.body));
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

app.get('/getusers', (req, res) => {
  res.status(200).send(userquery.getData());
});

app.get('/getrules', (req, res) => {
  res.status(200).send(rulequery.getData());
});


app.post('/postrule', (req, res) => {
  if(res.statusCode === 200){
    res.send(rulequery.postData(req.body));
  } else {
      console.log(res.statusCode);
  }
});

app.delete('/deleterule', (req, res) => {
  if(res.statusCode === 200){
    res.send(rulequery.deleteData(req.body));
  } else {
    console.log(res.statusCode);
  }
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});