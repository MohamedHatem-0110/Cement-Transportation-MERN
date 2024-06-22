const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
  idClient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Client",
    required: true,
  },
  idTrip: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Trip",
    required: true,
  },
  paid: {
    type: Number,
    required: true,
  },
  amountOfCement: {
    type: Number,
    required: true,
  },
  dateTime: {
    type: Date,
    default: Date.now,
  },
  idDriver: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Driver",
    required: true,
  }

});

const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = Transaction;
