import React from "react";
import FilterSort from "./FilterSort/FilterSort.jsx";
import Header from "../../../Header/Header.jsx";
import Products from "./Products/Products.jsx";
import { BrowserRouter, Route, Routes, Router, Outlet } from "react-router-dom";
const MenPage = (props) => {
  return (
    <>
     <Header
              FirstPage="home"
              FirstPath="men"
              SecondPage="women"
              ThirdPage="kids"
            />
      <FilterSort />
<Outlet/>
    </>
  );
};

export default MenPage;
