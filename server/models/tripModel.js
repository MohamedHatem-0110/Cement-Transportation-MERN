const mongoose = require("mongoose");
const Transaction = require("./transactionModel");

const TripSchema = new mongoose.Schema({
  truck: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Truck",
    required: true,
  },
  driver: {
    type: String,
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
  from: {
    type: String,
    required: true,
  },
    to: {
        type: String,
        required: true,
    },
    
  clients: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Client",
    },
  ],
});

const Trip = mongoose.model("Trip", TripSchema);

module.exports = Trip;
