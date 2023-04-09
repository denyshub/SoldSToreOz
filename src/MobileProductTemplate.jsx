import React from "react";
import s from "./PagesFolder/MenPage/Components/Products/Products.module.css";
import { NavLink } from "react-router-dom";

export const MobileProducts = (props) => {
  let productPath = "/" + String(props.Id);
  let price = props.Price + "$";
  return (
    <div className={s.productsMobile}>
    <div class={s.imageFrameMobile}>
      <a href="liked.html" id="liked" className={s.likeProduct}>
        <ion-icon name="heart-outline"></ion-icon>
      </a>
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

