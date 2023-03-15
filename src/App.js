import React, { Component } from "react";
import logo from "./assets/logo.png";
import "./App.css";
import Login from "./components/Login/Login";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AccountDetails from "./components/AccountDetails/AccountDetails";
import NavBar from "./components/Common/NavBar/NavBar";

class App extends Component {
  /*save = () => {
      console.log("SAVE BUTTON")
  };*/

  render() {
    return (
        <div className="App">
          <img src={logo} className="logo" alt="CleverBank - App" />
            <NavBar />
            <Router>
                <Routes>
                    <Route exact path="/accountDetails" element={<AccountDetails />} />
                    <Route path="/" element={<Login />} />
                </Routes>
            </Router>

        </div>
    );
  }
}

export default App;
