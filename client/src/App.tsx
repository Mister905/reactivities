import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

class App extends Component {
  state = {
    values: []
  };

  componentDidMount = async () => {
    const response = await axios.get("http://localhost:5000/api/values");

    this.setState({
      values: [
        { id: 1, name: "Value 101" },
        { id: 2, name: "Value 102" }
      ]
    });
  };

  render() {
    return (
      <div>
        <div className="row">
          <div className="col s12 m6">
            <div className="card blue-grey darken-1">
              <div className="card-content white-text">
                <span className="card-title">Card Title</span>
                <p>
                  I am a very simple card. I am good at containing small bits of
                  information. I am convenient because I require little markup
                  to use effectively.
                </p>
              </div>
              <div className="card-action">
                <a href="#">This is a link</a>
                <a href="#">This is a link</a>
              </div>
            </div>
          </div>
        </div>
        <h4>
          <i className="material-icons">add</i>Users
        </h4>
        <ul className="collection">
          {this.state.values.map((value: any) => {
            return (
              <li className="collection-item" key={value.id}>
                {value.name}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
