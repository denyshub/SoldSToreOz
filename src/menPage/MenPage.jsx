import React from "react";
import FilterSort from "./FilterSort/FilterSort.jsx";
import Header from "../mainPage/Header/Header";
import Products from "./Products";
const MenPage = (props) => {
  return (
    <>
      <Header Page="HOME" Link="" />
      <FilterSort />
      <Products productData = {props.productData}/>
    </>
  );
};

export default MenPage;
