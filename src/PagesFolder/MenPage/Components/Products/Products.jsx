import React, { useState } from "react";
import { ProductTemplate } from "../../../../ProductTemplate";
import s from "./Products.module.css";

const Products = (props) => {
  let sortedByPrice;
  if (props.Sort == "LOW_HIGH") {
    sortedByPrice = [...props.productData].sort((a, b) => a.price - b.price);
  } else if (props.Sort == "HIGH_LOW") {
    sortedByPrice = [...props.productData].sort((a, b) => b.price - a.price);
  } else if (props.Filter == "clothes") {
    sortedByPrice = props.productData
      .filter((product) => product.type == "clothes")
      .map((p) => (
        <ProductTemplate
          Id={p.id}
          ProductName={p.name}
          ImgLink={p.imgMain}
          Price={p.price}
        />
      ));
  } else if (props.Filter == "shoes") {
    sortedByPrice = props.productData
      .filter((product) => product.type == "shoes")
      .map((p) => (
        <ProductTemplate
          Id={p.id}
          ProductName={p.name}
          ImgLink={p.imgMain}
          Price={p.price}
        />
      ));
  } else if (props.Filter == "shoes" && props.Sort == 'LOW_HIGH') {
    sortedByPrice = props.productData
      .filter((product) => product.type == "shoes")
      .map((p) => (
        <ProductTemplate
          Id={p.id}
          ProductName={p.name}
          ImgLink={p.imgMain}
          Price={p.price}
        />
      ));
  } else {
    sortedByPrice = props.productData;
  }

  let productElements = sortedByPrice.map((p) => (
    <ProductTemplate
      Id={p.id}
      ProductName={p.name}
      ImgLink={p.imgMain}
      Price={p.price}
    />
  ));
  return (
    <div className={s.colorDiv}>
      <div className={s.pushFooter}>
        <div class={s.flexBoxProductsMen}>
          <div class={s.flexBox1}>
            {props.Filter != null ? sortedByPrice : productElements}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
