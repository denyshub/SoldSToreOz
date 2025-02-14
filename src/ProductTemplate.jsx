import React from "react";
import { NavLink } from "react-router-dom";
import s from './PagesFolder/MenPage/Components/Products/Products.module.css'
export const ProductTemplate = (props) => {
  let productPath = "/" + String(props.Id);
  let price = props.Price + "$"
  return (
    <div class={s.imageFrame}>
      <a href="liked.html" id="liked" className={s.likeProduct}>
        <ion-icon name="heart-outline"></ion-icon>
      </a>
      <NavLink to={productPath}>
        <img src={props.ImgLink} alt="nike" class="clothes" />
      </NavLink>
      <div className={s.NamePrice}>
        <p className={s.caption}>{props.ProductName}</p>
        <p className={s.price}>{price}</p>
      </div>
    </div>
  );
};
