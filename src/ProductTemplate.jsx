import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import s from "./PagesFolder/MenPage/Components/Products/Products.module.css";
import { addLikedItem } from "./state/state";
import blackHeart from "./images/svj/likedItemHeart.svg"
import whiteHeart from "./images/svj/whiteHeart.svg"
export const ProductTemplate = (props) => {

  const [heart, setHeart] = useState( whiteHeart)
function handleLikedButton(id) {
  addLikedItem(id);
  setHeart(blackHeart)
}

  let productPath = "/" + props.id;
  let price = props.Price + "$";
  return (
    <div class={s.imageFrame}>
      <div className={s.likeProduct + " " + "liked"}>
        <button onClick={() => handleLikedButton(props.id) }>
        <img className={s.blackHeart} src = {heart}></img>
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
