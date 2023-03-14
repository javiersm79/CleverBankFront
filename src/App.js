import React, { Component } from "react";
import logo from "./assets/logo.png";
import "./App.css";
import Login from "./components/login/login";

class App extends Component {
  handleSubmit = e => {
    e.preventDefault();
    console.log(e.target.email.value);

    if (!e.target.email.value) {
      alert("Email is required");
    } else if (!e.target.email.value) {
      alert("Valid email is required");
    } else if (!e.target.password.value) {
      alert("Password is required");
    } else if (
        e.target.email.value === "email@example.com" &&
        e.target.password.value === "123456"
    ) {
      alert("Successfully logged in");
      e.target.email.value = "";
      e.target.password.value = "";
    } else {
      //setVisible(!isVisible)
      alert("Wrong email or password combination");
    }
  };

  handleClick = e => {
    e.preventDefault();

    alert("Goes to registration page");
  };

  render() {
    return (
        <div className="App">
          <img src={logo} className="logo" alt="Business view - Reports" />
          <form className="form" onSubmit={this.handleSubmit}>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" placeholder="your@email.com" />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" />
            </div>
            <button className="primary">ENTRAR</button>
          </form>
          <Login/>

        </div>
    );
  }
}

export default App;
