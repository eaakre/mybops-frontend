import "./Header.css";
import myBopsLogo from "../../images/myBops.png";
import Navigation from "../Navigation/Navigation";
import { spotifyProfile } from "../../utils/constants";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const menuIcon = <FontAwesomeIcon icon={faBars} />;

const Header = ({
  onSongsTab,
  onArtistsTab,
  onProfileTab,
  toggleMenu,
  isMenuOpen,
  ismenuIcon,
  onSigninModal,
  activeTab,
  loggedIn,
  code,
}) => {
  return (
    <div className="header">
      <div className="header__logo-wrapper">
        <NavLink exact to="/">
          <img src={myBopsLogo} alt="myBops logo" className="header__logo" />
        </NavLink>
      </div>
      <div className="header__link-wrapper">
        <Navigation
          onSongsTab={onSongsTab}
          onArtistsTab={onArtistsTab}
          onProfileTab={onProfileTab}
          onSigninModal={onSigninModal}
          toggleMenu={toggleMenu}
          isMenuOpen={isMenuOpen}
          ismenuIcon={ismenuIcon}
          activeTab={activeTab}
          loggedIn={loggedIn}
          code={code}
        />
        {loggedIn && (
          <div className="header__profile-wrapper">
            <NavLink exact to="/profile" className="nav__link">
              {spotifyProfile.display_name}
            </NavLink>
            <NavLink exact to="/profile" className="nav__link nav__avatar">
              <div className="nav__avatar-wrapper">
                <img
                  src={spotifyProfile.images[1].url}
                  alt={spotifyProfile.display_name}
                  className="nav__avatar"
                />
              </div>
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
