import React, { Component } from 'react';

class Button extends Component {
  render() {
    return (
      <div className="Button">
          {this.props.text}
      </div>
    );
  }
}

export default Button;
