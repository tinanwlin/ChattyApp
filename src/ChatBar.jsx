import React, { Component } from 'react';

class ChatBar extends Component {

  handleKeyPress(event) {
    if (event.key === "Enter") {
      this.props.addNewMessage(event.target.value);
      event.target.value = "";
    }
    return;
  }

  handleOnChange(event) {
    this.props.updateCurrentUser(event.target.value);
  }

  render() {
    return (
      <footer className="chatbar">
        <input className="chatbar-username" placeholder="Your Name (Optional)" defaultValue={this.props.currentUser.name} onChange={this.handleOnChange.bind(this)}/>
        <input className="chatbar-message" placeholder="Type a message and hit ENTER" onKeyPress={this.handleKeyPress.bind(this)} />
      </footer>
    )
  }
}

export default ChatBar;

