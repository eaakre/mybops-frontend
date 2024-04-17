import "./About.css";
import { songUrl, artistUrl } from "../../utils/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListOl } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const list = <FontAwesomeIcon icon={faListOl} />;

function About({ onSongsTab, onArtistsTab, onSigninModal }) {
  const currentUser = useContext(CurrentUserContext);
  return (
    <main className="about">
      <h1 className="about__title">Your music. Your history.</h1>
      <p>
        Find your listening history here. Login with your Spotify Account to see
        your Spotify data from the last 4 weeks, 6 months, or 1 year.
      </p>
      <section className="about__section">
        <div className="section__info">
          <h2 className="section__title">Your Favorite Songs</h2>
          <p className="about__text">
            Find the songs that have been on repeat for you. Are you a
            trailblazer?
          </p>
          {currentUser.loggedIn ? (
            <NavLink
              exact
              to="/songs"
              className="section__button"
              onClick={onSongsTab}
            >
              Go To Songs
            </NavLink>
          ) : (
            <button onClick={onSigninModal}>Login To See Your Songs</button>
          )}
        </div>
        <img
          src={songUrl}
          alt="Man listening to music on headphones"
          className="section__image"
        />
      </section>

      <section className="about__section">
        <div className="section__info">
          <h2 className="section__title">Your Favorite Artists</h2>
          <p className="about__text">
            These artists and bands have dominated your airwaves lately. Who is
            on the top of your charts?
          </p>
          {currentUser.loggedIn ? (
            <NavLink
              exact
              to="/artists"
              className="section__button"
              onClick={onArtistsTab}
            >
              Go To Artists
            </NavLink>
          ) : (
            <button onClick={onSigninModal}>Login To See Your Artists</button>
          )}
        </div>
        <img
          src={artistUrl}
          alt="musician singing and playing guitar"
          className="section__image"
        />
      </section>
    </main>
  );
}

export default About;
