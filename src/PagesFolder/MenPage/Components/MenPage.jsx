import React, {useEffect} from "react";
import Header from "../../../Header/Header.jsx";
import Products from "./Products/Products.jsx";
import { BrowserRouter, Route, Routes, Router, Outlet } from "react-router-dom";
const MenPage = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header
        FirstPage="home"
        FirstPath="men"
        SecondPage="women"
        ThirdPage="kids"
      />

      <Outlet />
    </>
  );
};

export default MenPage;
