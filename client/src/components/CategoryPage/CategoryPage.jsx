import React, { useEffect, useContext } from "react";
import "./CategoryPage.scss";
import Category from "../Home/Category/Category";
import { fetchDataFromApi } from "../../utils/api";
import { Context } from "../../utils/context";

const CategoryPage = () => {
  const { categories, setCategories} =
    useContext(Context);
  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = () => {
    fetchDataFromApi("/api/categories?populate=*").then((res) => {
      console.log(res);
      setCategories(res);
    });
  };

  return (
    <div className="container">
      <div className="main-content">
        <div className="layout">
          <Category categories={categories} />
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
