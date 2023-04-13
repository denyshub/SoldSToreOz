import React from "react";
import { NavLink } from "react-router-dom";
import s from './PagesFolder/MenPage/Components/Products/Products.module.css'
export const ProductTemplate = (props) => {
  let productPath = "/" + props.id;
  let price = props.Price + "$"
  return (
    <div class={s.imageFrame}>
      <div className={s.likeProduct + " " + "liked"}>
        <ion-icon name="heart-outline"></ion-icon>
      </div>
      <NavLink to={productPath}>
        <img src={props.ImgLink} alt="nike" className = {s.clothes} />
      </NavLink>
      <div className={s.NamePrice}>
        <p className={s.caption}>{props.ProductName}</p>
        <p className={s.price}>{price}</p>
      </div>
    </div>
  );
};


