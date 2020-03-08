import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  getPbNum: function () {
    return axios.get("https://data.ny.gov/resource/d6yy-54nr.json");
  },


  // User-member CRUD 

  getMember: function () {
    return axios.get("/api/member");
  },
  // Gets the member with the given id
  getMember: function (id) {
    return axios.get("/api/member/" + id);
  },
  // Deletes the member with the given id
  deleteMember: function (id) {
    return axios.delete("/api/member/" + id);
  },
  // Saves a member to the database
  saveMember: function (userData) {
    return axios.post("/api/member", userData);
  }
};



// POWERBALL API - JSON Search results : 
// https://www.masslottery.com/data/json/search/lotterygames/10-data.json?_=1583547261840

// https://games.api.lottery.com/api/v2.0/results?game=59bc2b6031947b9daf338d32
