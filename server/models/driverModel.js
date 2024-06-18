const mongoose = require('mongoose');

const driverSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    Custody: {
        type: Number,
        required: true
    },
});

const Driver = mongoose.model('Driver', driverSchema);

module.exports = Driver;
