import React from "react";
import Hero from "../components/Hero";
// import Navbar from "../components/Navbar"

// json output of mass lottery web site: 
// https://www.masslottery.com/data/json/search/lotterygames/10-data.json?_=1583547261840

function Summary () {

    return (
        <div>

       <Hero> 
           <h1>Season Summary</h1> 
       </Hero>
       <Card></Card>
        </div>
    );
}

export default Summary;