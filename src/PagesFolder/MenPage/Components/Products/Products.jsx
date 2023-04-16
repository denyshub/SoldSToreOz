import React, { useState } from "react";
import { Link, useNavigate, Navigate } from "react-router-dom";
import { ProductTemplate } from "../../../../ProductTemplate";
import s from "./Products.module.css";
import { MobileProducts } from "../../../../MobileProductTemplate";

const SortButton = (props) => {
  return (
    <Link className="linkButton" to={"/" + props.Link}>
      <button className="buttonsInDrop1">{props.ButtonText}</button>
    </Link>
  );
};

const Products = (props) => {
  const [data, setData] = useState(props.productData);
  const [sort, setSort] = useState(0);
  const [clothes, setClothes] = useState(
    props.productData.filter((product) => product.type == "clothes")
  );
  const [shoes, setShoes] = useState(
    props.productData.filter((product) => product.type == "shoes")
  );

  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);

  function Sort(prodData, sortDirection) {
    if (sortDirection.toLowerCase() == "low")
      return MappingFunc([...prodData].sort((a, b) => a.price - b.price));
    else if (sortDirection.toLowerCase() == "high")
      return MappingFunc([...prodData].sort((a, b) => b.price - a.price));
  }
  function MappingFunc(a) {
    let mode = window.innerWidth < 768 ? "mobile" : "desktop";
    if (mode == "desktop")
      return a.map((p) => (
        <ProductTemplate
          id={p.id}
          ProductName={p.name}
          ImgLink={p.imgMain}
          Price={p.price}
        />
      ));
    else
      return a.map((p) => (
        <MobileProducts
          id={p.id}
          ProductName={p.name}
          ImgLink={p.imgMain}
          Price={p.price}
        />
      ));
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
                  <div className="removeFiltersDiv">
                    <button
                      className="removeFiltersButton"
                      onClick={() => setSort(0)}
                    >
                      Remove filters
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
                    <button
                      onClick={() => {
                        setSort(
                          sort == "clothes" || sort == "ClothesHigh-Low" || sort == "ClothesLow-High"
                            ? "ClothesLow-High"
                            : sort == "shoes" || sort == "ShoesHigh-Low"| sort == "ShoesLow-High"
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
                          sort == "clothes" || sort == "ClothesHigh-Low" || sort == "ClothesLow-High"
                            ? "ClothesHigh-Low": 
                       
                            sort == "shoes" || sort == "ShoesLow-High"  || sort == "ShoesHigh-Low"
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
          <div class={s.flexBoxProductsMen}>
            <div class={s.flexBox1}>
              {sort == "low-high"
                ? Sort(data, "low")
                : sort == "high-low"
                ? Sort(data, "high")
                : sort == "shoes"
                ? MappingFunc(shoes)
                : sort == "clothes"
                ? MappingFunc(clothes)
                : sort == "ClothesLow-High"
                ? Sort(clothes, "low")
                : sort == "ShoesLow-High"
                ? Sort(shoes, "low")
                : sort == "ClothesHigh-Low"
                ? Sort(clothes, "high")
                : sort == "ShoesHigh-Low"
                ? Sort(shoes, "high")
                : MappingFunc(data)}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
