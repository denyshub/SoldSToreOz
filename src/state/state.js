
import GreenNike from "../images/shoes/greenNike.jpg";
import BlackAdidas from "../images/shoes/blackAdidas.jpg";
import AirForce1White from "../images/shoes/airForce1White.jpg";
import JordanGrey from "../images/shoes/jordanGrey.jpg";
import DunkYellow from "../images/shoes/dunkYellow.jpg";
import NikeBones from "../images/shoes/nikeBones.jpg";
import JordanBlack from "../images/shoes/dunkBlack.jpg";
import DunkGreenGlow from "../images/shoes/dunkGreenGlow.jpg";
import BlazerWhite from "../images/shoes/blazerWhite.jpg";
import BlackNikeHoodie from "../images/Clothes/blackNikeHoodie.jpg";
import BlackAdidasHoodie from "../images/Clothes/blackAdidasHoodie.jpeg";
import BlackNikeHoodie2 from "../images/Clothes/blackNukeHoodie2.jpg";

export let state = {
  productData: [
    {
      key: 1,
      id: 1,
      name: "Nike Green",
      price: 1500,
      imgMain: GreenNike,
      type: "shoes",
      liked: false,
    },
    {
      key: 2,
      id: 2,
      name: "Adidas Black",
      price: 500,
      imgMain: BlackAdidas,
      type: "shoes",
      liked: false,
    },
    {
      key: 3,
      id: 3,
      name: "Air Force 1 White",
      price: 200,
      imgMain: AirForce1White,
      type: "shoes",
      liked: false,
    },
    {
      key: 4,
      id: 4,
      name: "Jordan Grey",
      price: 300,
      imgMain: JordanGrey,
      type: "shoes",
      liked: false,
    },
    {
      key: 5,
      id: 5,
      name: "Dunk Yellow",
      price: 300,
      imgMain: DunkYellow,
      type: "shoes",
      liked: false,
    },
    {
      key: 6,
      id: 6,
      name: "Nike Bones",
      price: 400,
      imgMain: NikeBones,
      type: "shoes",
      liked: false,
    },
    {
      key: 7,
      id: 7,
      name: "Dunk Black",
      price: 300,
      imgMain: JordanBlack,
      type: "shoes",
      liked: false,
    },
    {
      key: 8,
      id: 8,
      name: "Dunk Green Glow",
      price: 1,
      imgMain: DunkGreenGlow,
      type: "shoes",
      liked: false,
    },
    {
      key: 9,
      id: 9,
      name: "Blazer White",
      price: 250,
      imgMain: BlazerWhite,
      type: "shoes",
      liked: false,
    },
    {
      key: 10,
      id: 10,
      name: "Black Nike Hoodie",
      price: 75,
      imgMain: BlackNikeHoodie,
      type: "clothes",
      liked: false,
    },
    {
      key: 11,
      id: 11,
      name: "Black Adidas Hoodie",
      price: 50,
      imgMain: BlackAdidasHoodie,
      type: "clothes",
      liked: false,
    },
    {
      key: 12,
      id: 12,
      name: "Black Nike Hoodie2",
      price: 55,
      imgMain: BlackNikeHoodie2,
      type: "clothes",
      liked: false,
    },
  ],
};

let varFunc = () => {
}

export const subscriber = (observer) =>{
  varFunc = observer;
}

export let addCartItem = (id) => {
  let index = id - 1;
  let newCartItemInfo = {
    key: `${id}-${new Date().getTime()}`,
    id: id,
    name: state.productData[index].name,
    price: state.productData[index].price,
    imgMain: state.productData[index].imgMain,
    type: state.productData[index].type,
    quantity: 0
  };
  let newCartItems = JSON.parse(localStorage.getItem("newCartItems"));
  if (!Array.isArray(newCartItems)) {
    newCartItems = [];
  }
  
  let existingCartItem = newCartItems.find(item => item.id === id);
  if (existingCartItem) {
    existingCartItem.quantity += 1; 
  } else {
    newCartItems.push({...newCartItemInfo, quantity: 1});
  }
  
  localStorage.setItem("newCartItems", JSON.stringify(newCartItems));
};

export let addLikedItem = (id) => {
  let index = id - 1;
  let newLikedItemInfo = {
    key: `${id}-${new Date().getTime()}`,
    id: id,
    name: state.productData[index].name,
    price: state.productData[index].price,
    imgMain: state.productData[index].imgMain,
    type: state.productData[index].type,
    quantity: 0
  };
  let newLikedItems = JSON.parse(localStorage.getItem("newLikedItems"));
  if (!Array.isArray(newLikedItems)) {
    newLikedItems = [];
  }
  
  let existingLikedItem = newLikedItems.find(item => item.id === id);
  if (existingLikedItem) {
    existingLikedItem.quantity += 1; 
  } else {
    newLikedItems.push({...newLikedItemInfo, quantity: 1});
  }
  
  localStorage.setItem("newLikedItems", JSON.stringify(newLikedItems));
};

export function getLikedItems() {
  const likedItems = localStorage.getItem("newLikedItems");
  return likedItems ? JSON.parse(likedItems) : [];
}

export function getCartItems() {
  const cartItems = localStorage.getItem("newCartItems");
  return cartItems ? JSON.parse(cartItems) : [];
}