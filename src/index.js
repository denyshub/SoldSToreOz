import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import GreenNike from "./images/shoes/greenNike.jpg";
import BlackAdidas from "./images/shoes/blackAdidas.jpg";
import AirForce1White from "./images/shoes/airForce1White.jpg";
import JordanGrey from "./images/shoes/jordanGrey.jpg";
import DunkYellow from "./images/shoes/dunkYellow.jpg";
import NikeBones from "./images/shoes/nikeBones.jpg";
import JordanBlack from "./images/shoes/dunkBlack.jpg";
import DunkGreenGlow from "./images/shoes/dunkGreenGlow.jpg";
import BlazerWhite from "./images/shoes/blazerWhite.jpg";


let productData = [
  { id: 1, name: "Nike Green", price: 1500, imgMain: GreenNike },
  {
    id: 2,
    name: "Adidas Black",
    price: 500,
    imgMain: BlackAdidas,
  },
  {
    id: 3,
    name: "Air Force 1 White",
    price: 200,
    imgMain: AirForce1White,
  },
  { id: 4, name: "Jordan Grey", price: 300, imgMain: JordanGrey },
  { id: 5, name: "Dunk Yellow", price: 300, imgMain: DunkYellow },
  { id: 6, name: "Nike Bones", price: 400, imgMain: NikeBones },
  { id: 7, name: "Dunk Black", price: 300, imgMain: JordanBlack },
  {
    id: 8,
    name: "Dunk Green Glow",
    price: 300,
    imgMain: DunkGreenGlow,
  },
  {
    id: 9,
    name: "Blazer White",
    price: 250,
    imgMain: BlazerWhite,
  },
];







const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(


      <App productData = {productData}/>


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
