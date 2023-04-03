import React from "react";
import logoImage from '../../images/svj/logo.png'
import styles from './Header.module.css'
const Logo = () => {

  return(
    <img className = {styles.logo} src={logoImage}></img>
  );

}

export default Logo