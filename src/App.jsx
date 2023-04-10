import { useState, useEffect } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

const App = () => {
  console.log("render called");
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [stringField, setStringField] = useState("");
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };

  // this function is not related to the filter function
  const onStringChange = (event) => {
    const stringFieldString = event.target.value;
    setStringField(stringFieldString);
  };

  // prevent infinite loop
  useEffect(() => {
    console.log("effect called");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  // prevent function from being called on every render
  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      console.log("filter called");
      return monster.name.toLowerCase().includes(searchField);
    });
    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox
        className="search-box"
        placeholder="search monsters"
        handleChange={onSearchChange}
      />
      {/*<SearchBox
        className="search-box"
        placeholder="test search box"
        handleChange={onStringChange}
  />*/}
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
