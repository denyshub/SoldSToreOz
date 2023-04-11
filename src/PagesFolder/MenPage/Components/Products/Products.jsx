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
    let s = [...data];
    return MappingFunc(s);
  }

  function SortLow_High() {
    let s = [...data].sort((a, b) => a.price - b.price);
    return MappingFunc(s);
  }

  function SortHigh_Low() {
    let s = [...data].sort((a, b) => b.price - a.price);
    return MappingFunc(s);
  }

  function MappingFunc(a) {
    return a.map((p) => (
      <ProductTemplate
        Id={p.id}
        ProductName={p.name}
        ImgLink={p.imgMain}
        Price={p.price}
      />
    ));
  }

  function FilterLow(x) {
    return MappingFunc([...x].sort((a, b) => a.price - b.price));
  }
  function FilterHigh(x) {
    return MappingFunc([...x].sort((a, b) => b.price - a.price));
  }
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
                      onClick={() => setSort(0)}
                    >
                      All products
                    </button>
                    <div className="hiddenOptions">
                      <div className=" TESTICON" to="/men/shoes">
                        <ion-icon name="game-controller-outline"></ion-icon>
                      </div>
                    </div>
                  </div>
                  <div className="buttonLine">
                    <button
                      className="buttonsInDrop "
                      onClick={() => setSort("shoes")}
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
                      onClick={() => setSort("clothes")}
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
                        setSort(
                          sort == "clothes" || sort == 'ClothesHigh-Low'
                            ? "ClothesLow-High"
                            : sort == "shoes" || sort ==  'ShoesHigh-Low'
                            ? "ShoesLow-High"
                            : "low-high"
                        );
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
                      onClick={() =>
                        setSort(
                          sort == "clothes" || sort == 'ClothesLow-High'
                            ? "ClothesHigh-Low"
                            : sort == "shoes" || sort == 'ShoesLow-High'
                            ? "ShoesHigh-Low"
                            : "high-low"
                        )
                      }
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
                : sort == "low-high"
                ? SortLow_High()
                : sort == "high-low"
                ? SortHigh_Low()
                : sort == "shoes"
                ? MappingFunc(shoes)
                : sort == "clothes"
                ? MappingFunc(clothes)
                : sort == "ClothesLow-High"
                ? FilterLow(clothes)
                : sort == "ShoesLow-High"
                ? FilterLow(shoes)
                : sort == "ClothesHigh-Low"
                ? FilterHigh(clothes)
                : sort == "ShoesHigh-Low"
                ? FilterHigh(shoes)
                : TestFunc()}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
