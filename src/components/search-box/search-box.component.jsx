import "./search-box.styles.css";

const SearchBox = ({ className, placeholder, handleChange }) => {
  return (
    <input
      className={className}
      type="search"
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};

export default SearchBox;
