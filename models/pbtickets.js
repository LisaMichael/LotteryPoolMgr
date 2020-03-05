// powerball database code goes here.
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// database schema for Powerball Season Tickets 

const ticketSchema = new Schema({
  control: { type: String, required: true },
  num1: { type: Number, required: true },
  num2: { type: Number, required: true },
  num3: { type: Number, required: true },
  num4: { type: Number, required: true },
  num5: { type: Number, required: true },
  powerball: {type: Number, required: true},
  // date: { type: Date, default: Date.now }
});

const Ticket = mongoose.model("Ticket", bookSchema);