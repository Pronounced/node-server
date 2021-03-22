const mongoose = require("mongoose");
const carimagesSchema = new mongoose.Schema({
  image: {
    type:String
  }
},
{collection: carimages}
)

const CarImages = mongoose.model("CarImages", carimagesSchema);
module.exports = CarImages;