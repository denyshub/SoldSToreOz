import React, { useState } from "react";
import s from "./PagesFolder/MenPage/Components/Products/Products.module.css";
import { NavLink } from "react-router-dom";
import { store } from "./state/state";  
import Heart from "./images/svj/likedItemHeart.svg";
export const MobileLikedProducts = (props) => {
  let likedItems = JSON.parse(localStorage.getItem("newLikedItems")) || [];
 

  console.log(store.getLikedItems());



  let productPath = "/" + String(props.id);
  let price = props.Price + "$";
  return (
    <div className={s.productsMobile}>
      <div class={s.imageFrameMobile}>
        <div className={s.likeProduct + " " + "liked"}>
        <button
        className={s.likeProduct + " " + "liked" + " " + s.likeButton}
        onClick={props.handleRemoveItem}
      >
        <div>
          <img className={s.blackHeart} src={Heart}></img>
        </div>
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
    </div>
  );
};
