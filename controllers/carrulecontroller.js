const rulequery = require('../carrulesmethods');

exports.getrule = async (req, res) => {
  if(res.statusCode === 200){
    res.send(await rulequery.getData());
  } else {
    console.log(res.statusCode);
  }
}


exports.postrule = (req, res) => {
  if(res.statusCode === 200){
    res.send(rulequery.postData(req.body));
  } else {
      console.log(res.statusCode);
  }
}

exports.deleterule = async (req, res) => {
  if(res.statusCode === 200){
    res.send(await rulequery.deleteData(req.body));
  } else {
    console.log(res.statusCode);
  }
}