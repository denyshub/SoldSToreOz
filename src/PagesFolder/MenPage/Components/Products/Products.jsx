import React, { useState } from "react";
import { Link, useNavigate, Navigate } from "react-router-dom";
import { ProductTemplate } from "../../../../ProductTemplate";
import s from "./Products.module.css";
import { MobileProducts } from "../../../../MobileProductTemplate";

const DropLine = (props) => {
  return (
    <div className="buttonLine">
      <button className="buttonsInDrop">{props.text}</button>
    </div>
  );
};

const SortButton = (props) => {
  return (
    <Link className="linkButton" to={"/" + props.Link}>
      <button className="buttonsInDrop1">{props.ButtonText}</button>
    </Link>
  );
};

const Products = (props) => {
  let sortedByPrice;
  let sortedByPriceMobile;
  if (props.Sort == "LOW_HIGH") {
    sortedByPrice = sortedByPriceMobile = [...props.productData].sort(
      (a, b) => a.price - b.price
    );
  } else if (props.Sort == "HIGH_LOW" && props.Filter == "shoes") {
    let s = props.productData.sort((a, b) => b.price - a.price);

    sortedByPrice = s
      .filter((product) => product.type == "shoes")
      .map((p) => (
        <ProductTemplate
          Id={p.id}
          ProductName={p.name}
          ImgLink={p.imgMain}
          Price={p.price}
        />
      ));
  } else if (props.Sort == "LOW_HIGH" && props.Filter == "shoes") {
    let s = props.productData.sort((a, b) => a.price - b.price);

    sortedByPrice = s
      .filter((product) => product.type == "shoes")
      .map((p) => (
        <ProductTemplate
          Id={p.id}
          ProductName={p.name}
          ImgLink={p.imgMain}
          Price={p.price}
        />
      ));
  } else if (props.Sort == "HIGH_LOW") {
    sortedByPrice = sortedByPriceMobile = [...props.productData].sort(
      (a, b) => b.price - a.price
    );
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
    sortedByPriceMobile = props.productData
      .filter((product) => product.type == "clothes")
      .map((p) => (
        <MobileProducts
          Id={p.id}
          ProductName={p.name}
          ImgLink={p.imgMain}
          Price={p.price}
        />
      ));
  } else if (props.Filter == "shoes" && props.Sort == "none") {
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
    sortedByPriceMobile = props.productData
      .filter((product) => product.type == "shoes")
      .map((p) => (
        <MobileProducts
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
    sortedByPriceMobile = props.productData
      .filter((product) => product.type == "shoes")
      .map((p) => (
        <MobileProducts
          Id={p.id}
          ProductName={p.name}
          ImgLink={p.imgMain}
          Price={p.price}
        />
      ));
  } else {
    sortedByPrice = props.productData;
    sortedByPriceMobile = props.productData;
  }

  let productElements = sortedByPrice.map((p) => (
    <ProductTemplate
      Id={p.id}
      ProductName={p.name}
      ImgLink={p.imgMain}
      Price={p.price}
    />
  ));
  let productElementsMobile = sortedByPrice.map((p) => (
    <MobileProducts
      Id={p.id}
      ProductName={p.name}
      ImgLink={p.imgMain}
      Price={p.price}
    />
  ));
  //////////
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);

  let pathLow_High;
  let pathHigh_Low;
  props.Filter
    ? (pathLow_High = "/men" + "/" + props.Filter + "/low-high")
    : (pathLow_High = "/men/low-high");
  props.Filter
    ? (pathHigh_Low = "/men" + "/" + props.Filter + "/high-low")
    : (pathHigh_Low = "/men/high-low");
  return (
    <>
      <div>
        <div>
          <div className="filterRow">
            <div className="menu-container">
              <div
                className="menu-trigger"
                onClick={() => {
                  setOpen(!open);
                }}
              >
                <button className="filter dropdown-btn">Filters</button>
              </div>
              <div className={`dropdown-menu ${open ? "active" : "inactive"}`}>
                <div className="dropBox">
                  <div className="buttonLine">
                    <button className="buttonsInDrop ">Shoes</button>
                    <div className="hiddenOptions">
                      <Link className=" TESTICON" to="/men/shoes">
                        <ion-icon name="game-controller-outline"></ion-icon>
                      </Link>
                    </div>
                  </div>
                  <div className="buttonLine">
                    <button className="buttonsInDrop">Clothes</button>
                    <div className="hiddenOptions">
                      <Link className=" TESTICON" to="/men/clothes">
                        <ion-icon name="game-controller-outline"></ion-icon>
                      </Link>
                    </div>
                  </div>
                  <div className="buttonLine">
                    <button className="buttonsInDrop">Hats</button>
                  </div>
                </div>
              </div>
            </div>

            <input type="text" placeholder="Search..." className="searches" />
            <div className="menu-container">
              <div
                className="menu-trigger1"
                onClick={() => {
                  setOpen1(!open1);
                }}
              >
                <button className="filter dropdown-btn">Sort</button>
              </div>
              <div
                className={`dropdown-menu1 ${open1 ? "active" : "inactive"}`}
              >
                <div className="dropBox">
                  <div className="buttonLine1">
                    <Link className="linkButton" to={pathLow_High}>
                      <button className="buttonsInDrop1">
                        By price
                        <br />
                        (LOWER_HIGHER)
                      </button>
                    </Link>
                  </div>
                  <div className="buttonLine1">
                    <Link className="linkButton" to={pathHigh_Low}>
                      <button className="buttonsInDrop1">
                        By price
                        <br />
                        (HIGHER-LOWER)
                      </button>
                    </Link>
                  </div>
                  <div className="buttonLine1">
                    <SortButton ButtonText="Popular" Link="men/popular" />
                  </div>
                  <div className="buttonLine1">
                    <SortButton ButtonText="New" Link="men/new" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="popularText"></div>
      </div>
      <div className={s.colorDiv}>
        <div className={s.pushFooter}>
          <div className={s.mobileProductsDiv}>
            <div className={s.newProductsDiv}>
              {" "}
              {props.Filter != null
                ? sortedByPriceMobile
                : productElementsMobile}
            </div>
          </div>
          <div class={s.flexBoxProductsMen}>
            <div class={s.flexBox1}>
              {props.Filter != null ? sortedByPrice : productElements}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
