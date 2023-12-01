const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
  userId: {type: String, unique: true}, 
  username: String,
  passwordHash: String,
  email: String,
  userType: String, // Admin, Employee, User
  googleId: String
});


const cabSchema = new mongoose.Schema({
  cabId: {type: String, unique: true},
  driverName: String,
  licensePlate: String,
  cabModel: String,
  currentLocation: { type: mongoose.Schema.Types.ObjectId, ref: 'Location' },
  status: String // Available, On Trip, Maintenance
});


const tripSchema = new mongoose.Schema({
  tripId: {type: String, unique: true},
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  cabId: { type: mongoose.Schema.Types.ObjectId, ref: 'Cab' },
  startLocation: { type: mongoose.Schema.Types.ObjectId, ref: 'Location' },
  endLocation: { type: mongoose.Schema.Types.ObjectId, ref: 'Location' },
  startTime: Date,
  endTime: Date,
  tripStatus: String // Scheduled, In Progress, Completed, Cancelled
});


const User = mongoose.model('User', userSchema);
const Cab = mongoose.model('Cab', cabSchema);
const Trip = mongoose.model('Trip', tripSchema);realTimeTrackingSchema);


// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/smartCabDB', { useNewUrlParser: true, useUnifiedTopology: true });
