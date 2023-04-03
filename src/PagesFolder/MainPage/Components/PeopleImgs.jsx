import React from "react";
import kid from "../../../images/People/kid.png";
import women from "../../../images/People/women.png";
import men from "../../../images/People/men.png";
import styles from './Content.module.css'
import { NavLink } from "react-router-dom";
const PeopleImgs = () => {
  return (
    


      <div className={styles.mainContainer}>
        <div className={styles.flexBoxPeople}>
            <div className={styles.flexBoxPeople}>
            <div>
              <NavLink to="/men">
                <img className={styles.photo_size} src={men} alt="men"></img>
              </NavLink>
              <div>
              <p className={styles.captions}>For men</p>
              </div>
            </div>
            <div>
              <NavLink to="/women">
                <img className={styles.photo_size} src={women} alt="women"></img>
              </NavLink>
              <div>
              <p className={styles.captions}>For women</p>
              </div>
            </div>
            <div>
              <NavLink to="/children">
                <img className={styles.photo_size} src={kid} alt="kid"></img>
              </NavLink>
              <div>
              <p className={styles.captions}>For children</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      

  );
};

export default PeopleImgs;
