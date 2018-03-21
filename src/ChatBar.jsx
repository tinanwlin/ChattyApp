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
    console.log('render <chatBar/>')
    // const submitNewMessage = evt => {
    //   evt.preventDefault();
    //   const newMessage = evt.target.elements.new;
    //   const user = evt.target.elements.user;
    //   let message = {
    //     id: Math.floor(Math.random() * 200),
    //     username: (user.value || "Anonymous"),
    //     content: newMessage.value
    //   };
    //   this.props.addNewMessage(message);
    //   newMessage.value = "";
    // }
    return (
      <footer className="chatbar">
        {/*<form onSubmit={submitNewMessage}>*/}
        <input className="chatbar-username" placeholder="Your Name (Optional)" defaultValue={this.props.currentUser.name} onChange={this.handleOnChange.bind(this)}/>
        <input className="chatbar-message" placeholder="Type a message and hit ENTER" onKeyPress={this.handleKeyPress.bind(this)} />
        {/*<button type='submit'></button>*/}
        {/*</form>*/}
      </footer>
    )
  }
}

export default ChatBar;

