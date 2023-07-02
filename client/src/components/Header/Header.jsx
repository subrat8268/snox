import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TbSearch } from "react-icons/tb";
import "./Header.scss";
import Search from "./Search/Search";
import { useLocation } from "react-router-dom";
import Logo from '../../assets/snoxlogo.png';
// import { useGetAllProductsQuery } from "../../state/api";

const Header = () => {
  const location = useLocation();
  useEffect(() => {
    setShowSearch(false);
  }, [location]);

  const [scrolled, setScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const navigate = useNavigate();
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  // const { data } = useGetAllProductsQuery();
  // const [category, setCategory] = useState("fittings");

  // const handleChange = (event) => {
  //   setCategory(event.target.value);
  // };
  // console.log(category);

  return (
    <>
      <header className={`main-header ${scrolled ? "sticky-header" : ""}`} style={{position:"fixed"}} >
        <div className="header-content">
          <ul className="left">
            <li onClick={() => navigate("/")}>Home</li>
            <li
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({
                  top: document.querySelector("#category").offsetTop,
                  behavior: "smooth",
                });
              }}
            >
              Categories
            </li>
            <li
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({
                  top: document.querySelector("#aboutus").offsetTop,
                  behavior: "smooth",
                });
              }}
            >
              About Us
            </li>
          </ul>

          <div className="center" onClick={() => navigate("/")}>
            <img src={Logo} alt="Logo" />
          </div>
          <div className="right">
            <button className="button-74" onClick={() => setShowSearch(true)}>
              <span>Search Product</span>
              <TbSearch />
            </button>
          </div>
        </div>
      </header>
      {showSearch && <Search setShowSearch={setShowSearch} />}
    </>
  );
};

export default Header;
