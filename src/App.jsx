import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super(); // calls the underlying constructor method of any other classes you are extending from.

    this.state = {
      // JSON object (data in Vue)
      monsters: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            console.log(this.state);
          }
        )
      );
  }

  filterMonsters = (event) => {
    const filteredMonsters = this.state.monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(event.target.value);
    });
    this.setState(() => ({ monsters: filteredMonsters }));
  };

  render() {
    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="search monsters"
          onChange={(event) => this.filterMonsters(event)}
        />
        {this.state.monsters.map((monster) => {
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
