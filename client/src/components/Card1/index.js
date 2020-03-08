
import React from 'react';
import imglogin from "../../assets/images/pbLogin.jpg";

const Card = props => {

    return (
        <div className="card text-center">
            <div className="overflow">
                <img src={imglogin} alter="imagelogin" />
            </div>

            <div className="card-body text-dark">
                <h4 className="card-title">CARD TITLE</h4>
                <p className="card-text text-secondary">lorium ipsum dolor sit amet consecuetur</p>
                <a href="#" className ="btn btn-outline-success">Go Anywhere</a>
            </div>
            </div>
            );
          }
          
export default Card; 