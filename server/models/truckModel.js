const mongoose = require('mongoose');
const TruckSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Trips: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Trip'
    }]
});

const Truck = mongoose.model('Truck', TruckSchema);
module.exports = Truck;