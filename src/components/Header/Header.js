import "./Header.css";
import myBopsLogo from "../../images/myBops.png";
import Navigation from "../Navigation/Navigation";
import { NavLink } from "react-router-dom";

const Header = ({
  onSongsTab,
  onArtistsTab,
  onProfileTab,
  onConfirmModal,
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
        <NavLink exact to="/about">
          <img src={myBopsLogo} alt="myBops logo" className="header__logo" />
        </NavLink>
      </div>
      <div className="header__link-wrapper">
        <Navigation
          onSongsTab={onSongsTab}
          onArtistsTab={onArtistsTab}
          onProfileTab={onProfileTab}
          onSigninModal={onSigninModal}
          onConfirmModal={onConfirmModal}
          toggleMenu={toggleMenu}
          isMenuOpen={isMenuOpen}
          ismenuIcon={ismenuIcon}
          activeTab={activeTab}
          loggedIn={loggedIn}
          code={code}
        />
      </div>
    </div>
  );
};

export default Header;
