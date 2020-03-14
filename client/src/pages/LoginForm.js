import React, { Component } from 'react'; 
import Signin from '../components/Signin';

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