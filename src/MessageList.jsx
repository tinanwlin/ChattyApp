import React, { Component } from 'react';
import Message from './Message.jsx';

class MessageList extends Component {
  render() {
    console.log('render <MsgLiat/>')
    const messagesList = this.props.messages.map((message) => {
      return (
         <Message key={message.id} message={message}/>
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
