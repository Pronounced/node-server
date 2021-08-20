const Users = require('./models/users.model');

const getData = async () => {
  var results = [];
  await Users.find({}).then(res => {
    res.forEach(item => {
      results.push(item)
    });
  });
  return results;
}

const postData = (data) => {
  return Users.insertMany(data);
}

module.exports = { getData, postData };