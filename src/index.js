import React from "react";
import { store } from "./state/state";
import ReactDOM from "react-dom/client";
import App from "./App";

export let rerenderFunction = () => {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <App
      Data={store.state}
      addCartItem={store.addCartItem}
      addLikedItem={store.addLikedItem}
      getCartItems = {store.getCartItems}
      getLikedItems = {store.addLikedItem}
    />
  );
};

rerenderFunction(store.state);
store.subscriber(rerenderFunction);
