import "./Main.css";
import ToggleButton from "../ToggleButton/ToggleButton";
import Card from "../Card/Card";
import { bands } from "../../utils/constants";

function Main({ onCardClick }) {
  return (
    <main className="main">
      <ToggleButton />
      <section className="main__wrapper">
        {bands.map((band) => (
          <Card item={band} key={band.id} onCardClick={onCardClick} />
        ))}
      </section>
    </main>
  );
}

export default Main;
