import React from 'react' ;
// import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Card1 from "../components/Card1";
import imgLogin from "../assets/images/pbLogin.jpg"



function Login() {

    return(
        
<div>
  <Card1 imgsrc={imgLogin} alt="imageLogin" title="Enter Credentials"  />
  </div>
    
    )
};

export default Login; 

      
      
