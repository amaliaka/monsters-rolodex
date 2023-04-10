import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super(); // calls the underlying constructor method of any other classes you are extending from.

    this.state = {
      // JSON object (data in Vue)
      mosnters: [
        { name: "Frankenstein", id: "asc1" },
        { name: "Dracula", id: "asc2" },
        { name: "Zombie", id: "asc3" },
      ],
    };
  }
  render() {
    return (
      <div className="App">
        {this.state.mosnters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
