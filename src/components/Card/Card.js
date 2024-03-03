import "./Card.css";

function Card({ item, onCardClick }) {
  return (
    <div className="card">
      <img
        src={item.image}
        alt={item.name}
        onClick={() => onCardClick(item)}
        className="card__image"
      />
      <p className="card__title">{item.name}</p>
      <p className="card__subtitle">{item.genre}</p>
    </div>
  );
}

export default Card;
