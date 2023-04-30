import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import s from "./PagesFolder/MenPage/Components/Products/Products.module.css";
import { addLikedItem, getLikedItems } from "./state/state";
import blackHeart from "./images/svj/likedItemHeart.svg";
import whiteHeart from "./images/svj/whiteHeart.svg";

export const ProductTemplate = (props) => {
  const [likedItems, setLikedItems] = useState(getLikedItems());
  const [isLiked, setIsLiked] = useState(
    likedItems.some((item) => item.id === props.id)
  );

  useEffect(() => {
    setLikedItems(getLikedItems());
    setIsLiked(likedItems.some((item) => item.id === props.id));
  }, []);

  function addItem(id) {
    addLikedItem(id);
    setIsLiked(true);
    setLikedItems(getLikedItems());
  }

  function removeItem(id) {
    const updatedLikedItems = likedItems.filter((item) => item.id !== id);
    localStorage.setItem("newLikedItems", JSON.stringify(updatedLikedItems));
    setIsLiked(false);
    setLikedItems(updatedLikedItems);
  }

  function handleLikedButton(id) {
    if (isLiked) {
      removeItem(id);
    } else {
      addItem(id);
    }
  }
console.log(getLikedItems());
  let productPath = "/" + props.id;
  let price = props.Price + "$";
  return (
    <div className={s.imageFrame}>
      <div className={`${s.likeProduct} ${isLiked ? "liked" : ""}`}>
        <button onClick={() => handleLikedButton(props.id)}>
          <img className={s.blackHeart} src={isLiked ? blackHeart : whiteHeart}></img>
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
