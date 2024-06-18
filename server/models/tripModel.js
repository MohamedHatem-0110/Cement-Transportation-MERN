const mongoose = require("mongoose");

const tripSchema = new mongoose.Schema({
  truck: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Truck",
    required: true,
  },

  driver: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Driver",
    required: true,
  },
  capital: {
    type: Number,
    default: 0,
  },
  Transactions: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Transaction",
    },
  ],
  clients: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Client",
    },
  ],
});

const Trip = mongoose.model("Trip", tripSchema);

module.exports = Trip;
