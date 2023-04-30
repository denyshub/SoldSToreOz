import React from "react";
import { state, subscriber, addCartItem, addLikedItem } from "./state/state";
import ReactDOM from "react-dom/client";
import App from "./App";



export let rerenderFunction = (state) => {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
        <App Data = {state} addCartItem = {addCartItem} addLikedItem = {addLikedItem}/>
  );
}

rerenderFunction(state);
subscriber(rerenderFunction);
