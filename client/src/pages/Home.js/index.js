import React, { Component } from 'react';
// import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Card1 from "../components/Card1";

class Home extends Component {

  render() {
    return (
      <div className="container-fluid d-flex justify-content-center">
        <div className="row">
          <div className="col-md-4"><Card1/></div>
          <div className="col-md-4"><Card1/></div>
          <div className="col-md-4"><Card1/></div>
        </div>
      </div>
    );
  }
}




//     return(
// <div>
//   <Header/>
//   <Card1/>
//   </div>

//     )

export default Home;



