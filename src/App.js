import React from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  Switch,
  withRouter,
} from "react-router-dom";
import "./mainPage/Header/Header";
import "./ProductPage/productPage.css";
import "./menPage/FilterSort/FilterSort.css";
import FullMainPage from "./mainPage/FullMainPage";
import MenPage from "./menPage/MenPage";
import ProductPage1 from "./ProductPage/productPage";
import ProfilePage from "./Profile/Profile";
import Footer from "./mainPage/Footer/Footer";
import  Cart  from "../src/cart/cart";
import { ShopContextProvider } from "./context/shop-context";

function App(props) {
  return (
    <BrowserRouter>
          <ShopContextProvider>
      <Route exact path="/" component={FullMainPage} />
      <Route path="/men" render={() => <MenPage productData = {props.productData}/>} />
      <Route exact path="/1" component={ProductPage1} />
      <Route path="/cart" component={Cart} />
      <Route exact path="/profile" component={ProfilePage} />
      <Footer />
            
      </ShopContextProvider>
    </BrowserRouter>
  );
}

export default App;
