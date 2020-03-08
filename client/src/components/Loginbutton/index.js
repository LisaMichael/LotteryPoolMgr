import React from "./node_modules/react";


class Loginbutton extends Component { 
    constructor (props) {
    super(props) 
    this.loginWasClicked=this.loginWasClicked.bind(this) 
    } 
    loginWasClicked(event) { 
    event.preventDefault() 
    }
    render () { 
    const {image} = this.props
    return ( 
    <div>
        </div>
    )
    }}


// function Loginbutton() {
//     <input type="image" src="./public/images/pbLogin.jpg" alt="Submit" width="48" height="48"></input>
// }

export default Loginbutton;