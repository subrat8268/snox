import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import "./Search.scss";
import { Link } from "react-router-dom";
import { useGetAllProductsQuery } from "../../../state/api";

const Search = ({ setShowSearch }) => {
  const [ setQuery] = useState([]);
  const [wordType, setWordType] = useState("");
  // const [suggestedResult, setSuggestedResult] = useState();
  const [suggestion, setSuggestion] = useState([]);
  // const searchResult = useRef(null);

  // const navigate = useNavigate();

  // const onChange = (e) => {
  //   setQuery(e.target.value);
  // };

  const { data } = useGetAllProductsQuery();

  const handleSuggestion = async (e) => {
    const searchWord = e.target.value.toLowerCase();
    setWordType(searchWord);
    const filteredProduct = data.filter(
      (item) =>
        item.title.includes(searchWord) || item.category.includes(searchWord)
    );
    searchWord === "" ? setSuggestion([]) : setSuggestion(filteredProduct);
  };

  const handleSearch = async (e) => {
    const filteredData = data.filter(
      (item) =>
        item.title.includes(wordType) || item.category.includes(wordType)
    );
    setQuery(filteredData);
    setWordType("");
    setSuggestion([]);
  };

  // const handleSuggestedSearch = async (product) => {
  //   setQuery([]);
  //   setSuggestedResult(product);
  //   setSuggestion([]);
  // };

  return (
    <div className="search-modal">
      <div className="form-field">
        <input
          autoFocus
          type="text"
          placeholder="Search for products"
          value={wordType}
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
          {suggestion !== 0 && (
            <div>
              {suggestion.map((item, index) => {
                return (
                  <Link to={`/product/${item._id}`} style={{ textDecoration: 'none' }}>
                    <div
                      key={index}
                      className="search-result-item"
                      // onClick={(e) => {
                      // handleSuggestedSearch(item);
                      // }}
                    >
                      <div className="image-container">
                        <img src={item.photo} alt=""/>
                      </div>
                      <div className="prod-details">
                        <span className="name">{item.title}</span>
                        <span className="desc">{item.desc}</span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
        {/* <div className="search-results" ref={searchResult}>
          {query !== 0 &&
            query.splice(0, 23).map((item, index) => {
              return <div key={index}>{item}</div>;
            })}
          {!suggestedResult ? null : <div>{JSON.stringify(suggestedResult)}</div>}
        </div> */}
      </div>
    </div>
  );
};

export default Search;
