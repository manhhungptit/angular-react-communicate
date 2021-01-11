import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

class App extends Component {
  sendMessage = () => {
    window.top.postMessage(JSON.stringify({
      type: "message",
      content: "Hello from React"
    }), '*')
  }

  render() {
    return (
      <div className="App">
        <h5>Here come the React Component</h5>
        <button onClick={this.sendMessage}>Send message</button>
      </div>
    );
  }
}

export default App;
