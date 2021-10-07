const mongoose = require("mongoose");
//const connection = "mongodb://mongo:27017/carDealership?authSource=admin";
const connection = "mongodb://pronounced:4qNPk2ZQKZ43jypX25DdoQU7BDbAgjm6iJ83peTwDOx5Hk84DhF8w5gCYBEMrNOhkz30c53Xnr4dpQnUOOAvlQ==@pronounced.mongo.cosmos.azure.com:10255/?ssl=true&retrywrites=false&replicaSet=globaldb&maxIdleTimeMS=120000&appName=@pronounced@";
const connectDb = () => {
  return mongoose.connect(connection, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    user: "root",
    pass: "example"
  });
};
module.exports = connectDb;