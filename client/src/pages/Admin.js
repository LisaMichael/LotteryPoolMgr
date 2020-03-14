import React, { Component } from "react";
import Hero from "../components/Hero";
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
        name: "",
        email: "",
        password: ""
    };

    componentDidMount() {
        this.loadMembers();
    }

    loadMembers = () => {
        API.getMember()
            .then(res =>
                this.setState({ User: res.data, name: "", email: "", password: "" })
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
        if (this.state.name && this.state.email) {
            API.saveMember({
                name: this.state.name,
                email: this.state.email,
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
                                value={this.state.name}
                                onChange={this.handleInputChange}
                                name="name"
                                placeholder="FullName (required)"
                            />
                            <Input
                                value={this.state.email}
                                onChange={this.handleInputChange}
                                name="email"
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
                                disabled={!(this.state.email && this.state.name)}
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
                                                {user.name} by {user.email}
                                            </strong>
                                        </Link>
                                        <DeleteBtn onClick={() => this.deleteMember(user._id)} />
                                    </ListItem>
                                ))}
                            </List>
                        ) : (
                                <h3>No Results to Display</h3>
                            )} */}
                        <h3> User display</h3>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Admin; 