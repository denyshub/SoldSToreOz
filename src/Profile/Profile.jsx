import React from "react";
import './profile.css'
import HeaderProfile from "../mainPage/Header/Header";
const ProfilePage = () => {
  return (<>
  
<HeaderProfile AddPage = 'HOME' AddLink = '' Page = 'MEN' Link = 'men'/>
    <div className="pushFooter">

    <div class="container1">
      <div class="containerProfile">
        <input type="checkbox" id="hidden-btn" />
        <div class="signup">
          <label for="hidden-btn">Sign up</label>
          <input type="text" placeholder="User name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button class="button1">Sign up</button>
        </div>

        <div class="login">
          <label for="hidden-btn">Login</label>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button class="button1">Login</button>
        </div>
      </div>
    </div>
    </div>
  </>
  );
};

export default ProfilePage;