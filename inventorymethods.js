const fs = require('fs');
const Inventory = require("./models/inventory.model");

const getData = () => {
  let rawdata = fs.readFileSync('inventory.json');
  return JSON.parse(rawdata);
}

const postData = (data) => {
  // var state = getData();
  // state.push(data);
  // fs.writeFileSync('inventory.json', JSON.stringify(state));
  //Inventory.insertMany(data);
  return Inventory.insertMany(data);
}

const putData = (data) => {
  // var state = getData();
  // state.map((element) => {
  //   if(data.vin === element.vin) {
  //     element.isApproved = data.isApproved;
  //     fs.writeFileSync('inventory.json', JSON.stringify(state));
  //   }
  // });
  // return state;

  return Inventory.updateOne(
    { vin: `${data.vin}` },
    {
      $set: { "isApproved": data.isApproved }
    }
  )
}

const deleteData = (data) => {
  // var state = getData();
  // var index = state.indexOf(data);
  // state.splice(index, 1);
  // fs.writeFileSync('inventory.json', JSON.stringify(state));
  // return state;

  return Inventory.remove(
    { vin: `${data.vin}`}
  )
}

module.exports = {getData, postData, putData, deleteData};