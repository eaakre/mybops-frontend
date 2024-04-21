import "./Navigation.css";
import React from "react";
import LoginButton from "../LoginButton/LoginButton";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { spotifyProfile } from "../../utils/constants";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";

const barsIcon = <FontAwesomeIcon icon={faBars} />;
const closeIcon = <FontAwesomeIcon icon={faX} />;

function Navigation({
  onSongsTab,
  onArtistsTab,
  onProfileTab,
  onSigninModal,
  toggleMenu,
  isMenuOpen,
  ismenuIcon,
}) {
  const currentUser = React.useContext(CurrentUserContext);
  return (
    <>
      {currentUser.loggedIn ? (
        <div className="nav">
          <div className={isMenuOpen ? "nav__menu open" : "nav__menu"}>
            <NavLink
              exact
              to="/songs"
              className="nav__link"
              onClick={onSongsTab}
            >
              Songs
            </NavLink>
            <NavLink
              exact
              to="/artists"
              className="nav__link"
              onClick={onArtistsTab}
            >
              Artists
            </NavLink>
            <NavLink
              exact
              to="/profile"
              className="nav__link"
              onClick={onProfileTab}
            >
              {spotifyProfile.display_name}
            </NavLink>
            <NavLink
              exact
              to="/profile"
              className="nav__link nav__avatar"
              onClick={onProfileTab}
            >
              <div className="nav__avatar-wrapper">
                <img
                  src={spotifyProfile.images[1].url}
                  alt={spotifyProfile.display_name}
                  className="nav__avatar"
                />
              </div>
            </NavLink>
          </div>

          <button
            className={
              isMenuOpen ? "nav__mobile-menu open" : "nav__mobile-menu"
            }
            onClick={toggleMenu}
          >
            {ismenuIcon ? barsIcon : closeIcon}
          </button>
        </div>
      ) : (
        <>
          {/* <button
            type="text"
            className="header__button"
            onClick={onSignupModal}
          >
            Sign Up
          </button> */}
          {/* <button
            type="text"
            className="header__button"
            onClick={onSigninModal}
          >
            Sign In
          </button> */}
          <LoginButton />
        </>
      )}
    </>
  );
}

export default Navigation;
