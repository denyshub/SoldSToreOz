import { React, useState, useRef, useEffect } from "react";
import { ProductTemplateCart } from "../ProductTemplateCart";
import Header from "../Header/Header";
import s from "./cart.module.css";
const Cart = (props) => {
  const cartBoxRef = useRef(null);
  const [total, setTotal] = useState(0);
  const [count, setCount] = useState(0);
  let cartItems = JSON.parse(localStorage.getItem("newCartItems")) || [];
  useEffect(() => {
    // Перераховуємо суму кожен раз, коли змінюється список товарів
    let sum = 0;
    let counter = 0; 
    cartItems.forEach((item) => (sum += item.price, counter += 1));
    setTotal(sum);
    setCount(counter);
  }, [cartItems]);

  const handleRemoveItem = (item) => {
    const updatedCartItems = cartItems.filter((p) => p.id !== item.id);
    localStorage.setItem("newCartItems", JSON.stringify(updatedCartItems));
    setTotal(updatedCartItems.reduce((acc, p) => acc + p.price, 0));
    const childToRemove = cartBoxRef.current.querySelector(`[id="${item.id}"]`);
    if (childToRemove) {
      cartBoxRef.current.removeChild(childToRemove);
    }
  };

  function showCartItems() {
    return cartItems.map((p) => (
      <ProductTemplateCart
        id={p.id}
        ProductName={p.name}
        ImgLink={p.imgMain}
        Price={p.price}
        handleRemoveItem={() => handleRemoveItem(p)}
      />
    ));
  }

  function showButtons() {
    return cartItems.map((p) => (
      <button className={s.mapButton} onClick={() => handleRemoveItem(p)}>
        Remove
      </button>
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
        </div>
        <div className={s.totalDiv}>
          {" "}
          <h1>Total ({count}): {total} $</h1>{" "}
        </div>
        <div ref={cartBoxRef} className={s.cartProductsDiv}>
          <div id={s.productBox}>{showCartItems()}</div>
  
        </div>
      </div>
    </>
  );
};

export default Cart;
