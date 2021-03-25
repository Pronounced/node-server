const userquery = require('../usermethods');

app.get('/getusers', async (req, res) => {
  if(res.statusCode === 200){
    res.send(await userquery.getData());
  } else {
    console.log(res.statusCode);
  }
});