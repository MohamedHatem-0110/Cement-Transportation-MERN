const mongoose = require('mongoose');

const truckSchema = new mongoose.Schema({
    driver: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Driver',
        required: true
    },
    capitalGoing: {
        type: Number,
        default: 0
    },
    clients: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Client'
    }]
});

const Truck = mongoose.model('Truck', truckSchema);

module.exports = Truck;
