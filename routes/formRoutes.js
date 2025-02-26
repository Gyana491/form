const express = require('express');
const router = express.Router();
const Reservation = require('../models/Reservation');

router.post('/api/reservations', async (req, res) => {
    try {
        const reservation = new Reservation(req.body);
        await reservation.save();
        console.log('Reservation created:', reservation);
        res.status(201).json({ 
            message: 'Reservation created successfully',
            reservation: reservation 
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
