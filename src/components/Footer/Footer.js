import "./Footer.css";
import spotifyLogo from "../../images/Spotify_Logo_RGB_Green.png";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__info">
        <p className="footer__text">myBops 2024.</p>
        <p className="footer__text">Erik Aakre</p>
      </div>
      <div className="footer__social">
        <p className="footer__text">powered by:</p>
        <img src={spotifyLogo} alt="Spotify Logo" className="footer__spotify" />
      </div>
    </div>
  );
}

export default Footer;
