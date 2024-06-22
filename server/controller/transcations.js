const transaction = require('../models/transactionModel');
const trip = require('../models/tripModel');



//get the the transcation from tripId

const  getTransactionByTripId = async (req, res) => {
    try {
        const transactions = await transaction.find({ trip: req.params.tripId });
        res.json(transactions);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//create a transaction
const createTransaction= async (req, res) => {
    try {
      const { idClient, idTrip, paid, amountOfCement } = req.body;
  
      const newTransaction = new transaction({
        idTrip,
        idClient,
        paid,
        amountOfCement,
      });   
  
      const savedTransaction = await newTransaction.save();
      res.status(201).json(savedTransaction);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };


module.exports = { getTransactionByTripId, createTransaction};
