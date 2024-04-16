import "./Header.css";
import myBopsLogo from "../../images/myBops.png";
import avatar from "../../images/avatar.jpg";
import Navigation from "../Navigation/Navigation";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const menuIcon = <FontAwesomeIcon icon={faBars} />;

function Header({
  onSongsTab,
  onArtistsTab,
  onProfileTab,
  toggleMenu,
  isMenuOpen,
  ismenuIcon,
  onSignupModal,
  onSigninModal,
  loggedIn,
}) {
  return (
    <div className="header">
      <div className="header__logo-wrapper">
        <NavLink exact to="/">
          <img src={myBopsLogo} alt="myBops logo" className="header__logo" />
        </NavLink>
      </div>
      <Navigation
        onSongsTab={onSongsTab}
        onArtistsTab={onArtistsTab}
        onProfileTab={onProfileTab}
        onSigninModal={onSigninModal}
        toggleMenu={toggleMenu}
        isMenuOpen={isMenuOpen}
        ismenuIcon={ismenuIcon}
        loggedIn={loggedIn}
      />
    </div>
  );
}

export default Header;
