import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import './FilterSort'
const DropLine = (props) => {
  return (
    <div className="buttonLine">
      <button className="buttonsInDrop">{props.text}</button>
    </div>
  );
};

const SortButton = (props) => {
  return (
    <Link style={{ textDecoration: "none" }} to={"/" + props.Link}>
      <button className="buttonsInDrop1">{props.ButtonText}</button>
    </Link>
  );
};

const FilterSort = () => {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);



  return (
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
              <button className="filter dropdown-btn">All products</button>
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
            <div className={`dropdown-menu1 ${open1 ? "active" : "inactive"}`}>
              <div className="dropBox">
                <div className="buttonLine1">
                  <SortButton
                    ButtonText="By price(LOWER - HIGHER)"
                    Link="men/low-high"
                  />
                </div>
                <div className="buttonLine1">
                  <SortButton
                    ButtonText="By price(HIGHER-LOWER)"
                    Link="men/high-low"
                  />
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
      <div className="popularText">
     
      </div>
    </div>
  );
};

export default FilterSort;
