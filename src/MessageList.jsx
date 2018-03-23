import React, { Component } from 'react';
import Message from './Message.jsx';

class MessageList extends Component {
  render() {
    const messagesList = this.props.messages.map((message,index) => {
      return (
         <Message key={message.id} message={message} index={index} notification={this.props.notifications[index]}/>
      )
    })

    return (
      <div>
        {messagesList}
      </div>
    )
  }
}

export default MessageList;
