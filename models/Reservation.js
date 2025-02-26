const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
    passengerName: { type: String },
    age: { type: Number },
    gender: { type: String },
    fromStation: { type: String },
    toStation: { type: String },
    date: { type: Date },
    trainNumber: { type: String },
    class: { type: String },
    email: { type: String },
    phone: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Reservation', reservationSchema);
