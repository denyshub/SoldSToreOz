import React from "react";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
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
import Products from "./PagesFolder/MenPage/Components/Products/Products";
function App(props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path=""
          element={
            <Header FirstPage="men" SecondPage="women" ThirdPage="kids" />
          }
        />
        <Route
          exact
          path="/women"
          element={
            <Header FirstPage="home" SecondPage="men" ThirdPage="kids" />
          }
        />
        <Route
          path="/kids"
          element={
            <Header FirstPage="home" SecondPage="men" ThirdPage="women" />
          }
        />
        <Route
          path="/profile"
          element={
            <Header
              FirstPage="home"
              SecondPage="men"
              ThirdPage="women"
              ForthPage="kids"
            />
          }
        />
      </Routes>
      <Routes>
        <Route path="/" element={<FullMainPage />} />

        <Route path="/men" element={<MenPage />}>
          <Route
            exact
            path="/men"
            element={<Products productData={props.productData} />}
          ></Route>
        </Route>
        <Route exact path="/1" element={<ProductPage1 />} />
        <Route path="/cart" component={Cart} />
        <Route exact path="/profile" element={<ProfilePage />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
