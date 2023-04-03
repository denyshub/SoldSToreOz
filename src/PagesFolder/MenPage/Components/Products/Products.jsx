import React from "react";
import { ProductTemplate } from "../../../../ProductTemplate";

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
    <div className="pushFooter">
      <div class="flexBoxProductsMen">
        <div class="item flexBox1">{productElements}</div>
      </div>
    </div>
  );
};

export default Products;
