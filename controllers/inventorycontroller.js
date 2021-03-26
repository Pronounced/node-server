const carquery = require('../inventorymethods');

exports.getcar = async function (req, res) {
  if(res.statusCode === 200) {
    res.send( await carquery.getData());
  } else {
    console.log(res.statusCode);
  }
}

exports.postcar = function (req, res) {
  if(res.statusCode === 200){
    res.send(carquery.postData(req.body));
  } else {
    console.log(res.statusCode);
  }
}

exports.putcar = async function (req, res) {
  if(res.statusCode === 200){
    res.send(await carquery.putData(req.body));
  } else {
    console.log(res.statusCode);
  }
}

// delete('/deletecar', (req, res) => {
//   if(res.statusCode === 200){
//     res.send(carquery.deleteData(req.body));
//   } else {
//     console.log(res.statusCode);
//   }
// })
