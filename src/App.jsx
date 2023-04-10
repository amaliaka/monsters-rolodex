import { Component } from "react";

import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super(); // calls the underlying constructor method of any other classes you are extending from.

    this.state = {
      // JSON object (data in Vue)
      name: "Amal",
      company: "Google",
      bool: true,
    };

    // React will rerender when one state is compeletely changed to different object in memory (splice in Vue)
  }
  changeName = () => {
    let changed = this.state.bool ? { name: "Amalia" } : { name: "Amal" };
    changed = { ...changed, bool: !this.state.bool };
    this.setState(
      () => {
        return changed;
      },
      () => console.log(this.state)
    );
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hi {this.state.name}, I work at {this.state.company}
          </p>
          <br />
          <button onClick={this.changeName}>Change Name</button>
        </header>
      </div>
    );
  }
}

export default App;
