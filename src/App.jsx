import React, { Component } from 'react';
import Navbar from './Navbar.jsx';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';


class App extends Component {
  constructor(props) {
    super(props);
    const randomId = function () {
      return Math.floor(Math.random() * 200);
    };
    this.state = {
      currentUser: { name: "Bob" },
      messages: [
        {
          id: randomId(),
          username: "Bob",
          content: "Has anyone seen my marbles?"
        },
        {
          id: randomId(),
          username: "Anonymous",
          content: "No, I think you lost them. You lost your marbles Bob. You lost them for good."
        }
      ]
    };
    this.addNewMessage = this.addNewMessage.bind(this);
    this.updateCurrentUser = this.updateCurrentUser.bind(this);
  }

  componentDidMount() {
    console.log("componentDidMount <App />");
    setTimeout(() => {
      console.log("Simulating incoming message");
      const newMessage = { id: 3, username: "Michelle", content: "Hello there!" };
      const messages = this.state.messages.concat(newMessage)
      this.setState({ messages: messages })
      console.log(this.state)
    }, 0);
  }

  addNewMessage(message) {
    const randomId = function () {
      return Math.floor(Math.random() * 200);
    };
    let oldMessages = this.state.messages;
    let newMessage = {
      id: randomId(),
      username: this.state.currentUser.name,
      content: message
    };
    let newMessages = [...oldMessages, newMessage];
    this.setState({ messages: newMessages });
  }

  updateCurrentUser(updateUser){
    this.setState({currentUser: {name: updateUser}});
  }

  render() {
    console.log('render <App/>')
    return (
      <div>
        <Navbar />
        <MessageList messages={this.state.messages} />
        <ChatBar currentUser={this.state.currentUser} addNewMessage={this.addNewMessage} updateCurrentUser={this.updateCurrentUser} />
      </div>

    )
  }
}

export default App;

