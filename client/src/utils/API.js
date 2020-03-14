import axios from "axios";
import path from "path";


// this is the json for the MA State lottery website: 
// POWERBALL API - JSON Search results : 
// https://www.masslottery.com/data/json/search/lotterygames/10-data.json?_=1583547261840

// https://games.api.lottery.com/api/v2.0/results?game=59bc2b6031947b9daf338d32


export default {
  getPbNum: function () {
    return axios.get("https://data.ny.gov/resource/d6yy-54nr.json");
  },


  //attempting to get heroku to work: 
  getMember: function () {
  axios.get("/", function(req, res) {
    res.json(path.join(__dirname, "../../public/index.html"));
  });
},
  // User-member CRUD 

  getMember: function () {
    return axios.get("/api/user");
  },
  // Gets the member with the given id
  getMember: function (id) {
    return axios.get("/api/user/" + id);
  },
  // Deletes the member with the given id
  deleteMember: function (id) {
    return axios.delete("/api/user/" + id);
  },
  // Saves a member to the database
  saveMember: function (userData) {
    return axios.post("/api/user", userData);
  }
};



