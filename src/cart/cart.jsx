import { React, useState, useEffect, useRef } from "react";
import { ProductTemplate } from "../ProductTemplate";
import { clearCart } from "../state/state";
import Header from "../Header/Header";
import s from "./cart.module.css";
const Cart = (props) => {
  const cartBoxRef = useRef(null);

  const handleClearCart = () => {
    clearCart(() => {
      while (cartBoxRef.current.firstChild) {
        cartBoxRef.current.removeChild(cartBoxRef.current.firstChild);
      }
    });
  };

  function showCartItems() {
    let cartItems = JSON.parse(localStorage.getItem("newCartItems")) || [];
    return cartItems.map((p) => (
      <ProductTemplate
        id={p.id}
        ProductName={p.name}
        ImgLink={p.imgMain}
        Price={p.price}
      />
    ));
  }

  return (
    <>
      <Header
        FirstPage="home"
        FirstPath="home"
        SecondPage="men"
        ThirdPage="women"
        ForthPage="kids"
      />
      <div className={s.pushFooter}>
        <div className={s.cartTextDiv}>
          {" "}
          <h1>Cart</h1>
          <button className={s.clearCartButton} onClick={handleClearCart}>
            Clean the cart
          </button>
        </div>
        <div ref={cartBoxRef} className={s.cartProductsDiv}>
          <div id={s.productBox}>{showCartItems()}</div>
        </div>
      </div>
    </>
  );
};

export default Cart;
