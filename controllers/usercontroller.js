const userquery = require('../usermethods');

exports.getuser = async (req, res) => {
  if(res.statusCode === 200){
    res.send(await userquery.getData());
  } else {
    console.log(res.statusCode);
  }
};