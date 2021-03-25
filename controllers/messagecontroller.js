const messagequery = require('../messagesmethods');

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