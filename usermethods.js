const fs = require('fs');

const getData = () => {
  let rawdata = fs.readFileSync('users.json');
  return JSON.parse(rawdata);
}

// const postData = (data) => {
//   var state = getData();
//   state.push(data);
//   fs.writeFileSync('users.json', JSON.stringify(state));
//   return state;
// }

// const putData = (data) => {
//   var state = getData();
//   state.map((element) => {
//     if(data.vin === element.vin) {
//       element.isApproved = data.isApproved;
//       fs.writeFileSync('users.json', JSON.stringify(state));
//     }
//   });
//   return state;
// }

// const deleteData = (data) => {
//   var state = getData();
//   var index = state.indexOf(data);
//   state.splice(index, 1);
//   fs.writeFileSync('users.json', JSON.stringify(state));
//   return state;
// }

module.exports = {getData};