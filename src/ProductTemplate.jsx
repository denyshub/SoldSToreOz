import React from "react";
import { NavLink } from "react-router-dom";

export const ProductTemplate = (props) => {
  let productPath = "/" + String(props.Id);
  let price = props.Price + "$"
  return (
    <div class="imageFrame">
      <a href="liked.html" id="liked" class="iconsMen likeProduct">
        <ion-icon name="heart-outline"></ion-icon>
      </a>
      <NavLink to={productPath}>
        <img src={props.ImgLink} alt="nike" class="clothes" />
      </NavLink>
      <div className="NamePrice">
        <p class="caption">{props.ProductName}</p>
        <p className="price">{price}</p>
      </div>
    </div>
  );
};
