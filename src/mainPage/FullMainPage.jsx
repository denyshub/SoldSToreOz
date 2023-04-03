import React from "react";

import Header from "./Header/Header";
import PeopleImgs from "./Content/PeopleImgs";
import AboutUs from "./Content/AboutUs";
import Footer from "./Footer/Footer";

const FullMainPage = () => {
  return (
    <>
      <Header Page="MEN" Link="men" />
      <PeopleImgs />
      <AboutUs />
   
  
    </>
  );
};

export default FullMainPage;
