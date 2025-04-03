const express = require('express');
const router = express.Router();
const AdminController = require('../controllers/adminController');

router.get('/artists', AdminController.getAllArtists);
router.get('/bookings', AdminController.getAllBookings);

module.exports = router;