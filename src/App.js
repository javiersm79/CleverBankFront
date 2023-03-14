import React, { Component } from "react";
import logo from "./assets/logo.png";
import "./App.css";
import Login from "./components/Login/Login";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AccountDetails from "./components/AccountDetails/AccountDetails";

class App extends Component {
  /*save = () => {
      console.log("SAVE BUTTON")
  };*/

  render() {
    return (
        <div className="App">
          <img src={logo} className="logo" alt="Business view - Reports" />
            {/*<Login />
            <button className="primary" onClick={this.save}>Save</button>*/}
            <Router>
                <Routes>
                    <Route exact path="/" element={<AccountDetails />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </Router>

        </div>
    );
  }
}

export default App;
