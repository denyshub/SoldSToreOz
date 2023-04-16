import React from "react";
import styles from "./Content.module.css";
import newColls from "../../../images/shoes/newCollsDesk.png";
import { ProductTemplate } from "../../../ProductTemplate";
import test from "../../../images/shoes/jordanGrey.jpg";
const AboutUs = () => {
  return (
    <div>
      <div className={styles.collectionsDiv}>
        <div className={styles.collectionsText}>
          {" "}
          New <br />
          collections <br />
          available
        </div>
        <div>
          {" "}
          <img className={styles.imageNewColls} src={newColls}></img>
        </div>
      </div>
      <div className={styles.productsDivDesk}>
        <div className={styles.boxAligner}>
          <ProductTemplate
            ProductName="sup"
            Price="100"
            ImgLink={test}
          ></ProductTemplate>
          <ProductTemplate
            ProductName="sup"
            Price="100"
            ImgLink={test}
          ></ProductTemplate>
          <ProductTemplate
            ProductName="sup"
            Price="100"
            ImgLink={test}
          ></ProductTemplate>
          <ProductTemplate
            ProductName="sup"
            Price="100"
            ImgLink={test}
          ></ProductTemplate>
          <ProductTemplate
            ProductName="sup"
            Price="100"
            ImgLink={test}
          ></ProductTemplate>
          <ProductTemplate
            ProductName="sup"
            Price="100"
            ImgLink={test}
          ></ProductTemplate>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
