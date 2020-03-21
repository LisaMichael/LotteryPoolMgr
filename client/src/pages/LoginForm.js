import React, { Component } from 'react'; 
import Signin from '../components/Signin/Signin';


// I want to use the material UI sign in form: 
//https://github.com/mui-org/material-ui/tree/master/docs/src/pages/getting-started/templates/sign-in

class LoginForm extends Component {

    state = {
        name: "",
        password : "" 
    };
    
    componentDidMount() {
        this.loadMembers();
    }

    loadMembers = () => {
        API.getMember()
            .then(res =>
                this.setState({ Member: res.data, name: "", email: "", password: "" })
            )
            .catch(err => console.log(err));
    };


    render() {
        return (
        <Signin/>
        )

    }

}