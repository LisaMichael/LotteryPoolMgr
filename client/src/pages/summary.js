import React from "react";
import Hero from "../components/Hero";
// import Navbar from "../components/Navbar"

// json output of mass lottery web site: 
// https://www.masslottery.com/data/json/search/lotterygames/10-data.json?_=1583547261840


// table should be similar to facebook page: 
// https://www.facebook.com/photo.php?fbid=10162814831040524&set=gm.3303976973010352&type=3&theater&ifg=1


function Summary () {

    return (
        <div>

       <Hero> 
           <h1>Season Summary</h1> 
       </Hero>
       {/* table for season summary needs to go here  */}
        </div>
    );
}

export default Summary;