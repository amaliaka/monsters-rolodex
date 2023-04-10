import { Component } from "react";

class SearchBox extends Component {
  render() {
    const { className, placeholder, handleChange } = this.props;
    return (
      <input
        className={className}
        type="search"
        placeholder={placeholder}
        onChange={handleChange}
      />
    );
  }
}

export default SearchBox;
