import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { Link } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Login from './pages/Login';
// import LoginForm from './pages/LoginForm';
import Tickets from './pages/Tickets';
import Home from './pages/Home';
import Members from './pages/Members';
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
          <Header/>
          <div>
            <Wrapper>
              <Route exact path="/" component={Login} />
              <Route exact path="/Admin" component={Admin} />
              <Route exact path="/Home" component={Home} />
              <Route exact path="/Members" component={Members} />
              <Route exact path="/Tickets" component={Tickets} />

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
