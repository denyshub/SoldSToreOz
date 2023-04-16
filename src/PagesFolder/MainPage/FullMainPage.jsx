import React, {useEffect} from "react";

import PeopleImgs from "./Components/PeopleImgs";
import AboutUs from "./Components/newCollections";


const FullMainPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <PeopleImgs />
      <AboutUs />
    </>
  );
};

export default FullMainPage;
