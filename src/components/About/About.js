import "./About.css";
import AboutSection from "../AboutSection/AboutSection";
import { songSection, artistSection } from "../../utils/constants";

function About({ onSongsTab, onArtistsTab, onSigninModal }) {
  return (
    <main className="about">
      <h1 className="about__title">Your music. Your history.</h1>
      <p>
        Find your listening history here. Login with your Spotify Account to see
        your Spotify data from the last 4 weeks, 6 months, or 1 year.
      </p>
      <AboutSection
        item={songSection}
        onTab={onSongsTab}
        onSigninModal={onSigninModal}
      />
      <AboutSection
        item={artistSection}
        onTab={onArtistsTab}
        onSigninModal={onSigninModal}
      />
    </main>
  );
}

export default About;
