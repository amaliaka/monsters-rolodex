import { Component } from "react";
import "./card-list.syles.css";
import "./card.styles.css";

class CardList extends Component {
  render() {
    return (
      <div className="card-list">
        {this.props.monsters.map((monster) => {
          const { name, email, id } = monster;
          return (
            <div key={id} className="card-container">
              <img
                alt={`monster ${name}`}
                src={`https://robohash.org/$id}?set=set2&size=180x180`}
              />
              <div className="card-text">
                <h2>{name}</h2>
                <p>{email}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default CardList;
