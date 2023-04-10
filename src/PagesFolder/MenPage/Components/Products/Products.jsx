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
  //props.productData.sort((a, b) => a.price - b.price);

  //   sortedByPrice = s
  //     .filter((product) => product.type == "shoes")
  //     .map((p) => (
  //       <ProductTemplate
  //         Id={p.id}
  //         ProductName={p.name}
  //         ImgLink={p.imgMain}
  //         Price={p.price}
  //       />
  //     ));

  // let productElementsMobile = sortedByPrice.map((p) => (
  //   <MobileProducts
  //     Id={p.id}
  //     ProductName={p.name}
  //     ImgLink={p.imgMain}
  //     Price={p.price}
  //   />
  // ));
  //////////
  let ClothesData = props.productData.filter(
    (product) => product.type == "clothes"
  );
  let ShoesData = props.productData.filter(
    (product) => product.type == "shoes"
  );
  const [data, setData] = useState(props.productData);
  const [sort, setSort] = useState(0);
  const [clothes, setClothes] = useState(ClothesData);
  const [shoes, setShoes] = useState(ShoesData);

  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);

  function TestFunc() {
    let s = data;
    return s.map((p) => (
      <ProductTemplate
        Id={p.id}
        ProductName={p.name}
        ImgLink={p.imgMain}
        Price={p.price}
      />
    ));
  }

  function SortLow_High() {
    let s = data.sort((a, b) => a.price - b.price);
    return s.map((p) => (
      <ProductTemplate
        Id={p.id}
        ProductName={p.name}
        ImgLink={p.imgMain}
        Price={p.price}
      />
    ));
  }

  function SortHigh_Low() {
    let s = data.sort((a, b) => b.price - a.price);
    return s.map((p) => (
      <ProductTemplate
        Id={p.id}
        ProductName={p.name}
        ImgLink={p.imgMain}
        Price={p.price}
      />
    ));
  }

  function FilterShoes() {
    return shoes.map((p) => (
      <ProductTemplate
        Id={p.id}
        ProductName={p.name}
        ImgLink={p.imgMain}
        Price={p.price}
      />
    ));
  }
  function FilterClothes() {
    return clothes.map((p) => (
      <ProductTemplate
        Id={p.id}
        ProductName={p.name}
        ImgLink={p.imgMain}
        Price={p.price}
      />
    ));
  }

  function ClothesLow() {
    let a = ClothesData; //??????????????????????????????????????????? doesnt work with 'clothes'
    a.sort((a, b) => a.price - b.price);
     return a.map((p) => (
      <ProductTemplate
        Id={p.id}
        ProductName={p.name}
        ImgLink={p.imgMain}
        Price={p.price}
      />
    ));
  }
  // function ClothesHigh() {
  //   data.sort((a, b) => b.price - a.price);
  //   return data
  //     .filter((product) => product.type == "clothes")
  //     .map((p) => (
  //       <ProductTemplate
  //         Id={p.id}
  //         ProductName={p.name}
  //         ImgLink={p.imgMain}
  //         Price={p.price}
  //       />
  //     ));
  // }
  // function ShoesLow() {
  //   data.sort((a, b) => a.price - b.price);
  //   return data
  //     .filter((product) => product.type == "shoes")
  //     .map((p) => (
  //       <ProductTemplate
  //         Id={p.id}
  //         ProductName={p.name}
  //         ImgLink={p.imgMain}
  //         Price={p.price}
  //       />
  //     ));
  // }
  // function ShoesHigh() {
  //   data.sort((a, b) => b.price - a.price);
  //   return data
  //     .filter((product) => product.type == "shoes")
  //     .map((p) => (
  //       <ProductTemplate
  //         Id={p.id}
  //         ProductName={p.name}
  //         ImgLink={p.imgMain}
  //         Price={p.price}
  //       />
  //     ));
  // }
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
                    <button
                      className="buttonsInDrop "
                      onClick={() => setSort(3)}
                    >
                      Shoes
                    </button>
                    <div className="hiddenOptions">
                      <div className=" TESTICON" to="/men/shoes">
                        <ion-icon name="game-controller-outline"></ion-icon>
                      </div>
                    </div>
                  </div>
                  <div className="buttonLine">
                    <button
                      onClick={() => setSort(4)}
                      className="buttonsInDrop"
                    >
                      Clothes
                    </button>
                    <div className="hiddenOptions">
                      <div className=" TESTICON" to="/men/clothes">
                        <ion-icon name="game-controller-outline"></ion-icon>
                      </div>
                    </div>
                  </div>
                  <div className="buttonLine">
                    <button
                      onClick={() => setSort(5)}
                      className="buttonsInDrop"
                    >
                      Hats
                    </button>
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
                    <button
                      onClick={() => {
                        setSort(1);
                      }}
                      className="buttonsInDrop1"
                    >
                      By price
                      <br />
                      (LOWER_HIGHER)
                    </button>
                  </div>
                  <div className="buttonLine1">
                    <button
                      onClick={() => setSort(2)}
                      className="buttonsInDrop1"
                    >
                      By price
                      <br />
                      (HIGHER-LOWER)
                    </button>
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
            <div className={s.newProductsDiv}></div>
          </div>
          <div class={s.flexBoxProductsMen}>
            <div class={s.flexBox1}>
              {sort == 0
                ? TestFunc()
                : sort == 1
                ? SortLow_High()
                : sort == 2
                ? SortHigh_Low()
                : sort == 3
                ? FilterShoes()
                : sort == 4
                ? FilterClothes()
                : sort == 5
                ? ClothesLow()
                : TestFunc()}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
