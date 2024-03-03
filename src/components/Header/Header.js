import "./Header.css";
import myBopsLogo from "../../images/myBops.png";
import avatar from "../../images/avatar.jpg";
import { useState } from "react";
import { NavLink } from "react-router-dom";
function Header() {
  const [loggedIn, setLoggedIn] = useState(true);

  return (
    <div className="header">
      <div className="header__logo-wrapper">
        <NavLink exact to="/">
          <img src={myBopsLogo} alt="myBops logo" className="header__logo" />
        </NavLink>
      </div>
      {loggedIn ? (
        <>
          <div className="header__user-wrapper">
            <p className="header__link">Erik</p>
            <div className="header__user-avatar_wrapper">
              <img
                src={avatar}
                alt="user avatar"
                className="header__user-avatar"
              />
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="header__link-wrapper">
            <p className="header__link">Sign Up</p>
            <p className="header__link">Sign In</p>
          </div>
        </>
      )}
    </div>
  );
}

export default Header;
