import { React, useState, useEffect } from "react";
import { ProductTemplate } from "../ProductTemplate";

export const Cart = (props) => {
  function showCartItems() {
    let cartItems = JSON.parse(localStorage.getItem("newCartItem")) || [];
    return cartItems.map((p) => (
      <ProductTemplate
        Id={p.id}
        ProductName={p.name}
        ImgLink={p.imgMain}
        Price={p.price}
      />
    ));
  }

  return <div>{showCartItems()}</div>;
};

export default Cart;
