import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import News from "./components/News";
import PropTypes from "prop-types";

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <News pageSize={5} country="in" category="general" />
      </div>
    );
  }
}
