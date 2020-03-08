import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { Link } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Home from './pages/Home';
import Loginbutton from './pages/Loginbutton';
// import Grid from "./components/Grid";
// import Col from "./components/Col";
// import Pbcard from './components/Pbcard/Pbcard';
// import Row from "./components/Row"; 
// import Loginbutton from "./pages/Loginbutton";
import Wrapper from "./components/Wrapper";
import Admin from "./pages/Admin";


class App extends Component {
  // Setting this.state.petro values
  
  render() {

    // this section of code was obtained from week 21, exercise 4 class example
    return (
      <div>
        <Router>
        <Navbar/>
      <div>
        <Wrapper>
          <Route exact path="/" component={Home} />
          <Route exact path="/Admin" component={Admin} />
          <Route exact path="/home" component={Home} />

          {/* <Switch>

           // private route is used for authenticated users
                <PrivateRoute exact path="/Loginbutton" component={Loginbutton} />
                </Switch> */}
        </Wrapper>
       
      </div>
    </Router>
       

      </div>
    );
  }
}
export default App;
