import "./AboutSection.css";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function AboutSection({ item, onTab, onSigninModal }) {
  const currentUser = useContext(CurrentUserContext);
  return (
    <section className="about__section">
      <div className="section__info">
        <h2 className="section__title">{item.title}</h2>
        <p className="about__text">{item.description}</p>
        {currentUser.loggedIn ? (
          <NavLink
            exact
            to="/songs"
            className="section__button"
            onClick={onTab}
          >
            {item.buttonText}
          </NavLink>
        ) : (
          <button onClick={onSigninModal}>{item.altButtonText}</button>
        )}
      </div>
      <img src={item.imageUrl} alt={item.imageAlt} className="section__image" />
    </section>
  );
}

export default AboutSection;
