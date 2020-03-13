const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const users = require("./routes/api/users");
const app = express();


// Parses our HTML and helps us find elements
var cheerio = require("cheerio");
// Makes HTTP request for HTML page
var axios = require("axios");

// First, tell the console what server.js is doing
// console.log("\n***********************************\n" +
//             "Grabbing every thread name and link\n" +
//             "\n***********************************\n");

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());
// DB Config
// const db = require("./config/keys").mongoURI;
// // Connect to MongoDB
// console.log('~~~~~~~' + db + '~~~~~~~~~~~~~~')
// mongoose
//   .connect(
//     db,
//     { useNewUrlParser: true }
//   )
//   .then(() => console.log("MongoDB successfully connected"))
//   .catch(err => console.log(err));


// Connect to the Mongo DB
//  mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/powerball");

 var MONGODB_URI = process.env.MONGODB_URI ||
 
//  "mongodb://<dbuser>:<dbpassword>@ds017514.mlab.com:17514/heroku_2llrdp6v";

 "mongodb://lisamichael:joe4hire@cluster0-mqdgn.mongodb.net/test?retryWrites=true&w=majority"

mongoose.connect(MONGODB_URI);



// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
app.use("/api/users", users);
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server up and running on port ${port} !`));


// const express = require("express");

// const mongoose = require("mongoose");
// // const routes = require("./routes");
// const app = express();
// const PORT = process.env.PORT || 3001;

// // Define middleware here
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// // Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }
// // Add routes, both API and view
// // app.use(routes);

// // Connect to the Mongo DB
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/powerball");

// // Start the API server
// app.listen(PORT, function () {
//   console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
// });
