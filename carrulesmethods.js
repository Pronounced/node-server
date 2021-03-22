const CarRules = require('./models/carrules.model');

const getData = async () => {
  var results = [];
  await CarRules.find({}).then(res => {
    res.forEach(item => {
      results.push(item) 
    });
  });
  console.log(results);
  return results;
}

const postData = (data) => {
  return CarRules.insertMany(data);
}

// const putData = (data) => {
//   var state = getData();
//   state.map((element) => {
//     if(data.vin === element.vin) {
//       element.isApproved = data.isApproved;
//       fs.writeFileSync('carrules.json', JSON.stringify(state));
//     }
//   });
//   return state;
// }

const deleteData = async (data) => {
  await CarRules.deleteOne({ name: data.name });
}

module.exports = {getData, postData, deleteData};