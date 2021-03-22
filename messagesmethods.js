const Messages = require("./models/messages.model");

const getData = async () => {
  var results = [];
  await Messages.find({}).then(res => {
    res.forEach(item => {
      results.push(item) 
    });
  });
  return results;
}

const postData = (data) => {
  return Messages.insertMany(data);
}

module.exports = { getData, postData }; 