const mongoose = require("mongoose");
const db = require("../models");

// This file empties the user collection and inserts the user below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/powerball"
);

const userSeed = [
  {
    fullname: ["Suzanne Collins"],
    password: "password",
    location: "Quincy",
    expiration: "2020-03-04"
    
  },
  {
    fullname: ["Peter Spiller"],
    password: "password",
    location: "Boston",
    expiration: "2022-02-02"
    
  }
  
];

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
