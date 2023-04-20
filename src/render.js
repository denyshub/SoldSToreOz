import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { addCartItem, addLikedItem } from "./state/state";


export let rerenderFunction = (state) => {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
        <App Data = {state} addCartItem = {addCartItem} addLikedItem = {addLikedItem}/>
  );
}