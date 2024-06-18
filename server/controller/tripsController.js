const Trip = require('../models/TripModel');
const Truck = require('../models/truckModel');
const Driver = require('../models/driverModel');
const Client = require('../models/clientModel');
const Transaction = require('../models/TransactionModel');
const mongoose = require('mongoose');










const getAllTrips = async (req, res) => {
    try {
        const trips = await Trip.find();
        res.json(trips);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const createTrip = async (req, res) => {
    const truck = await Truck.findById(req.body.truck);
    const driver = await Driver.findById(req.body.driver);
    const clients = await Client.find({ _id: { $in: req.body.clients } });
    const trip = new Trip({
        truck: truck,
        driver: driver,
        clients: clients
    });
    try {
        const newTrip = await trip.save();
        res.status(201).json(newTrip);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}


const addtransaction = async (req, res) => {
    const trip = await Trip.findById(req.params.id);
    const transaction = new Transaction({
        amount: req.body.amount,
        type: req.body.type
    });
    try {
        const newTransaction = await transaction.save();
        trip.Transactions.push(newTransaction);
        await trip.save();
        res.status(201).json(newTransaction);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}   

// const removeTransaction =async (req, res) => {
//     const trip = await Trip.findById(req.params.id);
//     const transaction = await Transaction.findById(req.params.id);
//     try {
//         await Transaction.findByIdAndDelete(req.params.id);
//         trip.Transactions.pull(transaction);    
//         await trip.save();
//         res.json({ message: 'Transaction removed' });
//     }
//     catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// }

module.exports = { getAllTrips, createTrip, addtransaction };
//remove transcation from trip 

