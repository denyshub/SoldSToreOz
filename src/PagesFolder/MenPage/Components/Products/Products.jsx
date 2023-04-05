import React from "react";
import { ProductTemplate } from "../../../../ProductTemplate";
import s from './Products.module.css'
const Products = (props) => {
  let productElements = props.productData.map((p) => (
    <ProductTemplate
      Id={p.id}
      ProductName={p.name}
      ImgLink={p.imgMain}
      Price={p.price}
    />
  ));

  return (
    <div className={s.pushFooter}>
      <div class={s.flexBoxProductsMen}>
        <div class={s.flexBox1}>{productElements}</div>
      </div>
    </div>
  );
};

export default Products;
