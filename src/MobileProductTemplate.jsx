import React from "react";
import s from "./PagesFolder/MenPage/Components/Products/Products.module.css";
import { NavLink } from "react-router-dom";

export const MobileProducts = (props) => {
  let productPath = "/" + String(props.Id);
  let price = props.Price + "$";
  return (
    <div className={s.productsMobile}>
    <div class={s.imageFrameMobile}>
      <div className={s.likeProduct +" " + 'liked'}>
        <ion-icon name="heart-outline"></ion-icon>
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

