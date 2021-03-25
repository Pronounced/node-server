const rulequery = require('../carrulesmethods');

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