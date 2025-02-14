import React from "react";
import Slider from "../../slider/slider";
import Header from "../../Header/Header";
import { ProductTemplate } from "../../ProductTemplate";
import '../ProductPage/productPage.css'

import GreenNike from "../../images/shoes/greenNike.jpg";
import BlackAdidas from "../../images/shoes/blackAdidas.jpg";
import AirForce1White from "../../images/shoes/airForce1White.jpg";
import JordanGrey from "../../images/shoes/jordanGrey.jpg";
import DunkYellow from "../../images/shoes/dunkYellow.jpg";
import NikeBones from "../../images/shoes/nikeBones.jpg";
import greenNike2 from "../../images/shoes/greenNike2.webp";

const productPage = () => {
  return (
    <>
      <Header AddPage="HOME" Page="MEN" Link="men" AddLink="" />

      <div className="pushFooterProducts">
        <div class="placer">
          <div class="bigConatinersDes">
            <div class="flexboxImgPrPag">
              <div className="photoSize">
                <Slider />
              </div>
            </div>
          </div>
          <div class="productInfo">
            <div class="nameCenter">
              <h1 className="generalFont">
                GRATEFUL DEAD X NIKE SB DUNK LOW GREEN BEAR
              </h1>
            </div>
            <h3 className="detailsFont" id="filter">
              Filters:Casual/Nike/Green
            </h3>

            <div class="iconsPriceSize">
              <div class="bordPriceSize">
                <h4>1500$ </h4>
              </div>
              <div class="bordPriceSize">
                <h4>UK 38</h4>
              </div>
            </div>

            <div class="sixItems">
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
              <div class="cartButton">
                <h3 className="generalFont"> Add to your cart </h3>
              </div>
              <div class="cartButton">
                <h3 className="generalFont">Like</h3>
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
                The two-toned smooth leather uppers of the Nike Dunk provided
                endless summer offerings for one of the most coveted lifestyle
                silhouettes to date. As the model follows suit in the seasonal
                transition, The Swoosh is electing fleece to coat the entirety
                of its low-top construction with a lime green and white pairing
                of the Nike Dunk Low. In line with the Beaverton-based brands
                conversion to warmer fabrics and textiles as the autumnal months
                close, the upcoming pair comes clad in the wooly material that
                additionally fills the inner lining for a cozy fit.
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
            <div className="flexBox1">
              <ProductTemplate
                ProdPage="productPage"
                ProductName="Nike green"
                ImgLink={GreenNike}
                Price="1500"
              />
              <ProductTemplate
                ProdPage="productPage"
                ProductName="Nike bones"
                ImgLink={NikeBones}
                Price="300"
              />
              <ProductTemplate
                ProdPage="productPage"
                ProductName="dunk yellow"
                ImgLink={DunkYellow}
                Price="400"
              />
              <ProductTemplate
                ProdPage="productPage"
                ProductName="Air force 1 white"
                ImgLink={AirForce1White}
                Price="200"
              />
              <ProductTemplate
                ProdPage="productPage"
                ProductName="jordan grey"
                ImgLink={JordanGrey}
                Price="300"
              />
              <ProductTemplate
                ProdPage="productPage"
                ProductName="Nike green"
                ImgLink={GreenNike}
                Price="1500"
              />
              <ProductTemplate
                ProdPage="productPage"
                ProductName="black adidas"
                ImgLink={BlackAdidas}
                Price="500"
              />
              <ProductTemplate
                ProdPage="productPage"
                ProductName="dunk yellow"
                ImgLink={DunkYellow}
                Price="300"
              />
              <ProductTemplate
                ProdPage="productPage"
                ProductName="Air force 1 white"
                ImgLink={AirForce1White}
                Price="200"
              />
              <ProductTemplate
                ProdPage="productPage"
                ProductName="Nike green"
                ImgLink={GreenNike}
                Price="1500"
              />
              <ProductTemplate
                ProdPage="productPage"
                ProductName="black adidas"
                ImgLink={BlackAdidas}
                Price="500"
              />
              <ProductTemplate
                ProdPage="productPage"
                ProductName="dunk yellow"
                ImgLink={DunkYellow}
                Price="300"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default productPage;
