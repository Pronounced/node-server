const CarRules = require('./models/carrules.model');

const getData = async () => {
  var results = [];
  await CarRules.find({}).then(res => {
    res.forEach(item => {
      results.push(item) 
    });
  });
  return results;
}

const postData = (data) => {
  return CarRules.insertMany(data);
}

const deleteData = async (data) => {
  await CarRules.deleteOne({ name: data.name });
}

module.exports = {getData, postData, deleteData};