
import React from 'react';
import "./style.css";

// import the image to be used by the card
// import imgsrc from "../../assets/images/pbLogin.jpg";


// function created to define the card 
// instructions are provided in this youtube video: 
// https://www.youtube.com/watch?v=rH9jM-8hAD8

const Card1 = props => {

    return (
        <div className="card text-center shadow">
            <div className="overflow">
                <img src={props.imgsrc} alt="imagelogin" style={{ height: '175px' }} className="card-image-top" />
            </div>

            <div className="card-body text-dark">
                <h4 className="card-title">{props.title}</h4>
                <p className="card-text text-secondary"></p>
                <a href={props.link} className="btn btn-outline-success">CLICK TO LOGIN</a>
            </div>
        </div>
    );
}

export default Card1; 