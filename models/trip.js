const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const travelSchema = new Schema({
  user: { type: String },
  title: { type: String },
  city: { type: String },
  cityDump: { type: String },
  duration: { type: String },
  season: { type: String },
  food: { type: String },
  accomodations: { type: String },
  transportations: { type: String },
  activities: { type: String },
  photos: [{ type: String }],
  date: { type: Date, default: Date.now }
});

const Trip = mongoose.model("Trip", travelSchema);

module.exports = Trip;
