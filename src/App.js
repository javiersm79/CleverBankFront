import React, { Component } from "react";
import logo from "./assets/logo.png";
import "./App.css";
import Login from "./components/login/login";

class App extends Component {
  save = () => {
      console.log("SAVE BUTTON")
  };

  render() {
    return (
        <div className="App">
          <img src={logo} className="logo" alt="Business view - Reports" />
            <Login />
            <button className="primary" onClick={this.save}>Save</button>

        </div>
    );
  }
}

export default App;
