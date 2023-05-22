import React, { useState, useEffect } from "react";
import Slider from "../../slider/slider";
import ProductSlider from "../../SliderTest/SliderTest";
import Header from "../../Header/Header";
import { ProductTemplate } from "../../ProductTemplate";
import "../ProductPage/productPage.css";
import { store } from "../../state/state";
import GreenNike from "../../images/shoes/greenNike.jpg";
import BlackAdidas from "../../images/shoes/blackAdidas.jpg";
import AirForce1White from "../../images/shoes/airForce1White.jpg";
import JordanGrey from "../../images/shoes/jordanGrey.jpg";
import DunkYellow from "../../images/shoes/dunkYellow.jpg";
import NikeBones from "../../images/shoes/nikeBones.jpg";
import greenNike2 from "../../images/shoes/greenNike2.webp";

const ProductPage = (props) => {
  debugger;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [props.idProduct]);

  //liked button changer
  let clickedLikedButton = React.createRef();

  useEffect(() => {
    store.getLikedItems().some((item) => item.id === props.idProduct)
      ? changeLikedButton()
      : changeNotLikedButton();
  }, [props.idProduct]);

  // const otherProdsArray = () => {
  //   return props.productData.map((p) =>
  //     p.id != props.idProduct ? (
  //       <ProductTemplate
  //         id={p.id}
  //         ProductName={p.name}
  //         ImgLink={p.imgMain}
  //         Price={p.price}
  //       />
  //     ) : null
  //   );
  // };

  const changeLikedButton = () => {
    clickedLikedButton.current.style.background = "#111";
    clickedLikedButton.current.style.color = "white";
    clickedLikedButton.current.innerText = "Liked";
  };
  const changeNotLikedButton = () => {
    clickedLikedButton.current.style.background = "white";
    clickedLikedButton.current.style.color = "#111";
    clickedLikedButton.current.innerText = "Like";
  };
  const handleLikedButton = (productId) => {
    store.addLikedItem(productId);
    changeLikedButton();
  };

  //cart button changer
  let clickedCartButton = React.createRef();

  useEffect(() => {
    store.getCartItems().some((item) => item.id === props.idProduct)
      ? changeCartButton()
      : changeNotCartButton();
  }, [props.idProduct]);

  const changeCartButton = () => {
    clickedCartButton.current.style.background = "#111";
    clickedCartButton.current.style.color = "white";
    clickedCartButton.current.innerText = "Added to the cart";
  };
  const changeNotCartButton = () => {
    clickedCartButton.current.style.background = "white";
    clickedCartButton.current.style.color = "#111";
    clickedCartButton.current.innerText = "Add to the cart";
  };
    const handleAddToCart = (productId) => {
      debugger
      store.addCartItem(productId);
      changeCartButton();
    };

  return (
    <>
      <Header
        FirstPage="home"
        FirstPath="home"
        SecondPage="men"
        ThirdPage="women"
        ForthPage="kids"
      />
      <div className="pushFooterProducts">
        <div class="placer">
          <div class="bigConatinersDes">
          <ProductSlider productImages={props.imagesProduct} />

            
          </div>
          <div class="productInfo">
            <div class="nameCenter">
              <h1 className="generalFont">{props.nameProduct}</h1>
            </div>
            <h3 className="detailsFont" id="filter">
              {props.filtersProduct}
            </h3>

            <div className="iconsPriceSize">
              <div className="bordPriceSize">
                <h4> {props.priceProduct}$ </h4>
              </div>
              <div className="bordPriceSize">
                <h4>{props.sizeProduct}</h4>
              </div>
            </div>

            <div className="sixItems">
              <div class="borderSix">
                <h4>36</h4>
              </div>
              <div class="borderSix">
                <h4>36,5</h4>
              </div>
              <div class="borderSix">
                <h4>37</h4>
              </div>
              <div class="borderSix">
                <h4>38</h4>
              </div>
              <div class="borderSix">
                <h4>39</h4>
              </div>
              <div class="borderSix">
                <h4>41</h4>
              </div>
            </div>
            <div class="flexboxButtons">
              <div>
                <button
                  ref={clickedCartButton}
                  onClick={() => handleAddToCart(props.idProduct)}
                  className="generalFont cartButton"
                >
                  Add to the cart{" "}
                </button>
              </div>
              <div>
                <button
                  ref={clickedLikedButton}
                  className="generalFont cartButton"
                  onClick={() => handleLikedButton(props.idProduct)}
                >
                  {" "}
                  Like{" "}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="placer1">
          <div class="bigConatinersDes containerInfo">
            <div className="paddingContent">
              <h1 className="generalFont">About product:</h1>
              <div class="listOfProps">
                <div class="aboutProductProperties1">
                  <h3 className="detailsFont">•materails: cotton</h3>
                  <h3 className="detailsFont">•size: M</h3>
                </div>
                <div class="aboutProductProperties2">
                  <h3 className="detailsFont">•lacing</h3>
                  <h3 className="detailsFont">•rubber sole</h3>
                </div>
                <div class="aboutProductProperties3">
                  <h3 className="detailsFont">•model number</h3>
                  <h3 className="detailsFont">•country: France</h3>
                </div>
              </div>
              <h4 className="fontLongText placeBetween" id="bigTextAbout">
                {props.descriptionProduct}
              </h4>
            </div>
          </div>
          <div class="something1">
            <img class="prodPhotoOwnPage" src={greenNike2} alt="nikeGreen2" />
          </div>
        </div>
        <div className="underInfo">
          <h2> Other products</h2>{" "}
        </div>
        <div>
          <div className="flexBoxProducts">
            <div className="flexBox1"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;

/* The two-toned smooth leather uppers of the Nike Dunk provided
endless summer offerings for one of the most coveted lifestyle
silhouettes to date. As the model follows suit in the seasonal
transition, The Swoosh is electing fleece to coat the entirety
of its low-top construction with a lime green and white pairing
of the Nike Dunk Low. In line with the Beaverton-based brands
conversion to warmer fabrics and textiles as the autumnal months
close, the upcoming pair comes clad in the wooly material that
additionally fills the inner lining for a cozy fit.*/
