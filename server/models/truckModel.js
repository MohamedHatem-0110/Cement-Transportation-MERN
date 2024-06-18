const mongoose = require("mongoose");
const TruckSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  trips: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Trip",
    },
  ],
});

const Truck = mongoose.model("Truck", TruckSchema);
module.exports = Truck;
