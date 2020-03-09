
import React from 'react';
import "../Card1/style.css";

// import the image to be used by the card
import imglogin from "../../assets/images/pbLogin.jpg";


// function created to define the card 
// instructions are provided in this youtube video: 
// https://www.youtube.com/watch?v=rH9jM-8hAD8

const Card1 = props => {

    return (
        <div className="card text-center">
            <div className="overflow">
                <img src={imglogin} alter="imagelogin" style={{height: '100px'}} />
            </div>

            <div className="card-body text-dark">
                <h4 className="card-title">YOU MUST BE A MEMBER TO ACCESS</h4>
                <p className="card-text text-secondary"></p>
                <a href="LoginForm" className="btn btn-outline-success">CLICK TO LOGIN</a>
            </div>
        </div>
    );
}

export default Card1; 