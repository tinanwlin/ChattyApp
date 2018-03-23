import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <a href="/" className="navbar-brand">Chatty 💬</a>
        <span className="count-connectedUser">{this.props.numberOfConnectedUsers.number} user(s) online</span>
      </nav>
    )
  }
}

export default Navbar;