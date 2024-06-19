

const Truck = require('../models/truckModel');


const getAllTrucks = async (req, res) => {  
    try {
        console.log('get all trucks');
        const trucks = await Truck.find();
        res.json(trucks);
        
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}



const createTruck = async (req, res) => {
    const truck = new Truck({
        name: req.body.name
    });
    try {
        const newTruck = await truck.save();
        res.status(201).json(newTruck);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}


const removeTruck = async (req, res) => {
    try {
        await Truck.findByIdAndDelete(req.params.id);
        res.json({ message: 'Truck removed' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


// get truck by id from params 
const getTruckById = async (req, res) => {
    try {
        const truck = await Truck.findById(req.params.truckId);
        res.json(truck);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = { getAllTrucks, createTruck, removeTruck,getTruckById };