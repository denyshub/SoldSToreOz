import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import s from "./PagesFolder/MenPage/Components/Products/Products.module.css";
import { store } from "./state/state";
import blackHeart from "./images/svj/likedItemHeart.svg";
import whiteHeart from "./images/svj/whiteHeart.svg";
import { rerenderFunction } from ".";

export const ProductTemplate = (props) => {
  const [likedItems, setLikedItems] = useState(store.getLikedItems());

  const handleRemoveItem = (id) => {
    const updatedLikedItems = likedItems.filter((p) => p.id !== id);
    localStorage.setItem("newLikedItems", JSON.stringify(updatedLikedItems));
    setLikedItems(updatedLikedItems);
  };

  const initialHeartState = store
    .getLikedItems()
    .some((item) => item.id === props.id)
    ? blackHeart
    : whiteHeart;

  const [heart, setHeart] = useState(initialHeartState);

  function addItem(id) {
    store.addLikedItem(id);
    setHeart(blackHeart);
  }

  function handleLikedButton(id) {
    const isLiked = likedItems.some((item) => item.id === id);
    if (isLiked) {
      handleRemoveItem(id);
    } else {
      addItem(id);
    }
    setHeart(isLiked ? whiteHeart : blackHeart);
  }

  let productPath = "/" + String(props.id);
  let price = props.Price + "$";

  useEffect(() => {
    const updatedLikedItems = store.getLikedItems();
    setLikedItems(updatedLikedItems);
  }, []);

  console.log(likedItems)
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
    </div>
  );
};
