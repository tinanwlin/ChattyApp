import React, { Component } from 'react';
import Navbar from './Navbar.jsx';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';


class App extends Component {
  constructor(props) {
    super(props);
    this.socket = "";
    this.state = {
      currentUser: { name: "" },
      messages: [],
      usernameHistory: [""],
      notifications: [],
      connectedUser: {
        type: "numberOfConnectedUser",
        number: 0
      },
    };
    this.addNewMessage = this.addNewMessage.bind(this);
    this.updateCurrentUser = this.updateCurrentUser.bind(this);
  }

  componentDidMount() {
    this.socket = new WebSocket("ws://localhost:3001");
    this.socket.onmessage = (event) => {
      const eventObj = JSON.parse(event.data);
      console.log("receive incoMsg from server", eventObj)
      console.log("noti", this.state.notifications)
      let newMessages = this.state.messages.concat(eventObj);
      let newNotifications = this.state.notifications.concat(eventObj);
      let newCountConnectedUsers = eventObj;
      switch (eventObj.type) {
        case "incomingMessage":
          this.setState({ messages: newMessages });
          break;
        case "incomingNotification":
          this.setState({ notifications: newNotifications });
          break;
        case "numberOfConnectedUser":
          this.setState({ connectedUser: newCountConnectedUsers });
          break;
        default:
          throw new Error("Unknown event type " + event.data.type);
      }
    };
  }

  addNewMessage(message) {
    let newMessage = {
      type: "postMessage",
      username: this.state.currentUser.name || "Anonymous",
      content: message
    };
    const addUsernameHistory = this.state.usernameHistory;
    addUsernameHistory.push(this.state.currentUser.name);
    const previousUsername = this.state.usernameHistory[this.state.usernameHistory.length - 2]
    let notiContent = "";
    if (this.state.currentUser.name !== previousUsername) {
      notiContent = (previousUsername || "Anonymous") + " has changed their name to " + (this.state.currentUser.name || "Anonymous");
    }
    let newNotification = {
      type: "postNotification",
      content: notiContent
    };
    this.socket.send(JSON.stringify(newNotification));
    this.socket.send(JSON.stringify(newMessage));
  }

  updateCurrentUser(updateUser) {
    this.setState({ currentUser: { name: updateUser } });
  }



  render() {
    return (
      <div>
        <Navbar numberOfConnectedUsers={this.state.connectedUser} />
        <MessageList messages={this.state.messages} notifications={this.state.notifications} />
        <ChatBar socket={this.socket} currentUser={this.state.currentUser} addNewMessage={this.addNewMessage} updateCurrentUser={this.updateCurrentUser} />
      </div>
    )
  }
}

export default App;

