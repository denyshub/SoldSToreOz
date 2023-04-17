import React from "react";
import LogoHeader from "./logoHeader";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import "../syles/MOBILENAVTEMP.css";
const Header = (props) => {
  let firstPath = "/" + props.FirstPage;
  if (props.FirstPage == "home") {
    firstPath = "/";
  }
  const secondPath = "/" + props.SecondPage;
  const thirdPath = "/" + props.ThirdPage;
  const forthPath = "/" + props.ForthPage;

  const firstPage = props.FirstPage;
  const secondPage = props.SecondPage;
  const thirdPage = props.ThirdPage;
  const fortPage = props.ForthPage;
  const [drop, setDrop] = useState(false);

  return (
    <>
      <header>
        <div className={styles.headerBox}>
          <LogoHeader />
          <nav>
            <ul className={styles.nav__links}>
              <li>
                <Link to={firstPath} className={styles.navStyle}>
                  {firstPage}
                </Link>
              </li>
              <li>
                <Link to={secondPath} className={styles.navStyle}>
                  {secondPage}
                </Link>
              </li>
              <li>
                <Link to={thirdPath} className={styles.navStyle}>
                  {thirdPage}
                </Link>
              </li>
              <li>
                <Link to={forthPath} className={styles.navStyle}>
                  {fortPage}
                </Link>
              </li>
            </ul>
          </nav>

          <div className={styles.iconsFlexBox}>
            <div className={styles.search_box}>
              <input
                className={styles.search_txt}
                type="text"
                name=""
                placeholder="  Search..."
              ></input>
              <a
                className={`${styles.search_btn} ${styles.iconMen} ${styles.search} ${styles.hoverIcons}`}
              >
                <ion-icon name="search-outline"></ion-icon>
              </a>
            </div>

            <Link
              className={styles.cartIcon + " " + styles.hoverIcons}
              to="/cart"
              activeStyle={styles.activeNavLink}
            >
              <ion-icon name="cart-outline"></ion-icon>
            </Link>
            <Link
              to="/liked"
              id={styles.person}
              className={`${styles.iconMen} ${styles.heartIcon} ${styles.hoverIcons}`}
         
            >
              <ion-icon name="heart-outline"></ion-icon>
            </Link>

            <Link
              to="/profile"
              id={styles.person}
              className={`${styles.iconMen} ${styles.person}  ${styles.hoverIcons}`}
              activeClassName={styles.activeNavLink}
            >
              <ion-icon name="person-outline"></ion-icon>
            </Link>
            <div className={styles.mobileNavButtonDiv}>
              {" "}
              <button
                onClick={() => {
                  setDrop(!drop);
                }}
                className={styles.menuButton + " " + "menuMobileIcon"}
              >
                {" "}
                <ion-icon name="menu-outline"></ion-icon>
              </button>
            </div>
            <div className={styles.sunPosition}>
              <svg
                id="darkMode"
                width="30"
                height="30"
                viewBox="0 0 56 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  class="sun"
                  id="sun"
                  d="M27.6609 41.7987C19.8655 41.7987 13.5231 35.457 13.5231 27.6609C13.5231 19.8655 19.8655 13.5231 27.6609 13.5231C35.457 13.5231 41.7987 19.8655 41.7987 27.6609C41.7987 35.457 35.457 41.7987 27.6609 41.7987Z"
                  fill="white"
                />

                <path
                  class="green"
                  id="green"
                  d="M23.7589 10.8246C23.5794 10.8246 23.4067 10.7466 23.2887 10.6058C23.1418 10.4312 23.1036 10.1897 23.1897 9.97822L27.0917 0.38295C27.1858 0.151828 27.4108 0 27.6609 0C27.9111 0 28.1361 0.151828 28.2301 0.38295L32.1328 9.97822C32.2188 10.1897 32.1801 10.4312 32.0332 10.6058C31.8869 10.7804 31.6546 10.8603 31.432 10.8105C28.9456 10.269 26.3744 10.269 23.8892 10.8105C23.8462 10.8203 23.8025 10.8246 23.7589 10.8246Z"
                  fill="white"
                />
                <path
                  class="red"
                  id="red"
                  d="M27.6609 55.3219C27.4108 55.3219 27.1858 55.1707 27.0917 54.9389L23.1897 45.3437C23.1036 45.1322 23.1418 44.8906 23.2887 44.7161C23.4356 44.5415 23.6667 44.4628 23.8898 44.5114C26.375 45.0535 28.9463 45.0535 31.4327 44.5114C31.6558 44.4622 31.8875 44.5421 32.0338 44.7161C32.1807 44.89 32.2195 45.1322 32.1334 45.3437L28.2308 54.9389C28.1361 55.1707 27.9111 55.3219 27.6609 55.3219Z"
                  fill="white"
                />
                <path
                  class="orange"
                  id="orange"
                  d="M10.21 32.1783C10.1319 32.1783 10.0532 32.1635 9.97822 32.1334L0.38295 28.2308C0.151828 28.1361 0 27.9111 0 27.6609C0 27.4108 0.151828 27.1858 0.383565 27.0917L9.97884 23.1897C10.1897 23.1036 10.4319 23.1418 10.6064 23.2887C10.781 23.4356 10.8597 23.6673 10.8111 23.8898C10.54 25.1321 10.4024 26.4014 10.4024 27.6609C10.4024 28.9204 10.54 30.1891 10.8111 31.4327C10.8597 31.6552 10.781 31.8869 10.6064 32.0338C10.4933 32.1291 10.3526 32.1783 10.21 32.1783Z"
                  fill="white"
                />
                <path
                  class="blue"
                  id="blue"
                  d="M45.1119 32.1783C44.9699 32.1783 44.8285 32.1291 44.7161 32.0338C44.5415 31.8875 44.4628 31.6558 44.5114 31.4327C44.7818 30.1898 44.9195 28.9204 44.9195 27.6609C44.9195 26.4014 44.7818 25.1321 44.5114 23.8898C44.4628 23.6673 44.5415 23.4356 44.7161 23.2887C44.89 23.1418 45.1316 23.1036 45.3437 23.1897L54.9389 27.0917C55.1707 27.1858 55.3219 27.4108 55.3219 27.6609C55.3219 27.9111 55.1707 28.1361 54.9389 28.2301L45.3437 32.1328C45.2687 32.1629 45.19 32.1783 45.1119 32.1783Z"
                  fill="white"
                />
                <path
                  class="cyan"
                  id="cyan"
                  d="M12.5624 18.6957C12.5452 18.6957 12.5273 18.6951 12.5101 18.6933C12.2827 18.6736 12.0848 18.5298 11.9962 18.3201L7.97065 8.77589C7.87353 8.54539 7.92578 8.27923 8.1022 8.1022C8.27923 7.92517 8.546 7.87415 8.77589 7.97065L18.3201 11.9962C18.5304 12.0848 18.6742 12.2827 18.6933 12.5095C18.7129 12.7369 18.6047 12.9564 18.413 13.0793C17.3416 13.7672 16.3476 14.5669 15.4569 15.4569C14.5669 16.3476 13.7665 17.3416 13.0793 18.413C12.9656 18.59 12.7701 18.6957 12.5624 18.6957Z"
                  fill="white"
                />
                <path
                  class="pink"
                  id="pink"
                  d="M46.7851 47.3998C46.7046 47.3998 46.6234 47.3844 46.546 47.3518L37.0023 43.3262C36.7921 43.2371 36.6483 43.0392 36.6292 42.8124C36.6096 42.5849 36.7177 42.3655 36.9095 42.2419C37.9822 41.5529 38.9767 40.7525 39.8649 39.8643C40.7532 38.9767 41.5535 37.9815 42.2426 36.9089C42.3661 36.7171 42.5825 36.6083 42.813 36.6286C43.0398 36.6477 43.2377 36.7921 43.3269 37.0017L47.3525 46.5454C47.449 46.7759 47.3973 47.0427 47.2203 47.2191C47.1023 47.3377 46.9449 47.3998 46.7851 47.3998Z"
                  fill="white"
                />
                <path
                  class="yellow"
                  id="yellow"
                  d="M42.7595 18.6951C42.5511 18.6951 42.3563 18.59 42.2419 18.413C41.5529 17.3397 40.7525 16.3458 39.8643 15.4569C38.9749 14.5675 37.9803 13.7672 36.9089 13.0793C36.7165 12.9564 36.6089 12.7369 36.6286 12.5095C36.6477 12.2821 36.7921 12.0848 37.0017 11.9962L46.5454 7.97065C46.7746 7.87353 47.042 7.92517 47.2191 8.1022C47.3961 8.27923 47.4477 8.54539 47.3512 8.77589L43.3256 18.3201C43.2365 18.5304 43.0386 18.6742 42.8118 18.6933C42.7945 18.6945 42.7773 18.6951 42.7595 18.6951Z"
                  fill="white"
                />
                <path
                  class="white"
                  id="white"
                  d="M8.53617 47.3998C8.37635 47.3998 8.21899 47.3371 8.10158 47.2197C7.92455 47.0427 7.8723 46.7765 7.97004 46.546L11.9956 37.0023C12.0841 36.7921 12.2821 36.6483 12.5089 36.6292C12.7363 36.6028 12.9558 36.7177 13.0787 36.9095C13.7665 37.9803 14.5669 38.9749 15.4563 39.8649C16.3452 40.7538 17.3391 41.5535 18.4123 42.2426C18.6041 42.3661 18.7123 42.5856 18.6926 42.813C18.673 43.0398 18.5291 43.2377 18.3195 43.3269L8.77528 47.3525C8.69783 47.3844 8.6173 47.3998 8.53617 47.3998Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>
      </header>
      <div className={`dropNavbar ${drop ? "active" : "inactive"}`}>
        <div className="mobileNavRow">
          <Link className="linksMobile" to={firstPath}>
            {firstPage}
          </Link>
        </div>
        <div className="mobileNavRow">
          <Link className="linksMobile" to={secondPath}>
            {secondPage}
          </Link>
        </div>
        <div className="mobileNavRow">
          {" "}
          <Link className="linksMobile" to={thirdPath}>
            {thirdPage}
          </Link>
        </div>
        <div className="mobileNavRow">
          <Link className="linksMobile" to={forthPath}>
            {fortPage}
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
