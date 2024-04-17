import "./About.css";
import { songUrl, artistUrl } from "../../utils/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListOl } from "@fortawesome/free-solid-svg-icons";

const list = <FontAwesomeIcon icon={faListOl} />;

function About({ item, onCardClick }) {
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
          <button className="section__button">Go To Songs</button>
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
          <button className="section__button">Go To Artists</button>
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
