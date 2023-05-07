import React, { useState, useRef, useEffect } from "react";
import { ProductTemplateLiked } from "../../ProductTemplateLiked";
import { MobileLikedProducts } from "../../MobileLikedTemplate";
import { NavLink } from "react-router-dom";
import Header from "../../Header/Header";
import { store } from "../../state/state";
import s from "../../cart/cart.module.css";
const Liked = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 881);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

 

  const cartBoxRef = useRef(null);
  const [total, setTotal] = useState(0);
  const [totalStyle, setTotalStyle] = useState(0);
  const [count, setCount] = useState(0);
  const [buttonShop, setButtonShop] = useState(0);
  const [empty, setEmpty] = useState(s.emptyCartDiv);
  const [emptyText, setEmptyText] = useState(0);

  let likedItems = JSON.parse(localStorage.getItem("newLikedItems")) || [];
  useEffect(() => {
    let counter = 0;
    likedItems.forEach((item) => (counter += 1));

    if (counter == 0) {
      setEmpty(s.emptyCartDiv);
      setTotalStyle(s.vanish);
      setButtonShop(s.shoppingButton);
      setEmptyText("Here will be liked products...");
    } else {
      setEmpty(s.notEmptyCartDiv);
      setEmptyText(" ");
      setTotalStyle(s.appear);
      setButtonShop(s.vanish);
    }
    setCount(counter);
  }, [likedItems]);

  const handleRemoveItem = (item) => {
    const updatedLikedItems = likedItems.filter((p) => p.id !== item.id);
    localStorage.setItem("newLikedItems", JSON.stringify(updatedLikedItems));
    const childToRemove = cartBoxRef.current.querySelector(`[id="${item.id}"]`);
    setCount(count - 1)
    if (childToRemove) {
      cartBoxRef.current.removeChild(childToRemove);
    }
  };
  function showLikedItems() {
    if (isMobile)
    return likedItems.map((p) => (
      <MobileLikedProducts  
        id={p.id}
        ProductName={p.name}
        ImgLink={p.imgMain}
        Price={p.price}
        quantity={p.quantity}
        handleRemoveItem={() => handleRemoveItem(p)}
      />
    ));
    else return likedItems.map((p) => (
      <ProductTemplateLiked  
        id={p.id}
        ProductName={p.name}
        ImgLink={p.imgMain}
        Price={p.price}
        quantity={p.quantity}
        handleRemoveItem={() => handleRemoveItem(p)}
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
        <div className={s.totalDiv}>
        <h1 className={totalStyle}>
           Liked products
          </h1>{" "}
        </div>
        <div className={s.alignerEmpty}>
          <div className={empty}>
            {" "}
            {emptyText}
            <div className={buttonShop}>
              <NavLink to="/">
                <button>Start shopping</button>
              </NavLink>
            </div>
          </div>
        </div>
        <div ref={cartBoxRef} className={s.cartProductsDiv}>
          <div id={s.productBox}>{showLikedItems()}</div>
        </div>
      </div>
    </>
  );
};

export default Liked;
