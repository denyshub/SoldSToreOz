import React from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  Switch,
  withRouter,
} from "react-router-dom";
import "./Header/Header";
import "./PagesFolder/ProductPage/productPage.css";
import "./PagesFolder/MenPage/Components/FilterSort/FilterSort.css";
import FullMainPage from "./PagesFolder/MainPage/FullMainPage";
import MenPage from "./PagesFolder/MenPage/Components/MenPage";
import ProductPage1 from "./PagesFolder/ProductPage/productPage";
import ProfilePage from "./PagesFolder/ProfilePage/Profile";
import Footer from "./Footer/Footer";
import Cart from "../src/cart/cart";
import { ShopContextProvider } from "./context/shop-context";
import Header from "./Header/Header";

function App(props) {
  return (
    <BrowserRouter>
      <ShopContextProvider>
        <Route exact path="/" render={() => <Header  FirstPage="men" FirstPath = 'men' SecondPage = 'women' ThirdPage = 'kids'/>} />
        <Route exact path="/men" render={() => <Header FirstPage="home" FirstPath = '' SecondPage = 'women' ThirdPage = 'kids' />} />
        <Route exact path="/profile" render={() => <Header FirstPage="home" SecondPage ='men' ThirdPage = 'women' ForthPage = 'kids'/>} />
        <Route exact path="/" component={FullMainPage} />
        <Route
          path="/men"
          render={() => <MenPage productData={props.productData} />}
        />
        <Route exact path="/1" component={ProductPage1} />
        <Route path="/cart" component={Cart} />
        <Route exact path="/profile" component={ProfilePage} />
        <Footer />
      </ShopContextProvider>
    </BrowserRouter>
  );
}

export default App;
