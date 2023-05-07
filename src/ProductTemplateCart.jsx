import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { store  } from "./state/state";
import blackHeart from "./images/svj/likedItemHeart.svg";
import whiteHeart from "./images/svj/whiteHeart.svg";
import s from "./PagesFolder/MenPage/Components/Products/Products.module.css";

export const ProductTemplateCart = (props) => {
  const initialHeartState = store
    .getLikedItems()
    .some((item) => item.id === props.id)
    ? blackHeart
    : whiteHeart;

  let likedItems = JSON.parse(localStorage.getItem("newLikedItems")) || [];
  const [heart, setHeart] = useState(initialHeartState);

  const handleRemoveItem = (id) => {
    const updatedLikedItems = likedItems.filter((p) => p.id !== id);
    localStorage.setItem("newLikedItems", JSON.stringify(updatedLikedItems));
    setHeart(whiteHeart);
    likedItems = updatedLikedItems;
  };

  function addItem(id) {
    store.addLikedItem(id);
    setHeart(blackHeart);
  }

  function handleLikedButton(id) {
    if (heart === blackHeart) {
      handleRemoveItem(id);
    } else {
      addItem(id);
    }
  }
  let productPath = "/" + props.id;
  let price = props.Price + "$";
  return (
    <div className={s.imageFrame}>
      <div className={s.likeProduct + " " + "liked"}>
        <button onClick={() => handleLikedButton(props.id)}>
          <img className={s.blackHeart} src={heart}></img>
        </button>
      </div>
      <NavLink to={productPath}>
        <img src={props.ImgLink} alt="nike" className={s.clothes} />
      </NavLink>
      <div className={s.NamePrice}>
        <p className={s.caption}>{props.ProductName}</p>
        <p className={s.price}>{price}</p>
      </div>
      <button className={s.mapButton} onClick={props.handleRemoveItem}>
        Remove
      </button>
      {/* quantity: {props.quantity} */}
    </div>
  );
};
