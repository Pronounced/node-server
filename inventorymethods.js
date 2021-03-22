const Inventory = require("./models/inventory.model");

const getData = async () => {
  var results = [];
  await Inventory.find({}).then(res => {
    res.forEach(item => {
      results.push(item) 
    });
  });
  return results;
}

const postData = (data) => {
  return Inventory.insertMany(data);
}

const putData = async (data) => {
  await Inventory.updateOne({ vin: data.vin }, { isApproved: data.isApproved });
}

const deleteData = async (data) => {
  await Inventory.deleteOne({ vin: data.vin });
}

module.exports = {getData, postData, putData, deleteData};