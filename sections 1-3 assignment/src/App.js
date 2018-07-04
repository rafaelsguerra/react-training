import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state ={
      usernames: [
          {username: 'crazyman123'},
      ]
  };

  nameChangeHandler = (event) => {
      this.setState({
          usernames: [
              {username: event.target.value},
          ]
      });
  }

  render() {
    return (
      <div className="App">
          <h1>This is the first assignment</h1>
          <UserInput username={this.state.usernames[0].username} changed={this.nameChangeHandler}/>
          <UserOutput username={this.state.usernames[0].username}/>
          <UserOutput username={this.state.usernames[0].username}/>
          <UserOutput username={this.state.usernames[0].username}/>
      </div>
    );
  }
}

export default App;
