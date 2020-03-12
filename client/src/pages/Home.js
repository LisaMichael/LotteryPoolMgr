import React, { Component } from 'react';
// import Navbar from '../components/Navbar';

import Card1 from "../components/Card1";
import img2 from "../assets/images/pbMembers.jpg";
import img3 from "../assets/images/pbSummary.jpg";
import img4 from "../assets/images/pbTickets.jpg";
import img5 from "../assets/images/pbLottoFun.jpg";


class Home extends Component {

  render() {
    return (

      <div className="container-fluid d-flex justify-content-center">
        <div className='row'>
          <div className="col-md-3"><Card1 imgsrc={img2} alt="imageMembers" title="View Memberlist" /></div>
          <div className="col-md-3"><Card1 imgsrc={img3} title="Season Summary" /></div>
          <div className="col-md-3"><Card1 imgsrc={img4} title="Ticket list" /></div>
          <div className="col-md-3"><Card1 imgsrc={img5} title="Fun Stuff" /></div>
        </div>
      </div>
    );
  }
}

export default Home;



