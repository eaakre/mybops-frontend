import "./Profile.css";
import React from "react";
import { spotifyProfile } from "../../utils/constants";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Profile({ onConfirmModal }) {
  const currentUser = React.useContext(CurrentUserContext);
  return (
    <div className="profile">
      <div className="profile__avatar">
        <img
          src={currentUser.currentUser.images[1].url}
          alt={currentUser.currentUser.display_name}
          className="profile__avatar-img"
        />
      </div>
      <div className="profile__info">
        <p className="profile__title">{currentUser.currentUser.display_name}</p>
        <p className="profile__subtitle">
          Username: {currentUser.currentUser.id}
        </p>
        <p className="profile__subtitle">
          Followers: {currentUser.currentUser.followers.total}
        </p>
        <div className="profile__logout-wrapper">
          <button className="profile__logout" onClick={onConfirmModal}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
