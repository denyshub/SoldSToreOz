import React from "react";
import s from "./profile.module.css";
import HeaderProfile from "../../Header/Header";
const ProfilePage = () => {
  return (
    <>
      <div className={s.pushFooter}>
        <div className={s.container1}>
          <div className={s.containerProfile}>
            <input type="checkbox" id={s.hidden_btn} />
            <div className={s.signup}>
              <label for={s.hidden_btn}>Sign up</label>
              <input type="text" placeholder="User name" />
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <button className={s.buttonSignUp}>Sign up</button>
            </div>

            <div className={s.login}>
              <label for={s.hidden_btn}>Login</label>
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <button className={s.buttonLogin}>Login</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
