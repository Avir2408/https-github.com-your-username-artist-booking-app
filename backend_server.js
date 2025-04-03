const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/artistBooking', { useNewUrlParser: true, useUnifiedTopology: true });

// Routes
const userRoutes = require('./routes/user');
const artistRoutes = require('./routes/artist');
const bookingRoutes = require('./routes/booking');
const chatRoutes = require('./routes/chat');
const adminRoutes = require('./routes/admin');

app.use('/users', userRoutes);
app.use('/artists', artistRoutes);
app.use('/bookings', bookingRoutes);
app.use('/chat', chatRoutes);
app.use('/admin', adminRoutes);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});