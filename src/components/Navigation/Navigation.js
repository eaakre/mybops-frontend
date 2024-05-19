import "./Navigation.css";
import React from "react";
import LoginButton from "../LoginButton/LoginButton";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import placeholderAvatar from "../../images/placeholder_avatar.png";

const barsIcon = <FontAwesomeIcon icon={faBars} />;
const closeIcon = <FontAwesomeIcon icon={faX} />;

function Navigation({
  onSongsTab,
  onArtistsTab,
  onProfileTab,
  onConfirmModal,
  toggleMenu,
  isMenuOpen,
  ismenuIcon,
  activeTab,
}) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <>
      {currentUser.loggedIn ? (
        <div className="nav">
          <div className={isMenuOpen ? "nav__menu open" : "nav__menu"}>
            <NavLink
              exact
              to="/"
              className={
                activeTab === "tracks"
                  ? "nav__link_button activeTab"
                  : "nav__link_button"
              }
              onClick={onSongsTab}
            >
              Songs
            </NavLink>
            <NavLink
              exact
              to="/"
              className={
                activeTab === "artists"
                  ? "nav__link_button activeTab"
                  : "nav__link_button"
              }
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
              {currentUser.currentUser.display_name}
            </NavLink>
            <NavLink
              exact
              to="/profile"
              className="nav__link nav__avatar"
              onClick={onProfileTab}
            >
              <div className="nav__avatar-wrapper">
                <img
                  src={
                    currentUser.currentUser.images?.[0]
                      ? currentUser.currentUser.images?.[0].url
                      : placeholderAvatar
                  }
                  alt={currentUser.currentUser.display_name}
                  className="nav__avatar"
                />
              </div>
            </NavLink>
            <div className="profile__logout-wrapper">
              <button className="profile__logout" onClick={onConfirmModal}>
                Logout
              </button>
            </div>
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
          <LoginButton />
        </>
      )}
    </>
  );
}

export default Navigation;
