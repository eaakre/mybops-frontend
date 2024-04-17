import "./Card.css";

function Card({ item, index, onCardClick }) {
  return (
    <div className="card">
      <img
        src={item.images[0].url}
        alt={item.name}
        onClick={() => onCardClick(item)}
        className="card__image"
      />
      <p className="card__title">
        {index}. {item.name}
      </p>
      <p className="card__subtitle">{item.genres[0]}</p>
    </div>
  );
}

export default Card;
