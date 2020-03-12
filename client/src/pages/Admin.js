import React, { Component } from "react";
import Hero from "../components/Hero";
// import Navbar from "../components/Navbar"
// import Row from "../components/Row";
// import Col from "../components/Col";
// import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
// import { Input, TextArea, FormBtn } from "../components/Form";
import { Input, FormBtn } from "../components/Form";
// import List from "../components/List";
import { Col, Row, Container } from "../components/Grid";
// import { Link } from "react-router-dom";


class Admin extends Component {

    // setting state for users 
    state = {
        users: [],
        fullname: "",
        location: "",
        expiration: "",
        password: ""
    };

    componentDidMount() {
        this.loadMembers();
    }

    loadMembers = () => {
        API.getMember()
            .then(res =>
                this.setState({ Member: res.data, fullname: "", location: "", expiration: "", password: "" })
            )
            .catch(err => console.log(err));
    };

    deleteMember = id => {
        API.deleteMember(id)
            .then(res => this.loadMember())
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.fullname && this.state.location) {
            API.saveMember({
                fullname: this.state.fullname,
                location: this.state.location,
                expiration: this.state.expiration,
                password: this.state.password
            })
                .then(res => this.loadMembers())
                .catch(err => console.log(err));
        }
    };

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-6">
                        <Hero>
                            <h1>Add Member</h1>
                        </Hero>
                        <form>
                            <Input
                                value={this.state.fullname}
                                onChange={this.handleInputChange}
                                name="fullname"
                                placeholder="FullName (required)"
                            />
                            <Input
                                value={this.state.location}
                                onChange={this.handleInputChange}
                                name="location"
                                placeholder="Location (required)"
                            />

                            {/* input field for expiration date  */}
                            {/* <Input
                                value={this.state.expiration}
                                onChange={this.handleInputChange}
                                name="expiration"
                                placeholder="Expiration Date"
                            /> */}
                            <Input
                                value={this.state.password}
                                onChange={this.handleInputChange}
                                name="password"
                                placeholder="Set User Password"
                            />
                            <FormBtn
                                disabled={!(this.state.location && this.state.fullname)}
                                onClick={this.handleFormSubmit}
                            >
                                Add Member
                </FormBtn>
                        </form>
                    </Col>
                    <Col size="md-6 sm-12">
                        <Hero>
                            <h1>Member List</h1>
                        </Hero>
                        {/* {this.state.user.length ? (
                            <List>
                                {this.state.user.map(users => (
                                    <ListItem key={user._id}>
                                        <Link to={"/member/" + user._id}>
                                            <strong>
                                                {user.fullname} by {user.location}
                                            </strong>
                                        </Link>
                                        <DeleteBtn onClick={() => this.deleteMember(user._id)} />
                                    </ListItem>
                                ))}
                            </List>
                        ) : (
                                <h3>No Results to Display</h3>
                            )} */}
                        <h3> test display</h3>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Admin; 