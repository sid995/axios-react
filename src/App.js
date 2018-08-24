import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import Userform from "./components/UserForm";

// https://api.github.com/users/${name_user}

class App extends Component {
  state = {
    repos: null
  };
  getUser = e => {
    e.preventDefault();
    const user = e.target.elements.username.value;
    if (user) {
      axios.get(`https://api.github.com/users/${user}`).then(res => {
        console.log(res);
        const repos = res.data.public_repos;
        this.setState({ repos });
      });
    } else {
      return;
    }
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">HTTP Calls in React using Axios</h1>
        </header>
        <Userform getUser={this.getUser} />
        {this.state.repos ? (
          <p>Number of repos: {this.state.repos}</p>
        ) : (
          <p>Enter username</p>
        )}
      </div>
    );
  }
}

export default App;
