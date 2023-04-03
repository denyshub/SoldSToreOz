import React from "react";

import Header from "../../Header/Header";
import PeopleImgs from "./Components/PeopleImgs";
import AboutUs from "./Components/AboutUs";


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
