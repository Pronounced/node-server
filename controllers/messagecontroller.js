const messagequery = require('../messagesmethods');

exports.getmessages = async (req, res) => {
  if(res.statusCode === 200){
    res.send(await messagequery.getData());
  } else {
    console.log(res.statusCode);
  }
}

exports.postmessage = (req, res) => {
  if(res.statusCode === 200){
    res.send(messagequery.postData(req.body));
  } else {
      console.log(res.statusCode);
  }
}