import React from 'react';
// import Form from '../components/Form';

// this class allows the admin to enter the season ticket number

class Tickets extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isEditing: false };
  }

  // ON CHANGE  lifcycle 
  onChange(event) {
    this.props.onChange(event.target.value);
  }

  toggleEditing() {
    this.setState({ isEditing: !this.state.isEditing });
  }

  // render input fields to enter lottery numbers
  render() {
    return (

    //   <div className="container-fluid d-flex justify-content-center">
    //  <h2>Enter Ticket Number: </h2>
    //   </div>
 
    

      <div className="container-fluid d-flex justify-content-center">
<h2>Enter Ticket Number: </h2>
{/* <Form> */}
        <div className='row'>
          <div className="col-md-1">
            <div>
              <label htmlFor={this.props.name}>BALL 1</label>
              {this.state.isEditing ? (
                <input
                  type="number"
                  name={this.props.name}
                  value={this.props.value}
                  onChange={this.onChange.bind(this)}
                  onBlur={this.toggleEditing.bind(this)}
                />
              ) : (
                  <input
                    type="text"
                    name={this.props.name}
                    value={this.props.value}
                    onFocus={this.toggleEditing.bind(this)}
                    readOnly
                  />
                )}
            </div>
          </div>
          <div className="col-md-1">
            <div>
              <label htmlFor={this.props.name}>BALL2</label>
              {this.state.isEditing ? (
                <input
                  type="number"
                  name={this.props.name}
                  value={this.props.value}
                  onChange={this.onChange.bind(this)}
                  onBlur={this.toggleEditing.bind(this)}
                />
              ) : (
                  <input
                    type="text"
                    name={this.props.name}
                    value={this.props.value}
                    onFocus={this.toggleEditing.bind(this)}
                    readOnly
                  />
                )}
            </div>
          </div>
          <div className="col-md-1">
            <div>
              <label htmlFor={this.props.name}>BALL 3</label>
              {this.state.isEditing ? (
                <input
                  type="number"
                  name={this.props.name}
                  value={this.props.value}
                  onChange={this.onChange.bind(this)}
                  onBlur={this.toggleEditing.bind(this)}
                />
              ) : (
                  <input
                    type="text"
                    name={this.props.name}
                    value={this.props.value}
                    onFocus={this.toggleEditing.bind(this)}
                    readOnly
                  />
                )}
            </div>
          </div>
          <div className="col-md-1">
            <div>
              <label htmlFor={this.props.name}>BALL 4</label>
              {this.state.isEditing ? (
                <input
                  type="number"
                  name={this.props.name}
                  value={this.props.value}
                  onChange={this.onChange.bind(this)}
                  onBlur={this.toggleEditing.bind(this)}
                />
              ) : (
                  <input
                    type="text"
                    name={this.props.name}
                    value={this.props.value}
                    onFocus={this.toggleEditing.bind(this)}
                    readOnly
                  />
                )}
            </div>
          </div>
          <div className="col-md-1">
            <div>
              <label htmlFor={this.props.name}>BALL 5 </label>
              {this.state.isEditing ? (
                <input
                  type="number"
                  name={this.props.name}
                  value={this.props.value}
                  onChange={this.onChange.bind(this)}
                  onBlur={this.toggleEditing.bind(this)}
                />
              ) : (
                  <input
                    type="text"
                    name={this.props.name}
                    value={this.props.value}
                    onFocus={this.toggleEditing.bind(this)}
                    readOnly
                  />
                )}
            </div>
          </div>
          <div className="col-md-1">
            <div>
              <label htmlFor={this.props.name}>POWERBALL</label>
              {this.state.isEditing ? (
                <input
                  type="number"
                  name={this.props.name}
                  value={this.props.value}
                  onChange={this.onChange.bind(this)}
                  onBlur={this.toggleEditing.bind(this)}
                />
              ) : (
                  <input
                    type="text"
                    name={this.props.name}
                    value={this.props.value}
                    onFocus={this.toggleEditing.bind(this)}
                    readOnly
                  />
                )}
            </div>
          </div>

        </div>
        {/* </Form> */}
      </div>
     
    );
  }
}

export default Tickets;