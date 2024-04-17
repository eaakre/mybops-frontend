import "./Profile.css";
import { spotifyProfile } from "../../utils/constants";

function Profile({ onConfirmModal }) {
  return (
    <div className="profile">
      <div className="profile__avatar">
        <img
          src={spotifyProfile.images[1].url}
          alt={spotifyProfile.display_name}
          className="profile__avatar-img"
        />
      </div>
      <div className="profile__info">
        <p className="profile__title">{spotifyProfile.display_name}</p>
        <p className="profile__subtitle">Username: {spotifyProfile.id}</p>
        <p className="profile__subtitle">
          Followers: {spotifyProfile.followers.total}
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
