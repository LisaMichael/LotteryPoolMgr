import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { Link } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Login from './pages/Login';
import Home from './pages/Home';
// import Grid from "./components/Grid";
// import Col from "./components/Col";
// import Pbcard from './components/Pbcard/Pbcard';
// import Row from "./components/Row"; 
import Wrapper from "./components/Wrapper";
import Admin from "./pages/Admin";


class App extends Component {
  // Setting this.state.petro values

  render() {

    // this section of code was obtained from week 21, exercise 4 class example
    return (
      <div>
        <Router>
          <Navbar />
          <div>
            <Wrapper>
              <Route exact path="/" component={Login} />
              <Route exact path="/Admin" component={Admin} />
              <Route exact path="/Home" component={Home} />
              {/* <Route exact path="/home" component={Home} /> */}

              <Switch>



           {/* //private route is used for authenticated users
           Please reference Youtube video : Protected routes and authentication with React Router v4
            https://tylermcginnis.com/react-router-protected-routes-authentication/ */}

                {/* <PrivateRoute exact path="/Home" component={Home} /> */}
                </Switch>
                
            </Wrapper>

          </div>
        </Router>


      </div>
    );
  }
}
export default App;
