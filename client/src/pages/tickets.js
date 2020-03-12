import React from 'react';

class Tickets extends React.Component {
    constructor(props) {
      super(props);
      this.state = { isEditing: false };
    }
  
    onChange(event) {
      this.props.onChange(event.target.value);
    }
  
    toggleEditing() {
      this.setState({ isEditing: !this.state.isEditing });
    }
  
    render() {
      return (
        <div>
          <label htmlFor={this.props.name}>Enter Ticket numbers</label>
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
      );
    }
  }

  export default Tickets;