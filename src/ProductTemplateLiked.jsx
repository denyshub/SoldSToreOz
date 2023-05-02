import React from "react";
import { NavLink } from "react-router-dom";
import s from "./PagesFolder/MenPage/Components/Products/Products.module.css";
import Heart from "./images/svj/likedItemHeart.svg";
export const ProductTemplateLiked = (props) => {
  let productPath = "/" + props.id;
  let price = props.Price + "$";
  return (
    <div class={s.imageFrame}>
      <button
        className={s.likeProduct + " " + "liked" + " " + s.likeButton}
        onClick={props.handleRemoveItem}
      >
        <div>
          <img className={s.blackHeart} src={Heart}></img>
        </div>
      </button>
      <NavLink to={productPath}>
        <img src={props.ImgLink} alt="nike" className={s.clothes} />
      </NavLink>
      <div className={s.NamePrice}>
        <p className={s.caption}>{props.ProductName}</p>
        <p className={s.price}>{price}</p>
      </div>

      {/* quantity: {props.quantity} */}
    </div>
  );
};
