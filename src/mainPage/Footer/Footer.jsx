import React from "react";
import styles from "../Content/Content.module.css";
import { NavLink } from "react-router-dom";

const FooterPoints = (props) => {
  return (
    <NavLink
      to="..."
      style={{ textDecoration: "none" }}
      className={styles.footerPoints}
    >
      {props.text}
    </NavLink>
  );
};

const FooterTitles = (props) => {
  return <div className={styles.footerTitle}>{props.text}</div>;
};

const Footer = () => {
  return (
    <footer>
      <div className={styles.aboutCompanyDiv}>
        <FooterTitles text="Company info" />
        <FooterPoints text="About us" />
        <FooterPoints text="Contacts" />
        <FooterPoints text="News" />
      </div>

      <div className={styles.supportDiv}>
        <FooterTitles text="Support" />
        <FooterPoints text="Order status" />
        <FooterPoints text="Delivery" />
        <FooterPoints text="Returns" />
        <FooterPoints text="Help" />
      </div>

      <div className={styles.locateIcons}>
        <a href="https://www.instagram.com/">
          <ion-icon id={styles.socials} name="logo-instagram"></ion-icon>
        </a>
        <a href="https://uk-ua.facebook.com/">
          <ion-icon id={styles.socials} name="logo-facebook"></ion-icon>
        </a>
        <a href="https://twitter.com/?lang=uk">
          <ion-icon id={styles.socials} name="logo-twitter"></ion-icon>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
