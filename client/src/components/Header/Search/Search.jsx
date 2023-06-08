import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import "./Search.scss";
import { Link } from "react-router-dom";
import { useGetAllProductsQuery } from "../../../state/api";

const Search = ({ setShowSearch }) => {
  const { data } = useGetAllProductsQuery();
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleSuggestion = (e) => {
    const searchWord = e.target.value.toLowerCase();
    setQuery(searchWord);
    const filteredProducts = data?.filter(
      (item) =>
        item.title.toLowerCase().includes(searchWord) ||
        item.category.toLowerCase().includes(searchWord)
    );
    setSuggestions(searchWord === "" ? [] : filteredProducts);
  };

  const handleSearch = () => {
    const filteredData = data?.filter(
      (item) =>
        item.title.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query)
    );
    setQuery("");
    setSuggestions([]);
    setQuery(filteredData);
  };

  return (
    <div className="search-modal">
      <div className="form-field">
        <input
          autoFocus
          type="text"
          placeholder="Search for products"
          value={query}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
          onChange={handleSuggestion}
          onFocus={handleSuggestion}
        />
        <MdClose className="close-btn" onClick={() => setShowSearch(false)} />
      </div>
      <div className="search-result-content">
        <div className="start-msg">
          Start typing to see products you are looking for.
        </div>
        <div className="search-results">
          {suggestions.length !== 0 && (
            <div>
              {suggestions.map((item, index) => (
                <div key={index} className="search-result-item">
                  <Link
                    to={`/product/${item._id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <div className="image-container">
                      <img src={item?.photo} alt="" />
                    </div>
                    <div className="prod-details">
                      <span className="name">{item?.title}</span>
                      <span className="desc">{item?.desc}</span>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
