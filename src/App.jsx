import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super(); // calls the underlying constructor method of any other classes you are extending from.

    this.state = {
      // JSON object (data in Vue)
      mosnters: [
        { name: "Frankenstein" },
        { name: "Dracula" },
        { name: "Zombie" },
      ],
    };
  }
  render() {
    return (
      <div className="App">
        {this.state.mosnters.map((monster) => {
          return <h1 key={monster.name}>{monster.name}</h1>;
        })}
      </div>
    );
  }
}

export default App;
